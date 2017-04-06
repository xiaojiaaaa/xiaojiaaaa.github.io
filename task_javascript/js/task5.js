/**
 *checkInput
 * 判断是否符合输入限制
 */
function checkInput(){
	if(inputNum.value==""){
		// inputNum.focus();
		alert("请输入值");
		return false;
	}
	if(isNaN(inputNum.value)){
		
		alert("请输入数字");	
		return false;
	}
	if(inputNum.value<10||inputNum.value>100){
		alert("请输入10-100间的数字");
		return false;
	}
	if(dataArr.length>=60){
		alert("队列元素数量最多为60个");
		return false;
	}
	return true;
}
/**
 * pushLeftHandler
 * 左侧入点击事件
 */
function pushLeftHandler(){

	if(checkInput()){
		//var result = showNumList.innerHTML;
		var result1 =document.createElement("li");
		result1.innerText=inputNum.value;
		result1.style.height=inputNum.value+"px";
		showNumList.insertBefore(result1,showNumList.firstChild);
		dataArr.unshift(inputNum.value);
		inputNum.value="";
	}
	else{
		inputNum.focus();
	}	
}

/**
 * pushRightHandler
 * 右侧入点击事件
 */
function pushRightHandler(){
	if(checkInput()){
		var result = document.createElement("li");
		result.innerText=inputNum.value;
		result.style.height=inputNum.value+"px";
		showNumList.appendChild(result);
		dataArr.push(inputNum.value);
		inputNum.value="";
	}
	else{
		inputNum.focus();		
	}
}

/**
 * popLeftHandler
 * 左侧出点击事件
 */
function popLeftHandler(){
	// console.log(showNumList.firstChild);
	if(showNumList.innerHTML!=""||showNumList.firstChild!=null){
		var result = showNumList.firstChild.innerText;
		showNumList.removeChild(showNumList.firstChild);
		dataArr.shift();
		alert("使用左侧出操作移除的元素是："+result);
	}
	else{
		alert("队列中没有元素！");
	}
	inputNum.focus();
}

/**
 * popRightHandler
 * 右侧出点击事件
 */
function popRightHandler(){
	if(showNumList.innerHTML!=""||showNumList.firstChild!=null){
		var result = showNumList.lastChild.innerText;
		showNumList.removeChild(showNumList.lastChild);
		dataArr.pop();
		alert("使用右侧出操作移除的元素是："+result);
	}
	else{
		alert("队列中没有元素！");
	}
	inputNum.focus();
}

/**
 * sortHandler
 * 排序过程
 */
//冒泡排序
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
function swap(arr,index1,index2){
	var temp=arr[index1];
	arr[index1]=arr[index2];
	arr[index2]=temp;
}
//创建节点
function createNode(resultArr){

	var sortProcess=document.getElementById("showlist_num");
	sortProcess.innerHTML="";
	for(var i=0;i<resultArr.length;i++){
		var node=document.createElement("li");
		node.innerText=resultArr[i];
		node.style.height=resultArr[i]+"px";
		sortProcess.appendChild(node);
	}
}
function bubbleSortHandler(){
	var bubbleDatas=dataArr;
	//console.log(bubbleDatas);
	var showArr=document.getElementById("showArr");
	var result=bubbleSort(bubbleDatas);
	//console.log(result);
	var resultArr=result.splice(0,bubbleDatas.length);;
	showArr.value=result;

 	var proArrmy=[];
 	for(var j=0;j<showArr.value.length;j++){
 		proArrmy.push(showArr.value[j]);
 	}
 	var i=0;
 	var interval= setInterval(function(){
 		if(proArrmy.length<=0){
			clearInterval(interval);
			 alert("排序结束"); 
			return;
		}
		//console.log(proArrmy);
        createNode(proArrmy.splice(0,dataArr.length));
        i++;
    }, 1000);  
   
}


function init(){
	//分别给各个按钮绑定点击事件
	var pushLeft=document.getElementById("push_left");
	pushLeft.addEventListener("click",pushLeftHandler);
	var pushRight=document.getElementById("push_right");
	pushRight.addEventListener("click",pushRightHandler);
	var popLeft=document.getElementById("pop_left");
	popLeft.addEventListener("click",popLeftHandler);
	var popRight=document.getElementById("pop_right");
	popRight.addEventListener("click",popRightHandler);
	var sortBtn=document.getElementById("btnsort");
	sortBtn.addEventListener("click",bubbleSortHandler);
	var data_content = document.getElementById('showlist_num');
	data_content.addEventListener("click",function(e){
        if(e.target && e.target.nodeName.toUpperCase() == "LI") {
            var  index;
            var datalist = this.children;
            for(var i = 0; i < datalist.length; i++){
                if(datalist[i] == e.target){
                    index = i;
                    break;
                }
            }
            if(index >= 0){
                //移除数组数组元素
                dataArr.splice(index,1);
                //移除HTML代码
                data_content.removeChild(e.target);
                alert('移除元素内数值为 ' + e.target.innerText + ', 位置为为 ' + (++index));
            }else{
                alert('移除元素失败');
            }
        }
    });
}

var inputNum=document.getElementById("input_num");
var showNumList=document.getElementById("showlist_num");
var dataArr=[];

init();