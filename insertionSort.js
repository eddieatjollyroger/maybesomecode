var array = [4, 6, 3, 2, 1, 5];
var newArray = [];
var oMenor;
var counter;
var length = array.length;
function insertionSort(){

	while (newArray.length < length){
for (var i = 0; i < length; i++){
 if(array[i] > array[i+1]){
	 oMenor = array[i];
	console.log(array[i]);
}
}
newArray.push(oMenor);
array.pop(oMenor);
console.log(oMenor);
 }
}


console.log(array);
insertionSort();
console.log(array);
console.log(newArray);
