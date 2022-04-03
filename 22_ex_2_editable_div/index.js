// creating the div element
let divEle = document.createElement("div");

// setting the attributes
divEle.setAttribute("id","tar")
divEle.setAttribute("style", 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// creating the textNode
let val = localStorage.getItem('text')
let text;
if(text==null){
     text = document.createTextNode("this is empty click to edit")

}
else{
text = document.createElement(val);
}
divEle.append(text)


// grabbing the place to append divEle
let main = document.getElementById("container");
console.log(divEle,main);

main.appendChild(divEle)


divEle.addEventListener("click",function(){
    notextarea = document.getElementsByClassName("textarea").length;
    if (notextarea==0){
    let html = divEle.innerText;
    divEle.innerHTML = `<textarea id="textarea" class="textarea"  rows =3>${html}</textarea>`;
    }
    let textarea = document.getElementById("textarea");
    // blur event
    textarea.addEventListener('blur',function(){
        divEle.innerHTML = textarea.value;
        localStorage.setItem("text",textarea.value);
    })
    
})
