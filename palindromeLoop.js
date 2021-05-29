function palindromeLoop(string){
//console.log(Math.floor(string.length / 2));
        var start = 0;
        var end = string.length - 1;
        //      while (start <= (Math.floor(string.length / 2))) {
while (start != end) {
                if (string.charAt(start) != string.charAt(end)){
                        return false;
                        }
        else {
start++;
end--;
        }
//      console.log(start);
//      console.log(end);
        }
return true;
}
console.log(palindromeLoop("sopapos"));
