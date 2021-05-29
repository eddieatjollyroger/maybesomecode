var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 7;
var start = 0;
var end = array.length - 1;


function binarySearch(array, target){

	while (start <= end) {
var mid = Math.floor((start + end) / 2);

	if (array[mid] == target) {
	console.log("found target at postition " + mid);
		return;
	}
	else if (array[mid] < target) {
	start = mid + 1;
	}
	else if (array[mid] > target) {
	end = mid - 1;
	}
}

}

binarySearch(array, target);
