function reverseArray(arr){
	var newArr=[];
	for(var i=arr.length-1; i>=0; i--){
		newArr.push(arr[i]);
	}
	return newArr;
}
function reverseArrayInPlace(arr){
	for(var i=0; i < Math.floor(arr.length/2); i++){
      var last=arr[i];
      arr[i]=arr[arr.length-1-i];
      arr[arr.length-1-i]=last;
    }
       return arr;
}

/*
   // solution2 of reverseArrayInPlace 

function reverseArrayInPlace(arr){
  reverseArr=reverseArray(arr);
	for(var i=0; i<arr.length-1;i++){
    arr[i]=reverseArr[i];
    }
       return arr;
}

*/

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]