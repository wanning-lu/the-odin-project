const clear = () => {
    document.querySelector('.tab-content').textContent = '';

    let tabHeading = document.createElement('div');
    tabHeading.classList.add('tab-header');
    tabHeading.textContent = "Dummy text";
    let tabMain = document.createElement('div');
    tabMain.classList.add('tab-main');
    document.querySelector('.tab-content').append(tabHeading, tabMain);
}

export {clear};