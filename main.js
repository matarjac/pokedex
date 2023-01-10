import data from "./pokedex.json" assert{type: "json"}

let pokemonList = document.querySelector('ul');
let loadMoreBtn = document.getElementById('load-more');
let count = 0;

// event listener for load more button

loadMoreBtn.addEventListener('click', loadMore);


function renderGallery(){
    for (let i=count;i<count+12; i++){
        // create span for ID number
        let pokemonID = document.createElement('span');
        pokemonID.innerHTML = '#'+data[i].id;
        pokemonID.className = 'id-span';
        pokemonID.id = data[i].id;
        console.log(pokemonID);

        // create the image of the pokemon
        let pokemonImage = document.createElement('img');
        pokemonImage.src = data[i].image.thumbnail;
        console.log(pokemonImage);

        // create span for pokemon name
        let pokemonName = document.createElement('span');
        pokemonName.className = 'poke-name';
        pokemonName.innerHTML = data[i].name.english;

        // Adding the 3 elements to the list
        let pokemonLi = document.createElement('li');
        pokemonLi.appendChild(pokemonID);
        pokemonLi.appendChild(pokemonImage);
        pokemonLi.appendChild(pokemonName);

        // Adding the new li to the big ul
        pokemonList.appendChild(pokemonLi);
        
    }
    count+=12;
}

renderGallery();

function loadMore(){
    renderGallery();
}