// Tilni o'zgartirish funksiyasi
let currentLang = 'uzb'; // Dastlabki til uzb

function changeLanguage() {
    const language = document.getElementById("languageSwitcher").value;
    currentLang = language;

    // Tilga mos matnlarni o'zgartirish
    if (currentLang === 'uzb') {
        document.getElementById('headerTitle').textContent = 'Englash 7';
        document.getElementById('loginTitle').textContent = 'Kirish';
        document.getElementById('submitBtn').textContent = 'Yuborish';
        // Qo'shimcha elementlar bo'lsa, ularni ham o'zgartirish mumkin
    } else if (currentLang === 'rus') {
        document.getElementById('headerTitle').textContent = 'English 7';
        document.getElementById('loginTitle').textContent = 'Вход';
        document.getElementById('submitBtn').textContent = 'Отправить';
        // Qo'shimcha elementlar bo'lsa, ularni ham o'zgartirish mumkin
    }
}

// Parolni ko'rsatish va yashirish funksiyasi
function togglePassword() {
    const passwordInput = document.getElementById('passwordInput');
    const toggleButton = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = currentLang === 'uzb' ? 'Yashirish' : 'Скрыть';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = currentLang === 'uzb' ? 'Ko\'rsatish' : 'Показать';
    }
}

// Parolni tekshirish funksiyasi
function validatePassword() {
    const input = document.getElementById('passwordInput').value;

    const validPassword = "458639"; // Yangi faqat 458639 parol

    let redirectTo = "";

    // Parolni tekshirish
    if (input === validPassword) {
        redirectTo = "../home.html"; // Tanlangan sahifaga yo'naltirish
    } else {
        alert(currentLang === 'uzb' ? "Noto'g'ri parol!" : "Неверный пароль!");
        return;
    }

    // Tilga qarab yo'naltirish
    window.location.href = redirectTo;
}
