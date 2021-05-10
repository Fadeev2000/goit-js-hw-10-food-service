import menu from './menu.json';
import itemsTemplate from './templates/menu-items.hbs';


//import './sass/main.scss';
//console.log(itemsTemplate);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const LOCALSTORAGE_KYE = 'theme';

const menuRef = document.querySelector('.js-menu');
const markup = itemsTemplate(menu);

//console.log(markup);

menuRef.insertAdjacentHTML('beforeend', markup);

const bodyEl = document.querySelector('body');
const switchEl = document.querySelector('.theme-switch__toggle');
switchEl.addEventListener('change', onChange);


if (localStorage.getItem('theme') !== null) {
    const selectedTheme = localStorage.getItem(LOCALSTORAGE_KYE);
    //console.log('selectedTheme->' + selectedTheme);
    //console.log(Theme.LIGHT);
    if (selectedTheme === Theme.LIGHT) {
        //console.log('Light-> ' + localStorage.getItem('theme'));
        bodyEl.classList.add(Theme.LIGHT);
        switchEl.checked = false;
    } else {
        //console.log('dark-> ' + localStorage.getItem('theme'));
        bodyEl.classList.add(Theme.DARK);
        switchEl.checked = true;
    }
}
     


function onChange() {
    //console.log(switchEl.checked);
    //console.log(localStorage.getItem('theme'));

    switch (localStorage.getItem(LOCALSTORAGE_KYE)) {
        case Theme.LIGHT:
            localStorage.setItem(LOCALSTORAGE_KYE, Theme.DARK);
            bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
            switchEl.checked = true;
            break;
        case Theme.DARK:
            localStorage.setItem(LOCALSTORAGE_KYE, Theme.LIGHT);
            bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
            switchEl.checked = false;
            break;
        default: //=== null
            localStorage.setItem(LOCALSTORAGE_KYE, Theme.DARK);
            bodyEl.classList.add(Theme.DARK);
            switchEl.checked = true;
    }

    
    //localStorage.setItem('theme', Theme.DARK)



    //bodyEl.classList.add('.light-theme');
    //bodyEl.classList.add('.dark-theme');
}
