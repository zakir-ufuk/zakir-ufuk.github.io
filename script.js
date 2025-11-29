const translations = {
    en: {
        title: "Zakir Ufuk Sahiner",
        tagline: "Developer & M.Sc Business Informatics Student",
        bio: "Hello! I'm Ufuk. I work on technology, software, and digitalisation projects. To learn more about me and my work, please use the links below or contact me.",
        btn_github: "GitHub",
        btn_linkedin: "LinkedIn",
        btn_email: "Contact Me"
    },
    tr: {
        title: "Zakir Ufuk Şahiner",
        tagline: "Geliştirici & M.Scİşletmenin Bilgisayar Mühendisliği Öğrencisi",
        bio: "Merhaba! Ben Ufuk. Teknoloji, yazılım ve dijitalleşme projeleri üzerine çalışıyorum. Benimle ilgili daha fazla bilgi almak için lütfen aşağıdaki bağlantıları kullanın veya benimle iletişime geçin .",
        btn_github: "GitHub",
        btn_linkedin: "LinkedIn",
        btn_email: "Bana Ulaş"
    },
    de: {
        title: "Zakir Ufuk Sahiner",
        tagline: "Entwickler & M.Sc Wirtschaftsinformatik Student",
        bio: "Hallo! Ich bin Ufuk. Ich arbeite an Technologie, Software und digitalisierung Projekten der nächsten Generation. Um mehr über mich und meinen Projekten zu erfahren, nutzen Sie bitte die Links unten oder kontaktieren Sie mich .",
        btn_github: "GitHub",
        btn_linkedin: "LinkedIn",
        btn_email: "Kontaktieren Sie mich"
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if the element has child nodes (like SVG icons in buttons)
            // If it does, we want to replace only the text node, not the icon
            if (element.children.length > 0) {
                // Find the text node and update it
                for (let i = 0; i < element.childNodes.length; i++) {
                    if (element.childNodes[i].nodeType === Node.TEXT_NODE && element.childNodes[i].textContent.trim() !== '') {
                        element.childNodes[i].textContent = " " + translations[lang][key];
                        break;
                    }
                }
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update active state in selector (if using buttons)
    // document.querySelectorAll('.lang-btn').forEach(btn => {
    //     btn.classList.remove('active');
    //     if (btn.getAttribute('onclick').includes(lang)) {
    //         btn.classList.add('active');
    //     }
    // });

    // Update dropdown button text
    const langBtn = document.getElementById('current-lang-btn');
    if (langBtn) {
        const flags = {
            'en': '🇬🇧',
            'tr': '🇹🇷',
            'de': '🇩🇪'
        };
        langBtn.textContent = flags[lang];
    }
}

// Set default language to English
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
});
