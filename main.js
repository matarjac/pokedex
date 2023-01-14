import data from "./pokedex.json" assert{type: "json"}

let pokemonList = document.querySelector('ul');
let loadMoreBtn = document.getElementById('load-more');
let count = 0;

// modal variables
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
let modalID = document.getElementById('modal-id');
let modalName = document.getElementById('modal-name');
let description = document.getElementById('pokemon-description')
let modalImage = document.getElementById('modal-img');
let typesList = document.getElementById('types-list');
let statsFirstSpan = document.getElementById('hp-attack-defender');
let statsSecondSpan = document.getElementById('special-speed');
let totalSpan = document.getElementById('total');


// event listener for load more button

loadMoreBtn.addEventListener('click', loadMore);


function renderGallery(){
    for (let i=count;i<count+12; i++){
        let pokemonObj = data[i];
        // create span for ID number
        let pokemonID = document.createElement('span');
        let idNumber = data[i].id;
        console.log(idNumber);
        pokemonID.innerHTML = '#'+("000" + idNumber).slice(-3);
        pokemonID.className = 'id-span';
        pokemonID.id = data[i].id;

        // create the image of the pokemon
        let pokemonImage = document.createElement('img');
        pokemonImage.src = data[i].image.thumbnail;

        // create span for pokemon name
        let pokemonName = document.createElement('span');
        pokemonName.className = 'poke-name';
        pokemonName.innerHTML = data[i].name.english;

        // Adding the 3 elements to the li element
        let pokemonLi = document.createElement('li');
        pokemonLi.appendChild(pokemonID);
        pokemonLi.appendChild(pokemonImage);
        pokemonLi.appendChild(pokemonName);
        pokemonLi.addEventListener('click', function(){
            modal.style.display = "block";
            console.log(idNumber);
            modalImage.src = pokemonObj.image.thumbnail;
            modalName.innerHTML = pokemonObj.name.english;
            description.innerHTML = pokemonObj.description;
            modalID.innerHTML = "#"+ pokemonObj.id;
            types(pokemonObj);
            stats(pokemonObj);
        })

        // Adding the new li to the big ul to present the pokemon card
        pokemonList.appendChild(pokemonLi);
        
    }
    count+=12;
}

renderGallery();

function loadMore(){
    renderGallery();
}

function types(pokemonObj){
  typesList.innerHTML='';
  for(let i =0; i<pokemonObj.type.length; i++){
    let type = document.createElement('li');
    type.className = pokemonObj.type[i];
    type.innerHTML=pokemonObj.type[i];
    typesList.appendChild(type);
    console.log(type)
  }
  console.log(pokemonObj);
}

function stats(pokemonObj){
  statsFirstSpan.innerHTML=`HP: ${pokemonObj.base.HP} <br> Attack: ${pokemonObj.base.Attack} <br> Defense: ${pokemonObj.base.Defense}`
  statsSecondSpan.innerHTML=`Special attack: ${pokemonObj.base['Sp. Attack']} <br> Special Defense: ${pokemonObj.base['Sp. Defense']} <br> Speed: ${pokemonObj.base.Speed}`;
  totalSpan.innerHTML = 'Total: ' + `${pokemonObj.base.HP + pokemonObj.base.Attack + pokemonObj.base.Defense + pokemonObj.base['Sp. Attack'] + pokemonObj.base['Sp. Defense'] + pokemonObj.base.Speed}`;
}

// Modal

// Get the modal

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function presentModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}