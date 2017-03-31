function CArray(numElements) {
	this.dataStore = [];
	this.pos = 0;
	this.numElements = numElements;
	this.insert = insert;
	this.toString = toString;
	this.clear = clear;
	this.setData = setData;
	this.swap = swap;
	for ( var i = 0; i < numElements; ++i ) {
		this.dataStore[i] = i;
	}
}

function setData() {
	for ( var i = 0; i < this.numElements; ++i ) {
		this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
	}
}
function clear() {
	for ( var i = 0; i < this.dataStore.length; ++i ) {
		this.dataStore[i] = 0;
	}
}
function insert(element) {
	this.dataStore[this.pos++] = element;
}
function toString() {
	var restr = "";
	for ( var i = 0; i < this.dataStore.length; ++i ) {
		retstr += this.dataStore[i] + " ";
		if (i > 0 & i % 10 == 0) {
			retstr += "\n";
		}
	}
	return retstr;
}

//交换两个数组元素的位置
function swap(arr, index1, index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
}
//返回一个有10个随机数的数组
function getTenDataArr(){
	var rArr=[];
	for(var i=0;i<10;i++){
		//返回0-100之间的10个随机数
		rArr[i]=Math.floor(Math.random()*100);
	}
	return rArr;
}

//冒泡排序算法
function bubbleSort() {
	var numElements = this.dataStore.length;
	var temp;
	for ( var outer = numElements; outer >= 2; --outer) {
		for ( var inner = 0; inner <= outer - 1; ++inner ) {
			if (this.dataStore[inner] > this.dataStore[inner + 1]) {
				swap(this.dataStore, inner, inner + 1);
			}
		}
	}
}
//冒泡排序算法参数为数组
function bubbleSort(arr,arrProcess){
	var numElements = arr.length;
	for ( var outer = numElements; outer > 1; outer--) {
		for ( var inner = 0; inner < outer; inner++ ) {
			if (parseInt(arr[inner]) > parseInt(arr[inner + 1])) {
				swap(arr, inner, inner + 1);
			}
		}
		arrProcess.push(arr+'<br>');
	}
}
//选择排序算法，参数为数组
function selectionSort(arr,arrProcess) {
	var min, temp;//min存放较小的数的索引
	for (var outer = 0; outer < arr.length-1; outer++) {
		min = outer;
		for (var inner = outer + 1; inner < arr.length; inner++) {
			if (parseInt(arr[inner]) < parseInt(arr[min])) {
				min = inner;
			}
		}
		temp = arr[outer];
		arr[outer] = arr[min];
		arr[min] = temp;
		
		arrProcess.push(arr+'<br>');
	}
}
//插入排序算法，参数为数组
function insertionSort(arr,arrProcess) {
	var temp, inner;
	for (var outer = 1; outer <= arr.length - 1; outer++) {
		temp = parseInt(arr[outer]);
		inner = outer;
		while (inner > 0 && (parseInt(arr[inner - 1]) >= temp)) {
			arr[inner] = arr[inner - 1];
            inner--;
		}
		arr[inner] = temp;
		arrProcess.push(arr+'<br>');
	}
}
//希尔排序算法
function shellSort(arr,gaps,arrProcess) {
	for (var g = 0; g < gaps.length; g++) {
		for (var i = gaps[g]; i < arr.length; i++) {
			var temp = arr[i];
			for (var j = i; j >= gaps[g] &&arr[j-gaps[g]] > temp;j -= gaps[g]) {
				arr[j] = arr[j - gaps[g]];
			}
			arr[j] = temp;
		}
		arrProcess.push(arr+'<br>');
	}
}
//快速排序
function quickSort(arr,arrProcess){
	if (arr.length == 0) {
		return [];
	}
	var left = [];
	var right = [];
	var pivot = arr[0];
	for (var i = 1; i < arr.length; i++) {
		arrProcess.push(" 基准值：" + pivot + " 当前元素：" + arr[i]+"<br>");
		if (arr[i] < pivot) {
			arrProcess.push(" 移动 " + arr[i] + " 到左边<br>");
			left.push(arr[i]);
		} else {
			arrProcess.push(" 移动 " + arr[i] + " 到右边<br>");
			right.push(arr[i]);
		}
	}
	return quickSort(left,arrProcess).concat(pivot, quickSort(right,arrProcess));
}

