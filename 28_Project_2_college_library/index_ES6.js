console.log("this Is ES_6 version")

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log("adding to UI")
        let tableBody = document.getElementById("tableBody");
        let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if(book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type==="success"){
            boldText="Success";
        }
        else{
            boldText = "Error";
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    }

}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("you have submited library form")
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");
    let type;

    // checked function checks whether which optio is choosen
    if(fiction.checked) {
        type = fiction.value;
    }
    else if(programming.checked) {
        type = programming.value;
    }
    else if(cooking.checked) {
        type = cooking.value;
    }

    // creatinga an object 
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    // add and clear are the two functions which we have added in the prototype

    if(display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your Book has successfully added');
    }
    else {
        // show error to the user
        display.show('danger', 'Sorry you cannot add this book.');
    }




    // default feature of the form is to reload the page after pressing submit so inorder to prevent this 
    e.preventDefault();
}