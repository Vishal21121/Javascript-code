console.log("Hi This Is Vishal");

// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

// CV Iterator
function cvIterator(profiles) {
    let Index = 0;
    return {
        next: function () {
            return Index < profiles.length ?
            {
                value: profiles[Index++],
                done: false
            } :
            
            {
                done: true
            }
        }
    }
}
const candidates = cvIterator(data);

// Button Listener for next button

let next = document.getElementById('next');
next.addEventListener('click',nextCv);
nextCv();


function nextCv(){
    const currentCandidate = candidates.next().value;

    let image  =  document.getElementById('image');
    let profile  =  document.getElementById('profile');
    if(currentCandidate!=undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily Works on ${currentCandidate.language}</li>
    <li class="list-group-item">With ${currentCandidate.framework} Framework</li>
   
  </ul>`;
    }
    else{
        alert('End of candidate application');
        window.location.reload();
    }
    
}