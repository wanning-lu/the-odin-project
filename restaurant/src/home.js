
const home = () => {
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

    tabContent.append(hook, desc);
}

export {home};