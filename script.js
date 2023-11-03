const displayThemeSpan = document.querySelector('#displayThemeSpan');
const body = document.querySelector('body');
const root = document.documentElement;

const SVGsun = document.querySelector('#SVG-Sun');
const SVGmoon = document.querySelector('#SVG-Moon');

let isDarkmodeOn = false;

function toggleTheme() {
  toggleSpan(displayThemeSpan.textContent);
  root.className === 'lightTheme' ? root.className = 'darkTheme': root.className = 'lightTheme';
  isDarkmodeOn === false ? SVGsun.classList.add('SVG-Sun-ThemeDark') : SVGsun.classList.remove('SVG-Sun-ThemeDark');
  isDarkmodeOn === false ? SVGmoon.classList.add('SVG-Moon-ThemeDark') : SVGmoon.classList.remove('SVG-Moon-ThemeDark');
  isDarkmodeOn = !isDarkmodeOn;
}

function toggleSpan(theme) {
  isDarkmodeOn === false ? theme = 'Dark' : theme = 'Light';
  displayThemeSpan.textContent = theme;
}