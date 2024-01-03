import {clear} from './clear.js';

const menu = () => {
    clear();

    document.querySelector('.tab-header').textContent = "Menu";

    let tabContent = document.querySelector('.tab-main');

    let title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Our Menu";

    let menuContents = document.createElement('div');
    menuContents.classList.add('menu-content');
    menuContents.innerHTML = "Small Bytes<br>1 byte<br>1 kilobyte<br>1 megabyte<br><br>" + 
                            "Big Bytes<br>1 gigabyte<br>1 terabyte<br>1 petrabyte";

    tabContent.append(title, menuContents);
}

export {menu};