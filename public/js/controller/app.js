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

app.controller('categoriesCtrl', function($scope){
	$scope.parent = {
		content:null
	};
	$scope.user = {
		email: ''
	};
});

app.controller('allTaskCtrl', function($scope, $mdDialog){
	$scope.allTasks = [
		{id: 1, title: "Message A", selected: false},
    	{id: 2, title: "Message B", selected: false},
    	{id: 3, title: "Message C", selected: false},
    	{ title: 'Pepperoni', selected: true },
	    { title: 'Sausage', selected: true },
	    { title: 'Black Olives', selected: true },
	    { title: 'Green Peppers', selected: true }
	];

	$scope.messages = [
    	{id: 1, title: "Message A", selected: false},
    	{id: 2, title: "Message B", selected: false},
    	{id: 3, title: "Message C", selected: false},
    ];
    $scope.toppings = [
	    { title: 'Pepperoni', wanted: true },
	    { title: 'Sausage', wanted: true },
	    { title: 'Black Olives', wanted: true },
	    { title: 'Green Peppers', wanted: true }
    ];
});
