/* ---------------- TYPEWRITER TEXTS ---------------- */

const pageTexts = {
    "index.html": [
        "Aurenix Lab – Intelligenz trifft Innovation.",
        "Moderne und stabile Entwicklung für FiveM.",
        "Effiziente Lösungen. Klarer Code. Saubere Systeme."
    ],
    "shop.html": [
        "Kaufe Ressourcen direkt im Shop.",
        "Sichere Auslieferung über Tebex.",
        "Sofort einsatzbereit."
    ],
    "products.html": [
        "Moderne FiveM Scripts.",
        "Entwickelt für ESX & QBCore.",
        "Stabil. Modern. Durchdacht."
    ],
    "docs.html": [
        "Alle Installationen sauber erklärt.",
        "Klare Strukturen. Verständliche Anleitungen.",
        "Dokumentation von Aurenix Lab."
    ],
    "updates.html": [
        "Neuste Änderungen.",
        "Transparenter Entwicklungsprozess.",
        "Alle Updates an einem Ort."
    ],
    "contact.html": [
        "Support per Discord.",
        "Schnelle Antworten.",
        "Wir helfen dir weiter."
    ]
};


/* ---------------- START TYPEWRITER ---------------- */

document.addEventListener("DOMContentLoaded", () => {
    const file = window.location.pathname.split("/").pop() || "index.html";
    const textList = pageTexts[file] || ["Aurenix Lab"];

    const tw = document.getElementById("typewriter");
    let i = 0, j = 0, del = false;

    function typeLoop() {
        const txt = textList[i];

        if (!del) {
            tw.textContent = txt.substring(0, j++);
            if (j > txt.length) {
                del = true;
                return setTimeout(typeLoop, 1200);
            }
        } else {
            tw.textContent = txt.substring(0, j--);
            if (j < 0) {
                del = false;
                i = (i + 1) % textList.length;
            }
        }
        setTimeout(typeLoop, del ? 40 : 60);
    }

    typeLoop();
});


/* ---------------- THEME SWITCHER ---------------- */

document.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.className = "theme-" + savedTheme;
    }

    document.getElementById("darkBtn").onclick = () => {
        document.body.className = "theme-dark";
        localStorage.setItem("theme", "dark");
    };

    document.getElementById("lightBtn").onclick = () => {
        document.body.className = "theme-light";
        localStorage.setItem("theme", "light");
    };
});
