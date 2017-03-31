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
    	resultArr.splice(pos+i,1,resultSubArr[i]);
    }
	console.log(resultArr);
	
	return qSort(lesser,subArrPos(resultArr,lesser)).concat(pivot,qSort(greater,subArrPos(resultArr,greater)),pos);
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



var resultArr=[ 9, 3, 93, 9, 65, 94, 50, 90, 12, 65 ];
var items=new Array();
for(var i=0;i<resultArr.length;i++){
	items.push(resultArr[i]);
}
qSort(items,0);
