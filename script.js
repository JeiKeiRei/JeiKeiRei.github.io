document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.add('dark-mode');
});

document.getElementById('light-mode').addEventListener('click', function() {
    document.body.classList.remove('dark-mode');
});

document.getElementById('start').addEventListener('click', function() {
    document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
