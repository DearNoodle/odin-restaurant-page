import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';
import "./style.css";

const motherTag = document.querySelector('#content');

const pageSelectBar = document.createElement('div');
pageSelectBar.className = 'page-select';
motherTag.appendChild(pageSelectBar);

const btnHome = document.createElement('button');
btnHome.className = 'home';
btnHome.textContent = 'Home';
pageSelectBar.appendChild(btnHome);

const btnMenu = document.createElement('button');
btnMenu.className = 'menu';
btnMenu.textContent = 'Menu';
pageSelectBar.appendChild(btnMenu);

const btnContact = document.createElement('button');
btnContact.className = 'contact';
btnContact.textContent = 'Contact';
pageSelectBar.appendChild(btnContact);

const mainTag = document.createElement('div');
mainTag.className = 'main';
motherTag.appendChild(mainTag);

let page = 'home';
loadHome();

btnHome.addEventListener('click', () => {
    if (page != 'home') {
        while (mainTag.firstChild) {
            mainTag.removeChild(mainTag.firstChild);
        }
        loadHome();
        page = 'home';
    }
});


btnMenu.addEventListener('click', () => {
    if (page != 'menu') {
        while (mainTag.firstChild) {
            mainTag.removeChild(mainTag.firstChild);
        }
        loadMenu();
        page = 'menu';
    }
});

btnContact.addEventListener('click', () => {
    if (page != 'contact') {
        while (mainTag.firstChild) {
            mainTag.removeChild(mainTag.firstChild);
        }
        loadContact();
        page = 'contact';
    }
});
