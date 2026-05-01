const translations = {
    en: {
        download: "Free download",
        requirements: "for Android (14+)",
        aboutTitle: "About this app",
        shortDesc: "Get your daily dose of inspiration and confidence with WestQuotes. Access iconic quotes from Kanye West directly on your device, whenever you need them.",
        fullDesc: "Whether you need motivation, a fresh perspective, or just a glimpse into the mind of a visionary, WestQuotes has you covered. Save your favorite quotes, customize the app's theme to match your style, and set up home screen widgets so you never miss a word of genius. Built exclusively for Android, designed for Kanye West's fans.",
        readMore: "Read more",
        showLess: "Show less",
        installTitle: "How to install",
        step1: "Download the APK file using the 'Free download' button above.",
        step2: "Open your device's <b>Settings</b> and navigate to <b>Security</b> or <b>Privacy</b>.",
        step3: "Enable the option to <b>Install from Unknown Sources</b> (or allow your browser to install apps).",
        step4: "Locate the downloaded file in your <b>Downloads</b> folder and tap it to install.",
        contactTitle: "Developer Contact",
        aka: "also known as",
        dateLabel: "Website Established",
        supportNote: "If you'd like to support my work, feel free to reach out via email!",
        disclaimer: "WestQuotes is an unofficial, fan-made project. This application and its developer are not affiliated with, associated with, authorized, endorsed by, or in any way officially connected to Kanye West, his management, or any of his associated record labels. All quotes, lyrics, and related intellectual property remain the sole property of their respective copyright holders. Short excerpts are used herein under the principles of Fair Use for entertainment and informational purposes only. Optional donations go solely toward supporting the independent developer's time and infrastructure costs, not toward the sale of copyrighted material."
    },
    pl: {
        download: "Pobierz za darmo",
        requirements: "na Androida (14+)",
        aboutTitle: "O aplikacji",
        shortDesc: "Otrzymuj codzienną dawkę inspiracji i pewności siebie dzięki WestQuotes. Miej dostęp do ikonicznych cytatów Kanye Westa bezpośrednio na swoim urządzeniu, kiedykolwiek ich potrzebujesz.",
        fullDesc: "Niezależnie od tego, czy potrzebujesz motywacji, świeżego spojrzenia, czy po prostu wglądu w umysł wizjonera, WestQuotes jest dla Ciebie. Zapisuj ulubione cytaty, personalizuj motyw aplikacji i ustawiaj widżety na ekranie głównym, aby nie umknęła Ci żadna genialna myśl. Stworzona wyłącznie na Androida, z myślą o fanach Kanye Westa.",
        readMore: "Czytaj więcej",
        showLess: "Pokaż mniej",
        installTitle: "Jak zainstalować",
        step1: "Pobierz plik APK za pomocą przycisku 'Pobierz za darmo' powyżej.",
        step2: "Otwórz <b>Ustawienia</b> swojego urządzenia i przejdź do sekcji <b>Bezpieczeństwo</b> lub <b>Prywatność</b>.",
        step3: "Włącz opcję <b>Instalacja z nieznanych źródeł</b> (lub zezwól przeglądarce na instalację aplikacji).",
        step4: "Znajdź pobrany plik w folderze <b>Downloads</b> i dotknij go, aby zainstalować.",
        contactTitle: "Kontakt z deweloperem",
        aka: "znany również jako",
        dateLabel: "Strona powstała",
        supportNote: "Jeśli chciałbyś wesprzeć moją pracę, skontaktuj się ze mną przez e-mail!",
        disclaimer: "WestQuotes to nieoficjalny, fanowski projekt. Ta aplikacja i jej twórca nie są powiązani, autoryzowani, popierani ani w żaden sposób oficjalnie związani z Kanye Westem, jego zarządem ani żadnymi powiązanymi z nim wytwórniami płytowymi. Wszystkie cytaty, teksty piosenek i powiązana własność intelektualna pozostają wyłączną własnością ich odpowiednich właścicieli praw autorskich. Krótkie fragmenty są używane tutaj na zasadach dozwolonego użytku (Fair Use) wyłącznie w celach rozrywkowych i informacyjnych. Opcjonalne darowizny przeznaczane są wyłącznie na wsparcie czasu niezależnego twórcy i kosztów infrastruktury, a nie na sprzedaż materiałów chronionych prawem autorskim."
    }
};

let currentLang = 'en';

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const langToggle = document.getElementById("lang-toggle");
    const readMoreBtn = document.getElementById("read-more-btn");
    const fullDesc = document.getElementById("full-desc");
    const body = document.body;

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-theme");
    });

    langToggle.addEventListener("click", () => {
        currentLang = currentLang === 'en' ? 'pl' : 'en';
        updateLanguage();
    });

    function updateLanguage() {
        document.querySelectorAll("[data-key]").forEach(elem => {
            const key = elem.getAttribute("data-key");
            if (translations[currentLang][key]) {
                elem.innerHTML = translations[currentLang][key];
            }
        });
        if (!fullDesc.classList.contains("hidden")) {
            readMoreBtn.textContent = translations[currentLang].showLess;
        } else {
            readMoreBtn.textContent = translations[currentLang].readMore;
        }
    }

    readMoreBtn.addEventListener("click", () => {
        const isHidden = fullDesc.classList.toggle("hidden");
        readMoreBtn.textContent = isHidden ? translations[currentLang].readMore : translations[currentLang].showLess;
    });

    const modal = document.getElementById("image-modal");
    const enlargedImg = document.getElementById("enlarged-img");
    const galleryContainer = document.querySelector(".gallery-container");

    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "flex";
            enlargedImg.src = this.src;
        });
    });

    modal.addEventListener("click", () => modal.style.display = "none");

    galleryContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        galleryContainer.scrollLeft += evt.deltaY;
    });
});