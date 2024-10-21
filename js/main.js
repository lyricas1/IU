function setRtl() {
    // Bestimme die Browsersprache
    var userLang = navigator.language || navigator.userLanguage;
    //  var userLang = 'ar-SA'; //Test

    // Liste der Sprachen, die RTL verwenden
    var rtlLangs = ['ar', 'he', 'fa', 'ur'];

    // Extrahiere den Sprachcode (z.B. 'ar' aus 'ar-SA')
    var langCode = userLang.split('-')[0];


    if (rtlLangs.includes(langCode)) {
        // Füge die Klasse 'rtl' zum Body hinzu, wenn eine RTL-Sprache erkannt wird
        document.body.classList.add('rtl');
    }
}

function setNavListener() {
    // Setze ein Event Listener auf alle Scroll Events im Browser
    document.addEventListener('scroll', function () {

        const header = document.getElementById('header');
        const nav = document.getElementById('navswitch');

        // prüfe ob die aktuelle Scroll Position größer ist als die Höhe vom Header Element
        if (window.scrollY > header.offsetHeight) {
            nav && nav.classList.add("offset");
        } else {
            nav && nav.classList.remove("offset");
        }

    });
}

function loadHtml() {
    $('#header').load('header.html');
    $('#footer').load('footer.html');
}

setRtl();
setNavListener();
loadHtml();
