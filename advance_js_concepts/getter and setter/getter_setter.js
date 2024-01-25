class User {
    constructor(email, password) {
        this.email = email
        // we have to write this line although this is not used to set the password value
        // password is being set using setter method
        this.password = password
    }

    // when we declare variable like above email and password then we get getter and setter for that
    // we can create getter method by writing get keyword
    // if we write getter then we have to write setter for that else we will get error
    // we have to name the getter and setter function same as the name of the variables.
    get password() {
        return `${this._password}vishal`
    }

    // use a different variable name then the variable name mentioned in constructor.
    set password(value) {
        this._password = value
    }

    get email() {
        return this._email
    }

    set email(value) {
        this._email = value
    }
}

const vishal = new User("vi@gmail.com", 'abc')
console.log(vishal.password)
console.log(vishal.email)