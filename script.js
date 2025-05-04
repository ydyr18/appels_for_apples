// אלמנטים מה-DOM
const mainMenu = document.getElementById('main-menu');
const judgeScreen = document.getElementById('judge-screen');
const playerScreen = document.getElementById('player-screen');
const judgeBtn = document.getElementById('judge-btn');
const playerBtn = document.getElementById('player-btn');
const greenCardText = document.getElementById('green-card-text');
const redCardsContainer = document.getElementById('red-cards-container');
const newGreenCardBtn = document.getElementById('new-green-card');
const backToMenuBtn = document.getElementById('back-to-menu');
const backToMenuPlayerBtn = document.getElementById('back-to-menu-player');
const selectedCardView = document.getElementById('selected-card-view');
const cardsSelectionView = document.getElementById('cards-selection-view');
const selectedCardText = document.getElementById('selected-card-text');
const returnToCardsBtn = document.getElementById('return-to-cards');
const newCardBtn = document.getElementById('new-card');

// משתנים גלובליים
let currentRedCards = [];
let selectedCard = null;
let selectedCardIndex = -1;

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
    
    // בתחילה מראים את מסך בחירת הקלפים
    showCardsSelectionView();
    
    // בדוק אם יש לנו קלפים שמורים
    const savedCards = JSON.parse(localStorage.getItem('redCards'));
    
    if (savedCards && savedCards.length === 5) {
        // השתמש בקלפים השמורים
        currentRedCards = savedCards;
    } else {
        // קבל חמישה קלפים אדומים חדשים
        currentRedCards = getRandomCards(redCards, 5);
    }
    
    // רנדר את הקלפים
    renderRedCards();
    
    // שמור את הקלפים הנוכחיים ב-localStorage
    localStorage.setItem('redCards', JSON.stringify(currentRedCards));
    
    // אפס את הקלף הנבחר
    selectedCard = null;
    selectedCardIndex = -1;
}

function showCardsSelectionView() {
    cardsSelectionView.classList.remove('hidden');
    selectedCardView.classList.add('hidden');
}

function showSelectedCardView() {
    cardsSelectionView.classList.add('hidden');
    selectedCardView.classList.remove('hidden');
}

// פונקציית רינדור של הקלפים האדומים
function renderRedCards() {
    redCardsContainer.innerHTML = '';
    
    currentRedCards.forEach((card, index) => {
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
            // שמור את הקלף שנבחר
            selectedCard = card;
            selectedCardIndex = index;
            
            // הצג את הקלף שנבחר
            selectedCardText.textContent = card;
            showSelectedCardView();
        });
        
        redCardsContainer.appendChild(cardElement);
    });
}

// החלף קלף נבחר בחדש
function replaceSelectedCard() {
    if (selectedCardIndex >= 0 && selectedCardIndex < currentRedCards.length) {
        // קבל קלף חדש במקום הקלף שנבחר
        currentRedCards[selectedCardIndex] = getRandomCard(redCards);
        
        // שמור את הקלפים המעודכנים
        localStorage.setItem('redCards', JSON.stringify(currentRedCards));
        
        // הצג את הקלף החדש
        showCardsSelectionView();
        renderRedCards();
        
        // אפס את הקלף הנבחר
        selectedCard = null;
        selectedCardIndex = -1;
    }
}

// אירועי לחיצה
judgeBtn.addEventListener('click', showJudgeScreen);
playerBtn.addEventListener('click', showPlayerScreen);
newGreenCardBtn.addEventListener('click', () => {
    const greenCard = getRandomCard(greenCards);
    greenCardText.textContent = greenCard;
});
returnToCardsBtn.addEventListener('click', showCardsSelectionView);
newCardBtn.addEventListener('click', replaceSelectedCard);
backToMenuBtn.addEventListener('click', showMainMenu);
backToMenuPlayerBtn.addEventListener('click', showMainMenu);

// בדוק אם קיימים קלפים שמורים בעת טעינת האתר
window.addEventListener('load', () => {
    // הצג את התפריט הראשי בטעינה
    showMainMenu();
}); 