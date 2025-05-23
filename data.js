// קלפים ירוקים (קלפים לשופטים)
const greenCards = [
    "מצחיק",
    "מרגש",
    "מגעיל",
    "מפחיד",
    "משעמם",
    "מבולגן",
    "יפה",
    "מעצבן",
    "קשה",
    "מגניב",
    "מוזר",
    "לא הגיוני",
    "יקר",
    "זול",
    "מיותר",
    "חכם",
    "טיפשי",
    "מרתק",
    "מעייף",
    "קטן",
    "גדול",
    "מושלם",
    "מסוכן",
    "בטוח",
    "מסתורי",
    "מיוחד",
    "רטוב",
    "יבש",
    "חם",
    "קר",
    "טעים",
    "לא טעים",
    "מרגיז",
    "מדהים",
    "ישן",
    "חדש",
    "רך",
    "קשיח",
    "שקט",
    "רועש",
    "פשוט",
    "מורכב",
    "שמח",
    "עצוב",
    "עדין",
    "גס",
    "מהיר",
    "איטי",
    "חזק",
    "חלש"
];

// קלפים אדומים (קלפים למשתתפים)
const redCards = [
    "פיצה",
    "ים",
    "דיסני",
    "נינג'ה",
    "רופא",
    "מורה",
    "תינוק",
    "כלב",
    "חתול",
    "פיל",
    "מחשב",
    "טלפון",
    "מכונית",
    "אופניים",
    "תפוח",
    "בננה",
    "כדורגל",
    "כדורסל",
    "טלוויזיה",
    "מיטה",
    "שולחן",
    "כיסא",
    "מקרר",
    "תנור",
    "מיקרוגל",
    "מכנסיים",
    "חולצה",
    "נעליים",
    "כובע",
    "משקפיים",
    "שעון",
    "שמש",
    "ירח",
    "כוכבים",
    "גשם",
    "שלג",
    "חורף",
    "קיץ",
    "אביב",
    "סתיו",
    "יום הולדת",
    "חג",
    "חופשה",
    "בית ספר",
    "אוניברסיטה",
    "עבודה",
    "משפחה",
    "חברים",
    "אהבה",
    "צחוק",
    "דמעות",
    "מוזיקה",
    "סרט",
    "ספר",
    "תיאטרון",
    "קרקס",
    "גן חיות",
    "פארק",
    "מסעדה",
    "חנות",
    "כסף",
    "זהב",
    "יהלום",
    "שוקולד",
    "גלידה",
    "עוגה",
    "לחם",
    "חלב",
    "מים",
    "יין",
    "בירה",
    "קפה",
    "תה",
    "מלח",
    "סוכר",
    "פלפל",
    "שום",
    "בצל",
    "עגבנייה",
    "מלפפון",
    "גזר",
    "תפוח אדמה",
    "אורז",
    "פסטה",
    "בשר",
    "דג",
    "עוף",
    "ביצה",
    "גבינה",
    "בוקר",
    "צהריים",
    "ערב",
    "לילה",
    "שינה",
    "חלום",
    "מציאות",
    "דמיון",
    "זיכרון",
    "מחשבה",
    "רגש",
    "שמחה",
    "עצב",
    "כעס",
    "פחד",
    "אומץ",
    "תקווה",
    "אמונה",
    "חכמה",
    "ידע",
    "אמת",
    "שקר",
    "צדק",
    "חוק",
    "חופש",
    "שלום",
    "מלחמה",
    "ניצחון",
    "הפסד",
    "התחלה",
    "סוף",
    "דרך",
    "מסע",
    "הרפתקה",
    "סכנה",
    "הצלחה",
    "כישלון",
    "נס",
    "קסם",
    "מסתורין",
    "סוד",
    "הפתעה",
    "מתנה",
    "חגיגה",
    "מסיבה",
    "ריקוד",
    "שירה",
    "אמנות",
    "ציור",
    "פיסול",
    "צילום",
    "תכנות",
    "מדע",
    "מתמטיקה",
    "היסטוריה",
    "גיאוגרפיה",
    "טבע",
    "חלל",
    "כדור הארץ",
    "אוקיינוס",
    "הר",
    "נהר",
    "מדבר",
    "יער",
    "ג'ונגל",
    "גן",
    "פרח",
    "עץ",
    "דשא",
    "אדם",
    "ילד",
    "מבוגר",
    "זקן",
    "גיבור",
    "נבל",
    "מלך",
    "מלכה",
    "נסיך",
    "נסיכה",
    "חייל",
    "טייס",
    "צוללן",
    "אסטרונאוט",
    "ספורטאי",
    "מוזיקאי",
    "שחקן",
    "במאי",
    "סופר",
    "משורר",
    "מהנדס",
    "מדען",
    "פילוסוף",
    "פוליטיקאי",
    "משפטן",
    "שופט",
    "רב",
    "כומר",
    "אימאם",
    "נזיר",
    "רפורמה",
    "מהפכה",
    "התקדמות",
    "נסיגה",
    "שינוי",
    "יציבות",
    "זמן",
    "מרחב",
    "אינסוף",
    "נצח",
    "רגע",
    "שנייה",
    "דקה",
    "שעה",
    "יום",
    "שבוע",
    "חודש",
    "שנה",
    "עשור",
    "מאה",
    "אלף",
    "מיליון",
    "מיליארד",
    "טריליון"
]; 