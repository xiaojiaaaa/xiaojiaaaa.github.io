/*冒泡排序*/
function bubbleSort(arr){
	var flag=true;//设置标志位
	var nums=arr.length;
	for(var i=nums;i>=2&&flag;i--){
		flag=false;//如果一次交换能都没有过，则说明冒泡排序已结束
		for(var j=0;j<i-1;j++){			
			if(arr[j]>arr[j+1]){
				flag=true;
				swap(arr,j,j+1);
			}			
		}
		console.log(arr.toString());
	}
}

function swap(arr,index1,index2){
	var temp=arr[index1];
	arr[index1]=arr[index2];
	arr[index2]=temp;
}

bubbleSort([1,2,3,4,2]);