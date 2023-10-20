const displayThemeSpan = document.querySelector('#displayThemeSpan');
const body = document.querySelector('body');
const root = document.documentElement;

let isDarkmodeOn = false;

function toggleTheme() {
  toggleSpan(displayThemeSpan.textContent);
  root.className === 'lightTheme' ? root.className = 'darkTheme': root.className = 'lightTheme';
  isDarkmodeOn = !isDarkmodeOn;
}

function toggleSpan(theme) {
  isDarkmodeOn === false ? theme = 'Dark' : theme = 'Light';
  displayThemeSpan.textContent = theme;
}