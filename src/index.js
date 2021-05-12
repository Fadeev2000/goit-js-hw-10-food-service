import menu from './menu.json';
import itemsTemplate from './templates/menu-items.hbs';
//import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const LOCALSTORAGE_KYE = 'theme';

const menuRef = document.querySelector('.js-menu');
const markup = itemsTemplate(menu);

menuRef.insertAdjacentHTML('beforeend', markup);

const refs = {
    bodyEl: document.querySelector('body'),
    switchEl: document.querySelector('.theme-switch__toggle')
};

class Switch {
    constructor(refs) {
        this.bodyEl = refs.bodyEl;
        this.switchEl = refs.switchEl;
    }


    switch() {
        if (localStorage.getItem(LOCALSTORAGE_KYE) !== null) {
            const selectedTheme = localStorage.getItem(LOCALSTORAGE_KYE);
    
            if (selectedTheme === Theme.LIGHT) {
                this.bodyEl.classList.add(Theme.LIGHT);
                this.switchEl.checked = false;
            } else {
                this.bodyEl.classList.add(Theme.DARK);
                this.switchEl.checked = true;
            }
        }
    }

}

const switcherTheme = new Switch(refs);
switcherTheme.switch();
     
function onChange() {
    switch (localStorage.getItem(LOCALSTORAGE_KYE)) {
        case Theme.LIGHT:
            localStorage.setItem(LOCALSTORAGE_KYE, Theme.DARK);
            refs.bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
            refs.switchEl.checked = true;
            break;
        case Theme.DARK:
            localStorage.setItem(LOCALSTORAGE_KYE, Theme.LIGHT);
            refs.bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
            refs.switchEl.checked = false;
            break;
        default: //=== null
            localStorage.setItem(LOCALSTORAGE_KYE, Theme.DARK);
            refs.bodyEl.classList.add(Theme.DARK);
            refs.switchEl.checked = true;
    }
}

refs.switchEl.addEventListener('change', onChange);