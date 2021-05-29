var myArgs = process.argv.slice(2);


var array = [4, 2, 7, 1, 8];
var target = 1;

function linearSearch(array, target){

for (var i = 0; i < array.length; i++){
if (array[i] == target){
console.log("the target is in position number " + i);

}
}
}
linearSearch(array, target);
