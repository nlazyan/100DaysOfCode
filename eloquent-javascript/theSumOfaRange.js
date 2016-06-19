function range(st, end){
	var arr=[];
	for(var i=st; i<=end; i++){
		arr.push(i);
	};
	return arr;
}

function sum(arr){
	var sum=0;
	for(var i=0; i<arr.length; i++){
		sum +=arr[i];
	};
	return sum;
}

console.log(sum(range(1,10)));