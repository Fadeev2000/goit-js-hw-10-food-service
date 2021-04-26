import menu from './menu.json';
import itemsTemplate from './menu-items.hbs';


//import './sass/main.scss';
console.log(itemsTemplate);

const menuRef = document.querySelector('.js-menu');
const markup = itemsTemplate(menu);

console.log(markup);

menuRef.insertAdjacentHTML('beforeend', markup);
