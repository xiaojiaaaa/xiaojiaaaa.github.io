/*插入排序算法*/
function insertionSort(arr){
	var inner;
	var temp;
	for(var i=1;i<arr.length;i++){
		inner=i;
		temp=arr[i];
		while((inner>0)&&(arr[inner-1]>temp)){
			arr[inner]=arr[inner-1];//数据向后移
			inner--;
		}
		arr[inner]=temp;
		console.log(arr.join(" "));
	}
}

insertionSort([6,10,0,6,5,8,7,4,2,7]);