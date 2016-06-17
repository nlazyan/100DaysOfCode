/* // solution 1
var mountain = "";
for(var i=0; i<7; i++){
	mountain +="#";
	console.log(mountain);
}
*/

//solution 2

var m="";
for(var j=0; j<8; j++){
for(var i=1; i<=4;i++){
	if(i%2==1) m +="# ";
	m +=" #";
	}
	console.log(m);
	m="";
}
