import {clear} from './clear.js';

const contact = () => {
    clear();

    document.querySelector('.tab-header').textContent = "Contact Us";

    let tabContent = document.querySelector('.tab-main');

    let email = document.createElement('h1');
    email.classList.add('email');
    email.textContent = "Email";

    let actualEmail = document.createElement('div');
    actualEmail.classList.add('email-content');
    actualEmail.innerHTML = "yummybites@coolcoder.com";

    tabContent.append(email, actualEmail);
}

export {contact};