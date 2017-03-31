/**
 * 希尔排序算法
 * @param  {[type]} arr [待排序数组]
 * @param  {[type]} gas [间隔序列]
 * @return {[type]}     [description]
 */
function shellSort(arr,gas){
	for(var g=0;g<gas.length;g++){
		for(var i=gas[g];i<arr.length;i++){
			var j;
			var temp=arr[i];
			for(j=i;j>=gas[g]&&arr[j-gas[g]]>temp;j-=gas[g]){
				arr[j]=arr[j-gas[g]];
			}
			arr[j]=temp;
		}
		console.log(arr.join(" "));
	}
}


// shellSort([61,85,19,88,68,8,70,29],[3,2,1]);
shellSort([1,0,10 ,1 ,3 ,3, 9,3,3,4],[5,3,1]);
/**
 * 希尔排序算法，动态计算n生成间隔序列
 * 
 */
function shellSortDynamicGas(arr){
	var num=arr.length;
	var h=1;//计算gas间隔序列
	while(h<num/3){
		h=3*h+1
	}
	while(h>=1){
		for(var i=h;i<num;i++){
			var temp=arr[i];
			for(var j=i;j>=h&&arr[j-h]>temp;j-=h){
				swap(arr,j,j-h);
			}			
		}
		console.log(arr.join(" "));
		h=(h-1)/3;
	}
}
function swap(arr,index1,index2){
	var temp=arr[index1];
	arr[index1]=arr[index2];
	arr[index2]=temp;
}
console.log("**********************\n");
shellSortDynamicGas([61,85,19,88,68,8,70,29]);