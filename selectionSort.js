var array = [4, 2, 6, 1, 5, 3];

function selectionSort(array){
var counter = 0;
	while (counter < array.length){
	for (var i = 0; i < array.length; i++){
	if (array[i+1] < array[i]){
	var tempValue = array[i];
		array[i] = array[i+1];
		array[i+1] = tempValue;

	}

}
counter++;
}
console.log(array);
}
console.log(array);
selectionSort(array);
