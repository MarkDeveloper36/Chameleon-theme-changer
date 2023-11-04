const displayThemeSpan = document.querySelector('#displayThemeSpan');
const body = document.querySelector('body');
const root = document.documentElement;

const SVGsun = document.querySelector('#SVG-Sun');
const SVGmoon = document.querySelector('#SVG-Moon');
const SVGstar = document.querySelector('#SVG-Star');

const sunParent = document.querySelector('#sunParent');
const sunChildren = Array.from(sunParent.children);

let isDarkmodeOn = false;

function toggleTheme() {
  toggleSpan(displayThemeSpan.textContent);
  root.className === 'lightTheme' ? root.className = 'darkTheme': root.className = 'lightTheme';
  isDarkmodeOn === false ? giveSunDarkTheme() : giveSunLightTheme();
  isDarkmodeOn === false ? giveMoonDarkTheme() : giveMoonLightTheme();
  isDarkmodeOn = !isDarkmodeOn;
}

function toggleSpan(theme) {
  isDarkmodeOn === false ? theme = 'Dark' : theme = 'Light';
  displayThemeSpan.textContent = theme;
}

function giveMoonDarkTheme() {
  SVGmoon.classList.remove('moonLight');
  SVGmoon.classList.add('moonDark');
  SVGstar.classList.remove('moonLight');
  SVGstar.classList.add('moonDark');
}

function giveMoonLightTheme() {
  SVGmoon.classList.remove('moonDark');
  SVGmoon.classList.add('moonLight');
  SVGstar.classList.remove('moonDark');
  SVGstar.classList.add('moonLight');
}

function giveSunDarkTheme() {
  sunChildren.forEach((child) => {
    child.classList.remove('sunLight');
    child.classList.add('sunDark');
  });
}

function giveSunLightTheme() {
  sunChildren.forEach((child) => {
    child.classList.remove('sunDark');
    child.classList.add('sunLight');
  });
}