
function dogsJsonLoad(){
	let data = JSON.parse(this.responseText).dogs;
	console.log('Dogs:', data);
};

function breedsJsonLoad(){
	let data = JSON.parse(this.responseText).breeds;
	console.log('Breeds:', data);
};

errorFunction = () => { 
	console.log('Error');
};

let dogsJsonRequest = new XMLHttpRequest; 
dogsJsonRequest.addEventListener('load', dogsJsonLoad);
dogsJsonRequest.addEventListener('error', errorFunction);
dogsJsonRequest.open('GET', 'https://random-dogs-api.herokuapp.com/dogs/300');
dogsJsonRequest.send();

let breedsJsonRequest = new XMLHttpRequest;
breedsJsonRequest.addEventListener('load', breedsJsonLoad);
breedsJsonRequest.addEventListener('error', errorFunction);
breedsJsonRequest.open('GET', './breeds.json');
breedsJsonRequest.send();