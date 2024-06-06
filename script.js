document.getElementById('dark-mode').addEventListener('click', function() {
    setDarkMode();
});

document.getElementById('light-mode').addEventListener('click', function() {
    setLightMode();
});

document.getElementById('start').addEventListener('click', function() {
    scrollToSection('section1');
});

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    var sectionPosition = section.getBoundingClientRect().top + window.scrollY;
    var middlePosition = sectionPosition + (section.offsetHeight / 2) - (window.innerHeight / 2);
    window.scrollTo({
        top: middlePosition,
        behavior: 'smooth'
    });
}

function toggleMenu() {
        var sidePanel = document.getElementById('sidePanel');
        sidePanel.classList.toggle('open');
        if (sidePanel.classList.contains('open')){
            document.getElementById('menu-icon').src = 'x-ikona.png';
        } else document.getElementById('menu-icon').src = 'hamburger-ikona.png';
}

document.addEventListener('click', function(event) {
    var sidePanel = document.getElementById('sidePanel');
    var menuIcon = document.getElementById('menu-icon');

    if (!sidePanel.contains(event.target) && !menuIcon.contains(event.target)) {
        if (sidePanel.classList.contains('open')) {
            sidePanel.classList.remove('open');
            menuIcon.src = 'hamburger-ikona.png';
        }
    }
});

function setDarkMode() {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode').disabled = true;
    document.getElementById('light-mode').disabled = false;
    document.getElementById('dark-mode-side').disabled = true;
    document.getElementById('light-mode-side').disabled = false;
    document.getElementById('logo').src = 'aa_logo_tr_2_white.png';
}

function setLightMode() {
    document.body.classList.remove('dark-mode');
    document.getElementById('dark-mode').disabled = false;
    document.getElementById('light-mode').disabled = true;
    document.getElementById('dark-mode-side').disabled = false;
    document.getElementById('light-mode-side').disabled = true;
    document.getElementById('logo').src = 'aa_logo_tr_2.png';
}


