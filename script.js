const password = document.getElementById("#password");
const email = document.getElementById("#email");
const confirmpassword = document.getElementById("#confirmpassword");
const firstname = document.getElementById("#firstname");
const lastname = document.getElementById("#lastname");
const phonenumber = document.getElementById("#phonenumber");
const missing = document.getElementById("#missing");

const inputs =  [email, password, confirmpassword, lastname, phonenumber, firstname];

inputs.forEach((item) => {
    item.addEventListener("focusin", () => {
        missing.textContent = "";
        item.classList.remove("error");
        if(item == password || item == confirmpassword) {
            password.classList.remove("error");
            confirmpassword.classList.remove("error");
        }
    });
});

