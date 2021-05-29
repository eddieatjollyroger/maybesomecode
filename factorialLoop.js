
function factorialLoop(n){
var valueHolder = n;
while (n > 1) {
valueHolder *=  n-1;
n--;

}
return valueHolder;
}
console.log(factorialLoop(5));
