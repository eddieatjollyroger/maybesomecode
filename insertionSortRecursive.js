var array = [4, 6, 1, 2, 3, 5];
var array2 = [40, 60, 10, 20, 30, 50, 4, 17]
var valueHolder = 0;
var newArray = [];
var length = array2.length;

function recursiveInsert(array) {
  for (var j = 0; j < array.length; j++) {
    valueHolder = array[j];
    if (array[j] < array[j + 1]) {
      valueHolder = array[j + 1];
    }
  }

  while (newArray.length < length) {

    for (var i = 0; i < array.length; i++) {
      if (valueHolder >= array[i]) {
        valueHolder = array[i];
      }
    }
    newArray.push(valueHolder);

    array.splice(array.indexOf(valueHolder), 1);
    recursiveInsert(array);
  }
  return newArray;
}
console.log(array2);
console.log(recursiveInsert(array2));

