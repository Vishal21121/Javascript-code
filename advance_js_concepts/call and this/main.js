function SetUsername(username) {
    // assume we made complex DB calls in place of comment
    this.username = username
}

function createUser(username, email, password) {

    //* if we call SetUsername it will be called with global context means this will have global context not the context of createUser but we need to call SetUsername in the context of createUser which can be done using call method
    // SetUsername(username)

    //* passing context of createUser using this keyword 
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser("vishal", "vishal@gmail.com", 123)
console.log(user);