var arr=[];
var rootNode=document.getElementsByClassName("layer_1")[0];//获取根节点
var searchText=document.getElementById("txtSearch");
/*先序遍历*/
function preOrderHandler(){
	arr=[];
	preOrder(rootNode);
	spliceArr();
	showOut();
}
function preOrder(node){
	if(node!=null){		
		arr.push(node);
		var child=node.firstElementChild;
		while(child){			
			preOrder(child);
			child=child.nextElementSibling;
		}
	}
}

/*后序遍历*/
function postOrderHandler(node){
	arr=[];
	postOrder(rootNode);
	spliceArr();
	showOut();
}
function postOrder(node){
	if(node!=null){
		var child=node.firstElementChild;
		while(child){
			postOrder(child);
			child=child.nextElementSibling;
		}
		arr.push(node);
	}
}

/*截取数组*/
function spliceArr(){	
	var searchValue = searchText.value;
	var index=arr.length;
	for(var i=0;i<arr.length;i++){
		if((arr[i].innerText.split("\n"))[0]==searchValue){
			index=i;
		}
	}
	arr.splice(index+1,arr.length-index);	
}
/*显示*/
var current;
function showOut(){
	current=arr.shift();
	if(current){
		current.style.backgroundColor="blue";
		current.style.color="#fff";
		setTimeout(function(){
			current.style.backgroundColor="#fff";
			current.style.color="#000";
			showOut();
		},500);
	}
	if((current.innerText.split("\n"))[0]==searchText.value){
		current.style.backgroundColor="red";
		current.style.color="#fff";	
		alert("找到元素"+(current.innerText.split("\n"))[0]);	
	}
}

function init(){
	var preOrder=document.getElementById("preOrder");
	preOrder.addEventListener("click",preOrderHandler);
	var postOrder=document.getElementById("postOrder");
	postOrder.addEventListener("click",postOrderHandler);
}

init();