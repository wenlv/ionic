(function(){
	angular.module("appRouteModule",[])
	.config(["$routeProvider",function($routeProvider){
		$routeProvider
		.when("/bookList",{
			templateUrl:"tpl/bookList.html",
			controller:"bookListController"
		})
		.when("/bookDetail/:id",{
			templateUrl:"tpl/bookDetail.html",
			controller:"bookDetailController"
		})
		.when("/login",{
			templateUrl:"tpl/login.html",
			controller:"loginController"
		})
		.when("/bookCart",{
			templateUrl:"tpl/bookCart.html",
			controller:"bookCartController"
		})
		.when("/showOrder",{
			templateUrl:"tpl/showOrder.html",
			controller:"showOrderController"
		})
		.otherwise("/bookList");
	}])
})()