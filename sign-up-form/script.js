let password = document.querySelector("#password");
let passwordConf = document.querySelector("#password_confirmation");

console.log(password);

password.addEventListener("input", passwordValidation.bind(null));
passwordConf.addEventListener("input", passwordValidation.bind(null));

console.log(password);

function passwordValidation() {
    console.log("you did it!");
    if (password.value === passwordConf.value) {
        password.classList.remove('error');
        passwordConf.classList.remove('error');
        console.log("you did it!");
    }
    else {
        password.classList.add('error');
        passwordConf.classList.add('error');
        console.log("something went wrong");
    }
}

