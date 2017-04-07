var arr=[];
var root=document.getElementsByClassName("layer_one")[0];//获取根节点

/*中序遍历*/
function inOrderHandler(){
	arr=[];
	// reset();
	inOrder(root);
	showOut();
}
function inOrder(node){
	if(node!=null){
		inOrder(node.firstElementChild);
		arr.push(node);
		inOrder(node.lastElementChild);
	}
}
/*先序遍历*/
function preOrderHandler(){
	arr=[];
	preOrder(root);
	showOut();
}
function preOrder(node){
	if(node!=null){
		arr.push(node);
		preOrder(node.firstElementChild);		
		preOrder(node.lastElementChild);
	}
}
/*后序遍历*/
function postOrderHandler(node){
	arr=[];
	postOrder(root);
	showOut();
}
function postOrder(node){
	if(node!=null){
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		arr.push(node);
	}
}
/*显示*/
var current;
function showOut(){
	current=arr.shift();
	if(current){
		current.style.backgroundColor="blue";
		setTimeout(function(){
			current.style.backgroundColor="#fff";
			showOut();
		},500);
	}
}

function init(){
	var inOrder=document.getElementById("inOrder");
	inOrder.addEventListener("click",inOrderHandler);
	var preOrder=document.getElementById("preOrder");
	preOrder.addEventListener("click",preOrderHandler);
	var postOrder=document.getElementById("postOrder");
	postOrder.addEventListener("click",postOrderHandler);
}

init();