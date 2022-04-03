// console.log("Hello");

// utility functions:
// 1. utility functions to get element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

// Initialize number of parameter
let addedParamsCount = 0;

//Hide the parameter box initially
let parameterBox = document.getElementById('parameterBox');
parameterBox.style.display = 'none';

// if the user clicks on params box hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parameterBox').style.display = 'block';
})


// if the user clicks on json box, hode the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parameterBox').style.display = 'none';
})

// if the user clicks on + button, add more parameters
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = ` <div class="row row-cols-lg-auto g-3 align-items-center my-2">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Parameter ${addedParamsCount + 2}</label>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="parameterKey${addedParamsCount + 2}" placeholder="Enter Parameter ${addedParamsCount + 2} key">
                        </div>
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="parametervalue${addedParamsCount + 2}" placeholder="Enter Parameter ${addedParamsCount + 2} value">
                        </div>
                        <button id="addParam" type="submit" class="btn btn-primary deleteParam">-</button>

                    </div>`
    // convert the element string to DOM node
    let paramElement = getElementFromString(string);
    // console.log(paramElement);
    params.appendChild(paramElement);
    //Add an event listener to remove the parameter on clicking - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for(item of deleteParam) {
        item.addEventListener('click', (e) => {
            let sure = confirm('Do you want to delete the parameter?')
            if(sure == true) {
                e.target.parentElement.remove();
            }

        })
    }
    addedParamsCount++;
})

// If the user clicks on submit button

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    // show please wait in the response box to request patience from the user
    document.getElementById('responseJsonText').value = 'Please wait.. fetching response...';

    // fetch all the values user has entered
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    

    // if user has used params option instead of Json , collect all the parameters in an object
    if(contentType == 'params') {
        data = {};
        for(i = 0; i < addedParamsCount + 1; i++) {
            if(document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parametervalue' + (i + 1)).value;
                data[key] = value;
                
            }

        }
        data = JSON.stringify(data);
    }
    else{
        data = document.getElementById('requestJsonText').value;

    }
    // log all the value in the console for debugging
    console.log('URL is', url);
    console.log('requestType is', requestType);
    console.log('contentType is', contentType);
    console.log('data is',data);

    //if the request type is get, invoke fetch api to create a post request
    if (requestType == 'GET'){
        fetch(url,{
            method:'GET',
        })
        .then(response => response.text())
        .then((text) =>{
            // document.getElementById('responseJsonText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();

        });
    }
    else{
        fetch(url,{
            method:'POST',
            body:data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        })
        .then(response => response.text())
        .then((text) =>{
            // document.getElementById('responseJsonText').value = text;
            document.getElementById('responsePrism').innerHTML = text;
            Prism.highlightAll();
            
        });

    }


})