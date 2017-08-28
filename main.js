
function dogsJsonLoad(){
	let data = JSON.parse(this.responseText).dogs;
	console.log('Dogs:', data);
};

function breedsJsonLoad(){
	let data = JSON.parse(this.responseText).breeds;
	console.log('Breeds:', data);
};

executeThisCodeIfFileErrors= () => {
	console.log('Error');
};

let dogsJsonRequest = new XMLHttpRequest() 
dogsJsonRequest.addEventListener('load', dogsJsonLoad);
dogsJsonRequest.addEventListener('error', executeThisCodeIfFileErrors);
dogsJsonRequest.open('GET', './dogs.json');
dogsJsonRequest.send();

let breedsJsonRequest = new XMLHttpRequest() 
breedsJsonRequest.addEventListener('load', breedsJsonLoad);
breedsJsonRequest.addEventListener('error', executeThisCodeIfFileErrors);
breedsJsonRequest.open('GET', './breeds.json');
breedsJsonRequest.send();