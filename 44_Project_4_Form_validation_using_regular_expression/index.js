const u_name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validEmail = false;
let validu_name = false;
let validphone = false;
success.style.display = 'none';
failure.style.display = 'none';

// console.log(u_name,email,phone);

u_name.addEventListener("blur", () => {
    // console.log("name is blurred");
    let regex = /^[a-zA-Z]([a-z0-9A-Z]){2,10}$/;
    let str = u_name.value;
    if(regex.test(str)) {
        console.log("Your name is valid");
        u_name.classList.remove('is-invalid');
        validu_name = true;

    }
    else {
        console.log("Your name is not valid");
        u_name.classList.add('is-invalid');
        validu_name = false;

    }


})

email.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if(regex.test(str)) {
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;

    }
    else {
        console.log("Your email is not valid")
        email.classList.add('is-invalid');
        validEmail = false;

    }

})

phone.addEventListener("blur", () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if(regex.test(str)) {
        console.log("Your phone is valid");
        phone.classList.remove('is-invalid');
        validphone = true;
    }
    else {
        console.log("Your phone is not valid");
        phone.classList.add('is-invalid');
        validphone = false;

    }

})


let submit = document.getElementById("submit");
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You clicked on submit');
    //submit your data here

    if(validu_name && validEmail && validphone) {
        console.log('Phone,email and user are valid.Submitting the form');
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');

        failure.style.display = 'none';
        success.style.display = 'block';


    }
    else {
        console.log('Phone,email and user are not valid.Hence not Submitting the form Please correct the errors and try agin');
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        success.style.display = 'none';
        failure.style.display = 'block';




    }



})