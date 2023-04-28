import './style.css';
import {home} from './home.js';

document.addEventListener('DOMContentLoaded', () => {

    let navbar = document.createElement('nav');
    let homeTab = document.createElement('div');
    homeTab.textContent = "Home";
    let menuTab = document.createElement('div');
    menuTab.textContent = "Menu";
    let contactTab = document.createElement('div');
    contactTab.textContent = "Contact";

    navbar.append(homeTab, menuTab, contactTab);

    let tabContent = document.createElement('div');
    tabContent.classList.add('tab-content');
    let tabHeading = document.createElement('div');
    tabHeading.classList.add('tab-header');
    tabHeading.textContent = "Dummy text";
    let tabMain = document.createElement('div');
    tabMain.classList.add('tab-main');
    tabContent.append(tabHeading, tabMain);

    homeTab.addEventListener('click', home);
    // menuTab.addEventListener('click', menu);
    // contact.addEventListener('click', contact);

    let footer = document.createElement('footer');
    footer.textContent = "Background image 'Bliss' from Windows";
    document.querySelector('#content').append(navbar, tabContent, footer);
    home();
})