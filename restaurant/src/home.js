import {clear} from './clear.js';

const home = () => {
    clear();

    document.querySelector('.tab-header').textContent = "Home";

    let tabContent = document.querySelector('.tab-main');

    let hook = document.createElement('h1');
    hook.classList.add('hook');
    hook.textContent = "Welcome to Big Bytes, where you'll fill your storage up!";

    let desc = document.createElement('div');
    desc.classList.add('desc');
    desc.textContent = "Megabytes, gigabytes, terabytes, even petrabytes, we've" +
            " got it all! Been craving to fill up your empty, empty storage? Don't" +
            " worry, we have you!";

    let hoursHeader = document.createElement('h2');
    hoursHeader.classList.add('hours-header');
    hoursHeader.textContent = "Hours";
    hoursHeader.style.textAlign = 'center';
    hoursHeader.style.fontWeight = 'bold';
    hoursHeader.style.fontSize = '1.2em';

    let hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = "Saturday-Sunday: Closed<br>Monday-Thursday: 11pm - 5am<br>Friday: 12am - 8am";
    hours.style.textAlign = 'center';

    let locationHeader = document.createElement('h2');
    locationHeader.classList.add('location-header');
    locationHeader.innerHTML = "Location";
    locationHeader.style.textAlign = 'center';
    locationHeader.style.fontWeight = 'bold';
    locationHeader.style.fontSize = '1.2em';

    let location = document.createElement('div');
    location.classList.add('location');
    location.innerHTML = "wanning-lu.github.io/the-odin-project/restaurant";
    location.style.textAlign = 'center';

    tabContent.append(hook, desc, hoursHeader, hours, locationHeader, location);
}

export {home};