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
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    var sidePanel = document.getElementById('sidePanel');
    if (sidePanel.style.display === 'block') {
        sidePanel.style.display = 'none';
    } else {
        sidePanel.style.display = 'block';
    }
}

function setDarkMode() {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode').disabled = true;
    document.getElementById('light-mode').disabled = false;
    document.getElementById('dark-mode-side').disabled = true;
    document.getElementById('light-mode-side').disabled = false;
}

function setLightMode() {
    document.body.classList.remove('dark-mode');
    document.getElementById('dark-mode').disabled = false;
    document.getElementById('light-mode').disabled = true;
    document.getElementById('dark-mode-side').disabled = false;
    document.getElementById('light-mode-side').disabled = true;
}
