// אלמנטים מה-DOM
const mainMenu = document.getElementById('main-menu');
const judgeScreen = document.getElementById('judge-screen');
const playerScreen = document.getElementById('player-screen');
const judgeBtn = document.getElementById('judge-btn');
const playerBtn = document.getElementById('player-btn');
const greenCardText = document.getElementById('green-card-text');
const redCardsContainer = document.getElementById('red-cards-container');
const newGreenCardBtn = document.getElementById('new-green-card');
const newCardsBtn = document.getElementById('new-cards');
const backToMenuBtn = document.getElementById('back-to-menu');
const backToMenuPlayerBtn = document.getElementById('back-to-menu-player');
const selectedCardContainer = document.getElementById('selected-card-container');
const selectedCardText = document.getElementById('selected-card-text');

// משתנים גלובליים
let currentRedCards = [];
let selectedCard = null;

// פונקציות עזר
function getRandomCard(cardsArray) {
    const randomIndex = Math.floor(Math.random() * cardsArray.length);
    return cardsArray[randomIndex];
}

function getRandomCards(cardsArray, count) {
    const shuffled = [...cardsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// פונקציות ניהול מסכים
function showMainMenu() {
    mainMenu.classList.remove('hidden');
    judgeScreen.classList.add('hidden');
    playerScreen.classList.add('hidden');
}

function showJudgeScreen() {
    mainMenu.classList.add('hidden');
    judgeScreen.classList.remove('hidden');
    playerScreen.classList.add('hidden');
    
    // הצג קלף ירוק חדש
    const greenCard = getRandomCard(greenCards);
    greenCardText.textContent = greenCard;
}

function showPlayerScreen() {
    mainMenu.classList.add('hidden');
    judgeScreen.classList.add('hidden');
    playerScreen.classList.remove('hidden');
    selectedCardContainer.classList.add('hidden');
    
    // בדוק אם יש לנו קלפים שמורים
    const savedCards = JSON.parse(localStorage.getItem('redCards'));
    
    if (savedCards && savedCards.length > 0 && selectedCard) {
        // החלף רק את הקלף שנבחר
        const index = currentRedCards.indexOf(selectedCard);
        if (index !== -1) {
            currentRedCards[index] = getRandomCard(redCards);
            renderRedCards();
        }
    } else {
        // קבל חמישה קלפים אדומים חדשים
        currentRedCards = getRandomCards(redCards, 5);
        renderRedCards();
    }
    
    // שמור את הקלפים הנוכחיים ב-localStorage
    localStorage.setItem('redCards', JSON.stringify(currentRedCards));
    
    // אפס את הקלף הנבחר
    selectedCard = null;
}

// פונקציית רינדור של הקלפים האדומים
function renderRedCards() {
    redCardsContainer.innerHTML = '';
    
    currentRedCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card', 'red-card');
        
        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        
        const cardText = document.createElement('p');
        cardText.textContent = card;
        
        cardContent.appendChild(cardText);
        cardElement.appendChild(cardContent);
        
        // הוסף אירוע לחיצה לקלף
        cardElement.addEventListener('click', () => {
            // הסר את הסימון מכל הקלפים
            const allCards = redCardsContainer.querySelectorAll('.card');
            allCards.forEach(c => c.classList.remove('selected'));
            
            // סמן את הקלף הנוכחי
            cardElement.classList.add('selected');
            
            // שמור את הקלף שנבחר
            selectedCard = card;
            
            // הצג את הקלף שנבחר
            selectedCardText.textContent = card;
            selectedCardContainer.classList.remove('hidden');
        });
        
        redCardsContainer.appendChild(cardElement);
    });
}

// אירועי לחיצה
judgeBtn.addEventListener('click', showJudgeScreen);
playerBtn.addEventListener('click', showPlayerScreen);
newGreenCardBtn.addEventListener('click', () => {
    const greenCard = getRandomCard(greenCards);
    greenCardText.textContent = greenCard;
});
newCardsBtn.addEventListener('click', () => {
    currentRedCards = getRandomCards(redCards, 5);
    renderRedCards();
    selectedCardContainer.classList.add('hidden');
    selectedCard = null;
    
    // שמור את הקלפים החדשים ב-localStorage
    localStorage.setItem('redCards', JSON.stringify(currentRedCards));
});
backToMenuBtn.addEventListener('click', showMainMenu);
backToMenuPlayerBtn.addEventListener('click', showMainMenu);

// בדוק אם קיימים קלפים שמורים בעת טעינת האתר
window.addEventListener('load', () => {
    const savedCards = JSON.parse(localStorage.getItem('redCards'));
    if (savedCards && savedCards.length > 0) {
        currentRedCards = savedCards;
    }
    
    // הצג את התפריט הראשי בטעינה
    showMainMenu();
}); 