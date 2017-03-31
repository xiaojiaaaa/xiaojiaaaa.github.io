/*选择排序*/
function selectionSort(arr){
	for(var i=0;i<=arr.length-2;i++){
		var min=i;
		for(var j=i+1;j<=arr.length-1;j++){
			if(arr[min]>arr[j]){
				min=j;
			}
		}
		swap(arr,i,min);
		console.log(arr.join(" "));
	}
	
}
function swap(arr,index1,index2){
	var temp=arr[index1];
	arr[index1]=arr[index2];
	arr[index2]=temp;
}

selectionSort([72,54,59,30,31,78,2,77,82,72]);