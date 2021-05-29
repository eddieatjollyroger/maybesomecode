function palindrome(string){
var start = 0;
console.log("start is " + start);
var end = string.length - 1;
	console.log("end is " + end);
	console.log(string.length);
if (string.charAt(start) != string.charAt(end)){
	return false;
}
if (string.length <= 1){
	return true;
}
 return palindrome(string.substring(1, end));
}
console.log(palindrome("racecar"));

