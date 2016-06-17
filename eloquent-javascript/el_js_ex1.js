/**  Looping a triangle  **/

var mountain = "";
for(var i=0; i<7; i++){
	mountain +="#";
	console.log(mountain);
};

var n=21;
for(var i=1; i<=n; i++ ){
	var result=i;
	if(i%3==0) result="Fizz";
	else if(i%5==0&&i%3!==0) result="Buzz";
	else if(i%3==0&&i%5==0) result="FizzBuzz";
	console.log(result);
};
