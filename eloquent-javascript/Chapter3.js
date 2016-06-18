/**  Minimum  **/

function min(a,b){
	if(a>b) return b;
	return a;
};
console.log(min(0, 10));
console.log(min(0, -10));


/**  Recursion  **/

function isEven(num){
    if(num<0) num=-num;
	if(num==1) return "false";
	if(num==0) return "true";
	
	return isEven(num-2);
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
//true