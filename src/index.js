import menuCollections from './JSON/menu.json';
import menuTemplate from './templates/generate-menu.hbs';

import './styles.css';

/*templates*/
const refs ={
  menuTemplate: document.querySelector('.menu')
};

buildMenu(menuCollections);

function buildMenu(menuCollections) {
  const markup = menuCollections.map(menuCollection => menuTemplate(menuCollection)).join('');

  refs.menuTemplate.insertAdjacentHTML('beforeend', markup);
}


/* theme button*/
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// const switchButton = document.getElementById("theme-switch-control");
// console.log(switchButton);
// switchButton.addEventListener('click', event => {
//   console.log(event);
// });



const input = document.getElementById('theme-switch-control');
const body = document.querySelector('body');

const userPick= localStorage.getItem('theme');
if(userPick !== null) {
    document.body.classList.add(userPick);
    if(userPick === Theme.DARK){
      input.checked = true;
    }
}


input.addEventListener('change', e => {
    if(e.target === input && input.checked === true){
      document.body.classList.toggle(Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);
    } else{
      document.body.classList.remove(Theme.DARK);
      localStorage.setItem('theme', Theme.LIGHT);
    }
  });

