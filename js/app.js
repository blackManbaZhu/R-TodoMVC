(function (window) {
	'use strict'; //严格模式
	var todoApp=angular.module('todoApp',['ngRoute','todoApp.controller','todoApp.directives']);
	//设置一个总控制器

	//第三种方法 也是最常用的方法 这种方法就是在angular中最常用的方法 就是利用它的路由的机制
	//配置路由
	todoApp.config(["$routeProvider",function($routeProvider){
		$routeProvider
		.when('/',{
				templateUrl:"todo.html",
				controller:"mainController"
		})
		.when('/:status',{
				templateUrl:"todo.html",
				controller:"mainController"
		})
	}])
})(window);
