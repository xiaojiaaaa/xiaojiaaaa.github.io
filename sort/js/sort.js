/**
* Created by xiaojia on 2017/3/31.
*/
/*数组测试平台类*/
function CArray(numElements){
	this.dataStore = [];//存储待排序的数据
	this.pos=0;
	this.numElement=numElements;
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
		this.dataStore[i]=Math.floor(Math.random()*90+10);//生成10~100的随机数字集合
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
	var processArr=[];
	for(var k=0;k<arr.length;k++){
		processArr.push(arr[k]);
	}
	for(var i=nums;i>=2&&flag;i--){
		flag=false;//如果一次交换能都没有过，则说明冒泡排序已结束
		for(var j=0;j<i-1;j++){			
			if(arr[j]>arr[j+1]){
				flag=true;
				swap(arr,j,j+1);
			}			
		}
		// console.log(arr);
		 processArr=processArr.concat(arr);
		// console.log(processArr);
	}
	return arr.concat(processArr);
}

/*选择排序*/
function selectionSort(arr){
	var processArr=[];
	for(var k=0;k<arr.length;k++){
		processArr.push(arr[k]);
	}

	for(var i=0;i<=arr.length-2;i++){
		var min=i;
		for(var j=i+1;j<=arr.length-1;j++){
			if(arr[min]>arr[j]){
				min=j;
			}
		}
		swap(arr,i,min);
		//console.log(toString(arr));
		processArr=processArr.concat(arr);
	}
	return arr.concat(processArr);
}

/*插入排序算法*/
function insertionSort(arr){
	var inner;
	var temp;
	var processArr=[];
	for(var k=0;k<arr.length;k++){
		processArr.push(arr[k]);
	}
	for(var i=1;i<arr.length;i++){
		inner=i;
		temp=arr[i];
		while((inner>0)&&(arr[inner-1]>temp)){
			arr[inner]=arr[inner-1];//数据向后移
			inner--;
		}
		arr[inner]=temp;
		//console.log(toString(arr));
		processArr=processArr.concat(arr);
	}
	return arr.concat(processArr);
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
	var processArr=[];
	for(var k=0;k<arr.length;k++){
		processArr.push(arr[k]);
	}

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
		//console.log(toString(arr));
		h=(h-1)/3;
		processArr=processArr.concat(arr);
	}
	return arr.concat(processArr);
}

/*归并排序算法*/
var processMergeArr=[];
// for(var k=0;k<this.numElement;k++){
// 	processMergeArr.push(this.dataStore[k]);
// }
function merge(left, right,pos,modelMergeSort){
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
    for(var i=0;i<result.length;i++){
    	modelMergeSort.splice(pos+i,1,result[i]);
    }
    
  //  console.log(toString(modelMergeSort));
    processMergeArr=processMergeArr.concat(modelMergeSort);
    return result;
}
/**
 * [mergeSort 归并算法]
 * @param  {[type]} items [待排序数组]
 * @param  {[type]} index [归并到已有序数组的哪个位置，主要是为了最后的显示]
 * @return {[type]}       [description]
 */
function mergeSort(items,index,modelMergeSort){
    if(items.length == 1){    	
        return items;
	}	
	var middle = Math.floor(items.length/2);
    var left = items.slice(0, middle);
    var right = items.slice(middle);
    return merge(mergeSort(left,subArrPos(modelMergeSort,left),modelMergeSort), mergeSort(right,subArrPos(modelMergeSort,right),modelMergeSort),index,modelMergeSort);
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
var processQArr=[];
function qSort(arr,pos,modelQSort){
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
	//console.log(toString(modelQSort));
	processQArr=processQArr.concat(modelQSort);
	return qSort(lesser,subArrPos(modelQSort,lesser),modelQSort).concat(pivot,qSort(greater,subArrPos(modelQSort,greater),modelQSort));
}
