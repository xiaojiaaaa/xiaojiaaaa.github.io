---
author: feixiaoxiaojia
date: 2017-07-16 18:02
tags: 腾讯课堂笔试题
---
# JS中的计时器方法 #

----------

## 题目描述 ##
实现一个打点计时器，要求 <br>
1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1 <br>
2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作<br>
3、第一个数需要立即输出<br>

##思路##
<table cellspacing="0" style="border:1px solid #e6e6e6;text-align:left">
<tr style="background-color:#F3F3F3;">
	<th>方法</th>
	<th>描述</th>
</tr>
<tr>
	<td>setInterval</td>
	<td>周期性的调用一个函数(function)或者执行一段代码</td>
</tr>
<tr>
	<td>clearInterval</td>
	<td>取消调用setInterval设置的重复执行动作</td>
</tr>
<tr>
	<td>setTimeout</td>
	<td>在指定的延迟时间之后调用一个函数(function)或者执行一段代码片段</td>
</tr>
<tr>
	<td>clearTimeout</td>
	<td>方法可取消由setTimeout方法设置的timeout</td>
</tr>
</table>
###例子###
    var id=setInterval(function(){	
		consoel.log("log")
	},1000)

	clearInterval(id);
<br>

    var id=setTimeout(function() {
    	alert("Hello World!");
	}, 500);

	clearTimeout(id);
<font color="red">提示：</font>setTimeout()止执行一次code。如果要多次调用，可以使用setInterval()或者让code自身再次调用setTimeout().

##解题方法##

###setInterval方法###
    function count(start, end) {
		console.log(start);
	    var id=setInterval(function(){
	        if(start<end){
	            console.log(++start);
	        }
	    },100);
	    return {
	    	cancel:function(){
	    		clearInterval(id);
	    	} 
	    }    
	}

	//测试调用
	var cancel=count(1,1000);
	cancel.cancel();//即可停止计数

###setTimeout方法###
    function count(start,end){	
		if(start<=end){
			console.log(start++);
			id=setTimeout(function(){
				count(start,end);
			},100);
		}
		return {
	    	cancel:function(){
	    		clearTimeout(id);
	    	} 
	    } 	
	}

	//测试调用
	var cancel=count(1,1000);
	cancel.cancel();//即可停止计数


