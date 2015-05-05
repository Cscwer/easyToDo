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
	}
});

app.controller('allTaskCtrl', function($scope, $mdDialog){
	$scope.messages = [
    	{id: 1, title: "Message A", selected: false},
    	{id: 2, title: "Message B", selected: true},
    	{id: 3, title: "Message C", selected: true},
    ];
    $scope.toppings = [
	    { name: 'Pepperoni', wanted: true },
	    { name: 'Sausage', wanted: true },
	    { name: 'Black Olives', wanted: true },
	    { name: 'Green Peppers', wanted: true }
    ];
});
