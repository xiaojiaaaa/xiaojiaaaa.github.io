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
    	itemData.splice(pos+i,1,result[i]);
    }
    
    console.log(itemData);
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
    // index=items.indexOf(left[0])
    return merge(mergeSort(left,subArrPos(itemData,left)), mergeSort(right,subArrPos(itemData,right)),index);
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

//调用 
var itemData=[9, 3, 93, 9, 65, 94, 50, 90, 12, 65];
var items=new Array();
for(var i=0;i<itemData.length;i++){
	items.push(itemData[i]);
}
mergeSort(items,0);