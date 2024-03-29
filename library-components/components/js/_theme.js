const htmlEl = document.documentElement;

let light = {
    'color-primary': '#ff7167',
    'color-primary-hover': '#ED6A5E',
    'color-primary-active': '#de5246',
    'color-primary-opacity': 'rgba(255, 113, 103, 0.2)',
    'color-dominant': '#F8F8F8',
    'color-secondary': '#EFEFEF',
    'color-text': '#282828',
    'color-text-hover': '#424242',
    'color-subtext': '#6E6E6E',
    'color-border': '#E0E0E0',
    'color-success': 'rgba(36,253,161,0.2)',
    'color-success-txt': '#0a5033',
    'color-warning': 'rgba(255,174,0,0.2)',
    'color-warning-txt': '#b37e00',
    'color-danger': 'rgba(255,16,0,0.2)',
    'color-danger-txt': '#ad180a',
    'color-info': 'rgba(0,184,212,0.2)',
    'color-info-txt': '#007489',
};

let dark = {
    'color-primary': '#ff7167',
    'color-primary-hover': '#ED6A5E',
    'color-primary-active': '#de5246',
    'color-dominant': '#282828',
    'color-secondary': '#1E1E1E',
    'color-text': '#F8F8F8',
    'color-text-hover': '#e8e8e8',
    'color-subtext': '#d9d9d9',
    'color-border': '#505050',
    'color-success': 'rgba(36,253,161,0.2)',
    'color-success-txt': '#57ECAD',
    'color-warning': 'rgba(255,174,0,0.2)',
    'color-warning-txt': '#f6c246',
    'color-danger': 'rgba(255,16,0,0.2)',
    'color-danger-txt': '#ff5a4b',
    'color-info': 'rgba(0,184,212,0.2)',
    'color-info-txt': '#4ad1ec',
};

// une fois que la page est chargée
document.addEventListener('DOMContentLoaded', function () {

    const switchButton = document.getElementById('theme-button');

    function setTheme(theme) {
        if (theme === 'dark') {
            for (let [key, value] of Object.entries(dark)) {
                htmlEl.style.setProperty(`--${key}`, value);
            }
            switchButton.innerHTML = 'light mode';
        } else { // light theme
            for (let [key, value] of Object.entries(light)) {
                htmlEl.style.setProperty(`--${key}`, value);
            }
            switchButton.innerHTML = 'dark mode';
        }
    }

    function switchTheme() {
        let theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        setTheme(theme);
    }

// Set theme on page load
    let themeOnLoad = localStorage.getItem('theme');
    if (!themeOnLoad) {
        themeOnLoad = 'light'; // or 'dark' if you want dark mode to be default
        localStorage.setItem('theme', themeOnLoad);
    }
    setTheme(themeOnLoad);

    switchButton.addEventListener('click', switchTheme);
});