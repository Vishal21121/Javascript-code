// if user adds a note,add it to the localStorage


// If user adds a note, add it to the localStorage
let addbtn = document.getElementById("addBtn");
addbtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addText.value = '';
    console.log(notesObj);
})

// Function to show elements from localStorage
let add_note = document.getElementById("addBtn");
add_note.addEventListener("click",showNotes);
function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
          // here we are passing button with onclick = deleteNote(this.id) so that on click of delete note button deleteNote function will run
        html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">Note ${index + 1}</h5>
                          <p class="card-text"> ${element}</p>
                          <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                      </div>
                  </div>`;
    });
    let notesElm = document.getElementById("notes");
    if(notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

// function to delete a note

function deleteNote(index) {
    //   console.log("I am deleting", index);

    let notes = localStorage.getItem("notes");
    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
// search functions

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){  // input event will be fired when we type something

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

/*
1. Add title
2. Mark a note as important
3. Separate notes by user
*/