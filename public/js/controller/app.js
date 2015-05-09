/**
 * 主控制器
 * @author waterbear
 * @type {[type]}
 */
var app = angular.module('easyToDo', ['ngMaterial', 'ngAria']);
app.config(['$mdThemingProvider', function($mdThemingProvider) {
	$mdThemingProvider
		.theme('default')
		.accentPalette('amber', {
      		default: '700'
    	});
}]);

/**
 * 主控制器
 * @param  {[type]} $scope [description]
 * @return {[type]}        [description]
 */
app.controller('easyToDoCtrl', function($scope){
	
	/** 任务分类 */
	$scope.categories = [

		{content: '百度 IFE 项目'},
		{content: '毕业设计'},
		{content: '社团活动'},
		{content: '家庭分类'}
	];

	$scope.cateChange = function(index) {
		$scope.cateItem = index;
	}


	$scope.user = {
		email: ''
	};

	/** 所有任务 */
	$scope.allTasks = [
		
    	{ title: "Message B", selected: false},
    	{ title: "A", selected: false},
    	{ title: "Message C", selected: false},
    	{ title: 'Pepperoni', selected: true },
	    { title: 'Sausage', selected: true },
	    { title: 'Black Olives', selected: true },
	    { title: 'Green Peppers', selected: true }
	];

	$scope.messages = [
    	{ title: "Message A", selected: false},
    	{ title: "Message B", selected: false},
    	{ title: "Message C", selected: false},
    ];
    $scope.toppings = [
	    { title: 'Pepperoni', wanted: true },
	    { title: 'Sausage', wanted: true },
	    { title: 'Black Olives', wanted: true },
	    { title: 'Green Peppers', wanted: true }
    ];
    $scope.taskChange = function(index) {
    	$scope.taskItem = index;
    }




    /** 任务详情 */

});

app.controller('allTasksCtrl', function($scope) {
	/** 所有任务 */
	$scope.allTasks = [
		{ title: "Message A", selected: false},
    	{ title: "Message B", selected: false},
    	{ title: "Message C", selected: false},
    	{ title: 'Pepperoni', selected: true },
	    { title: 'Sausage', selected: true },
	    { title: 'Black Olives', selected: true },
	    { title: 'Green Peppers', selected: true }
	];

});
