
function dogsJsonLoad(){
	let dogsData = JSON.parse(this.responseText).dogs;
	//SECOND THING IS RUN getBreeds AND PASS PARSED OBJECT ARRAY AS ARGUMENT 
	getBreeds(dogsData);
};

errorFunction = () => { 
	console.log('Error');
};

let dogsJsonRequest = new XMLHttpRequest; 
							//FIRST THING THAT HAPPENS IS RUN dogsJsonLoad
dogsJsonRequest.addEventListener('load', dogsJsonLoad);
dogsJsonRequest.addEventListener('error', errorFunction);
dogsJsonRequest.open('GET', 'https://random-dogs-api.herokuapp.com/dogs/300');
dogsJsonRequest.send();

//THIRD THING THAT HAPPENS SO YOU KNOW THAT THE FIRST XML REQUEST IS FINISHED. ARRAY IS LITERALLY JUST GETTING PASSED THROUGH
function getBreeds(dogsArray){
	let breedsJsonRequest = new XMLHttpRequest;
	breedsJsonRequest.addEventListener('load', breedsJsonLoad);
	breedsJsonRequest.addEventListener('error', errorFunction);
	breedsJsonRequest.open('GET', './breeds.json');
	breedsJsonRequest.send();

	//FOURTH THING THAT HAPPENS TO GET BOTH OBJECT ARRAYS IN THE SAME PLACE
		function breedsJsonLoad(){
		let breedsData = JSON.parse(this.responseText).breeds;
		//FIFTH THING THAT HAPPENS. PASSING BOTH JSON ARRAYS INTO A COMBINE FUNCTION
		combineArray(dogsArray, breedsData);
	};
};

function combineArray(dogsArray, breedsArray){
	// console.log('dogsArray', dogsArray);
	// console.log('breedsArray', breedsArray);

	// LOOP THROUGH AND LOOK AT BREED-ID
	dogsArray.forEach(function(dog){
		let currentBreedId = dog['breed-id'];
		// console.log('current breed id:', currentBreedId);

		//NESTED LOOP MATCHING BREED-ID OF DOG AND BREED ARRAYS
		breedsArray.forEach(function(breed){
			if (currentBreedId === breed.id) {
			// console.log('one breed:', breed);
			dog['dogBreed'] = breed.name;
			dog['basePrice'] = breed['base-price'];
			dog['description'] = breed.description;
			dog['finalPrice'] = dog.basePrice+dog['add-on-price'];
			};
		});
	});
	// loop through breeds and find matching breed_id
	// make final price
	console.log('all the dogs:', dogsArray);
	domString(dogsArray);
};

domString = (dogsArray) => {
	//usual stuff - for loop
	let string = '';
	writeToDom(string);
};

writeToDom = () => {
	// write domString to dom
};









