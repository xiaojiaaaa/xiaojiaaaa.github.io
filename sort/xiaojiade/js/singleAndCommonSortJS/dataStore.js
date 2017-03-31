/*数组测试平台类*/
function CArray(numElements){
	this.dataStore = [];//存储待排序的数据
	this.pos=0;
	this.numElement=numElement;
	this.insert=insert;
	this.toString=toString;
	this.clear=clear;
	this.setData=setData;
	this.swap=swap;
	for(var i=0;i<numElements;++i){
		this.dataStore[i]=i;
	}
}
/**
 * [insert 插入待排序的数据]
 * @param  {[type]} element [待插入的数据]
 */
function insert(element){
	this.dataStore[this.pos++]=element;
}
/**
 * [toString 输出数组数据]
 * @return {[type]} result [转换成的字符串形式]
 */
function toString(arr){
	var result="";
	for(var i=0;i<arr.length;++i){
		result+=arr[i]+" ";
		if((i>0)&&(i%10==9)){
			result+="\n";
		}
	}
	return result;
}
/**
 * [clear 清数组]
 */
function clear(){
	for(var i=0;i<this.dataStore.length;++i){
		this.dataStore[i]=0;
	}
}
/**
 * [setData 生成随机数组]
 */
function setData(){
	for(var i=0;i<this.dataStore.length;++i){
		this.dataStore[i]=Math.floor(Math.random()*(this.numElement+1));//生成1~100的随机数字集合
	}
}
/**
 * [swap 交换*]
 * @param  {[type]} arr    [操作的数组名]
 * @param  {[type]} index1 [待交换的元素索引1]
 * @param  {[type]} index2 [待交换的元素索引2]
 * @return {[type]}        [description]
 */
function swap(arr,index1,index2){
	var temp=arr[index1];
	arr[index1]=arr[index2];
	arr[index2]=temp;
}

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
		console.log(toString(arr));
	}
}

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
		console.log(toString(arr));
	}
	
}

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
		console.log(toString(arr));
	}
}

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
		console.log(toString(arr));
	}
}

/**
 * 希尔排序算法，动态计算n生成间隔序列 
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
		console.log(toString(arr));
		h=(h-1)/3;
	}
}

/*归并排序算法*/
function merge(left, right,pos){
    var result=[];
  
    while(left.length>0 && right.length>0){
        if(left[0]<right[0]){
        /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }   
    result=result.concat(left).concat(right);
    // console.log(pos);
    // console.log(result.length);
    // console.log(result);
    for(var i=0;i<result.length;i++){
    	modelMergeSort.splice(pos+i,1,result[i]);
    }
    
    console.log(toString(modelMergeSort));
    return result;
}
/**
 * [mergeSort 归并算法]
 * @param  {[type]} items [待排序数组]
 * @param  {[type]} index [归并到已有序数组的哪个位置，主要是为了最后的显示]
 * @return {[type]}       [description]
 */
function mergeSort(items,index){
    if(items.length == 1){    	
        return items;
	}	
	var middle = Math.floor(items.length/2);
    var left = items.slice(0, middle);
    var right = items.slice(middle);
    return merge(mergeSort(left,subArrPos(modelMergeSort,left)), mergeSort(right,subArrPos(modelMergeSort,right)),index);
}

//判断一个数组在另一个数组中的位置
function subArrPos(arr,subArr){
	var flag=true;
	if(arr.length>=subArr.length){
		var j=0;
		while(j<arr.length&&(arr.indexOf(subArr[0],j)>-1)){
			
			var index=arr.indexOf(subArr[0],j);
			
			for(var i=0;i<subArr.length;i++){
				if(arr[index+i]!=subArr[i]){
					j=index+i;
					flag=false;
					break;
				}
				else{
					flag=true;
					j++;
				}
			}
			if(flag){
				return index;
			}			
		}
	}
	//return -1;
}

/*快速排序*/
function qSort(arr,pos){
	if(arr.length==0){
		return [];
	}
	if(arr.length==1){
		return arr;
	}
	var lesser=[];
	var greater=[];
	var pivot=arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]<pivot){
			lesser.push(arr[i]);
		}else{
			greater.push(arr[i]);
		}

	}

	var resultSubArr=lesser.concat(pivot,greater);
	for(var i=0;i<resultSubArr.length;i++){
    	modelQSort.splice(pos+i,1,resultSubArr[i]);
    }
	console.log(toString(modelQSort));
	
	return qSort(lesser,subArrPos(modelQSort,lesser)).concat(pivot,qSort(greater,subArrPos(modelQSort,greater)),pos);
}

///调用
/////初始化
var numElement=10;
var myNums=new CArray(numElement);
myNums.setData();

var bubbleDatas=new Array();
var selectionDatas=new Array();
var insertionDatas=new Array();
var shellDatas=new Array();
var shellDatasNoGas=new Array();
var modelMergeSort=new Array();
var mergeDatas=new Array();
var modelQSort=new Array();
var qDatas=new Array();
for(var i=0;i<numElement;i++){
	bubbleDatas.push(myNums.dataStore[i]);
	selectionDatas.push(myNums.dataStore[i]);
	insertionDatas.push(myNums.dataStore[i]);
	shellDatas.push(myNums.dataStore[i]);	
	shellDatasNoGas.push(myNums.dataStore[i]);

	modelMergeSort.push(myNums.dataStore[i]);//为了确定所排子数组在整个数组中的位置
	mergeDatas.push(myNums.dataStore[i]);

	modelQSort.push(myNums.dataStore[i]);//为了确定所排子数组在整个数组中的位置
	qDatas.push(myNums.dataStore[i]);

}

function handler(){	
	//init();	

	console.log("**********************\n"+toString(myNums.dataStore)+"**********************\n");
	var startTime=new Date().getTime();
	bubbleSort(bubbleDatas);
	// bubbleSort([1,2,3,4]);
	var endTime=new Date().getTime();
	console.log("冒泡排序消耗的时间为："+(endTime-startTime)+"毫秒。");
	console.log("**********************\n");
	// var numElement=10;
	// var myNums2=new CArray(numElement);
	// myNums2.setData();
	// console.log("**********************\n"+toString(myNums2.dataStore)+"**********************\n");
	 var startTime1=new Date().getTime();
	 selectionSort(selectionDatas);
	 var endTime1=new Date().getTime();
	 console.log("选择排序消耗的时间为："+(endTime1-startTime1)+"毫秒。");
	 console.log("**********************\n");
	// var numElement=10;
	// var myNums3=new CArray(numElement);
	// myNums3.setData();
	// console.log("**********************\n"+toString(myNums3.dataStore)+"**********************\n");
	 var startTime2=new Date().getTime();
	 insertionSort(insertionDatas);
	 var endTime2=new Date().getTime();
	 console.log("插入排序消耗的时间为："+(endTime2-startTime2)+"毫秒。");
	 console.log("**********************\n");

	 // var numElement=10;
	 // var myNums4=new CArray(numElement);
	 // myNums4.setData();
	 // console.log("**********************\n"+toString(myNums4.dataStore)+"**********************\n");
	 var gas=[5,3,1];
	 var startTime2=new Date().getTime();
	 shellSort(shellDatas,gas);
	 var endTime2=new Date().getTime();
	 console.log("希尔排序消耗的时间为："+(endTime2-startTime2)+"毫秒。");
	 console.log("**********************\n");

	 // var numElement=10;
	 // var myNums5=new CArray(numElement);
	 // myNums5.setData();
	 // console.log("**********************\n"+toString(myNums5.dataStore)+"**********************\n");
	 var gas=[5,3,1];
	 var startTime2=new Date().getTime();
	 shellSortDynamicGas(shellDatasNoGas);
	 var endTime2=new Date().getTime();
	 console.log("动态生成间隔序列的希尔排序消耗的时间为："+(endTime2-startTime2)+"毫秒。");
	 console.log("**********************\n");

}
//handler();

//归并排序算法调用
function mergeHandler(){

	console.log("**********************\n"+toString(myNums.dataStore)+"**********************\n");
	var startTime=new Date().getTime();
	mergeSort(mergeDatas,0);
	// mergeSort([1,2,3,4]);
	var endTime=new Date().getTime();
	console.log("归并排序消耗的时间为："+(endTime-startTime)+"毫秒。");
	console.log("**********************\n");
	// var numElement=10;
	// var myNums6=new CArray(numElement);
	// myNums6.setData();
	// console.log("**********************\n"+toString(myNums6.dataStore)+"**********************\n");
}
mergeHandler();

//快速排序算法调用
function qHandler(){

	console.log("**********************\n"+toString(myNums.dataStore)+"**********************\n");
	var startTime=new Date().getTime();
	qSort(qDatas,0);
	// mergeSort([1,2,3,4]);
	var endTime=new Date().getTime();
	console.log("快速排序消耗的时间为："+(endTime-startTime)+"毫秒。");
	console.log("**********************\n");
	// var numElement=10;
	// var myNums7=new CArray(numElement);
	// myNums7.setData();
	// console.log("**********************\n"+toString(myNums7.dataStore)+"**********************\n");
}
qHandler();