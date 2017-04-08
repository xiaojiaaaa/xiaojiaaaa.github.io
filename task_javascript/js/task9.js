var arr=[];
var rootNode=document.getElementsByClassName("layer_1")[0];//获取根节点
var searchText=document.getElementById("txtSearch");
var flag;
var elemtsNum;
var k;//为了记数，查看是否有此内容

/*先序遍历*/
function preOrderHandler(){
	k=0;
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
	k=0;
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
	elemtsNum=arr.length
	console.log(elemtsNum);
	var searchValue = searchText.value;
	var index=elemtsNum;
	flag=false;//查看是否有待查询内容
	for(var i=0;i<arr.length;i++){
		if((arr[i].innerText.split("\n"))[0]==searchValue){
			index=i;
			flag=true;
		}
	}
	arr.splice(index+1,arr.length-index);	
}
/*显示*/
var current;
function showOut(){	
	current=arr.shift();
	if(current){
		btnDisabled();
		current.style.backgroundColor="blue";
		current.style.color="#fff";
		var id=setTimeout(function(){
			current.style.backgroundColor="#fff";
			current.style.color="#000";	
			k++;
			showOut();
		},500);
	}
	if(current&&(current.innerText.split("\n"))[0]==searchText.value){
		current.style.backgroundColor="red";
		current.style.color="#fff";	
		alert("找到元素"+(current.innerText.split("\n"))[0]);
		btnAbled();
	}

	if(k==elemtsNum&&(!flag)&&(searchText.value!="")){
		alert("没有此内容！");
		btnAbled();
	}
	else if(k==elemtsNum&&searchText.value==""){
		alert("遍历结束！");
		btnAbled();
	}
}
function btnAbled(){
	var preOrder=document.getElementById("preOrder");
	var postOrder=document.getElementById("postOrder");
	var btnAdd=document.getElementById("btnAdd");
	var btnDelete=document.getElementById("btnDelete");
	preOrder.disabled=false;
	postOrder.disabled=false;
	btnAdd.disabled=false;
	btnDelete.disabled=false;
}
function btnDisabled(){
	var preOrder=document.getElementById("preOrder");
	var postOrder=document.getElementById("postOrder");
	var btnAdd=document.getElementById("btnAdd");
	var btnDelete=document.getElementById("btnDelete");
	preOrder.disabled=true;
	postOrder.disabled=true;
	btnAdd.disabled=true;
	btnDelete.disabled=true;
}

/*增加子节点*/
var parentNode;
function addHandler(e){
	if(parentNode){
		var txtAddValue=document.getElementById("txtAddValue");
		if(txtAddValue.value==""){	
			alert("请输入待插入的内容！");	
		}
		else{
			var node=document.createElement("div");
			node.innerText=txtAddValue.value;
			node.className="layer_"+txtAddValue.value;
			parentNode.appendChild(node);		
		}
	}
	else{
		alert("请先选中父节点！");
	}
}

/*删除节点*/
function deleteHandler(){
	if(parentNode){
		parentNode.parentNode.removeChild(parentNode);
		parentNode=null;
		txtSearch.value="";
	}
	else{
		alert("请先选中待删除的节点！");
	}
}

function resetColor(){
 	var tree=document.getElementsByClassName("tree");
    for(var i=0;i<tree.length;i++){
        tree[i].style.backgroundColor="#fff"
    }
}
function init(){
	var preOrder=document.getElementById("preOrder");
	preOrder.addEventListener("click",preOrderHandler);
	var postOrder=document.getElementById("postOrder");
	postOrder.addEventListener("click",postOrderHandler);

	rootNode.addEventListener("click",function(e){
        var node=e.target||e.srcElement;
        if(node.style.backgroundColor!="red"){
        	parentNode=node;
            searchText.value=(node.innerText.split("\n"))[0];   
            resetColor();       
            node.style.backgroundColor="red";
        } 
        else{
            node.style.backgroundColor="#fff";
        }
	});
	var btnAdd=document.getElementById("btnAdd");
	btnAdd.addEventListener("click",addHandler);
	var btnDelete=document.getElementById("btnDelete");
	btnDelete.addEventListener("click",deleteHandler);
}

init();