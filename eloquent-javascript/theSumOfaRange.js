function range(st, end, step){
	if(step==undefined) step=1;
	if(step<0) step=-step;
	var arr=[];
	if(st<end){
		for(var i=st; i<=end; i +=step){
		arr.push(i);
	 	}
	}
	else{
		for(var i=st; i>=end; i -=step){
		arr.push(i);
		}
	}
	return arr;
}

function sum(arr){
	var sum=0;
	for(var i=0; i<arr.length; i++){
		sum +=arr[i];
	};
	return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55