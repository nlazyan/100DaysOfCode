/**  Looping a triangle  **/

var mountain = "";
for(var i=0; i<7; i++){
	mountain +="#";
	console.log(mountain);
};



/** FizzBuzz  **/

var n=100;
for(var i=1; i<=n; i++ ){
	var result=i;
	if(i%3==0&&i%5==0) {result="FizzBuzz";}
	else if(i%5==0&&i%3!==0){ result="Buzz";}
	else if(i%3==0) {result="Fizz";}
	console.log(result);
};


/**  Chess Board  **/

var size=8;
for(var j=1; j<=size; j++){
	var char="";
	for(var i=1; i<=size; i++){
	if((j+i)%2==0) char +=" ";
	else char +="#";
};
console.log(char);
}



