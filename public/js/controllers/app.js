/**
 * 主控制器
 * @author waterbear
 * @type {[type]}
 */
var app = angular.module('easyToDo', ['ngMaterial',  'materialCalendar', 'easyToDo.services']);
app.config(['$mdThemingProvider', function($mdThemingProvider) {
	$mdThemingProvider
		.theme('default')
		.accentPalette('amber', {
      		default: '700'
    	});
}]);

/**
 * 如果任务标题为空则显示为'任务标题'
 * @param  {[type]} ) {	return     function(input) {		return input ? input : '任务标题';	}} [description]
 * @return {[type]}   [description]
 */
app.filter('title', function() {
	return function(input) {
		return input ? input : '任务标题';
	}
});
app.directive('focusMe', function($timeout) {
	return {
		scope: {trigger: '=focusMe'},
		link: function(scope, element) {
			scope.$watch('trigger', function(value) {
				if(value === true) {
					element[0].focus();
					scope.trigger = false;
				}
			});
		}
	}
})


/**
 * 主控制器
 * @param  {[type]} $scope [description]
 * @return {[type]}        [description]
 */
app.controller('easyToDoCtrl', function($scope, $mdToast, $animate, model){
	
	/** 任务分类 */
	$scope.categories = model.getCategories();

	/** 切换分类 */
	$scope.cateChange = function(index) {
		$scope.cateItem = index;
		$scope.$broadcast('cateChange', index);
	}

	/** 显示分类编辑框 */
	$scope.cateEditShow = false;
	$scope.user = {
		newCate: ''
	};

	/** 增加分类 */
	$scope.addNewCate = function() {
		console.log($scope.user.newCate);
		$scope.categories.push({content: $scope.user.newCate});
		$scope.cateEditShow = false;
		$scope.user.newCate = '';
	}

	/** 取消编辑 */
	$scope.cancelEdit = function() {
		$scope.cateEditShow = false;
		$scope.user.newCate = '';
	}


	$scope.$on('changeTask', function(evt, newIndex) {
		$scope.$broadcast('taskIndexChange', newIndex);

	})

	

    /**
     * 显示弹出框
     */
    $scope.toastPosition = {
	    bottom: false,
	    top: true,
	    left: true,
	    right: false
  	};

	$scope.getToastPosition = function() {
		return Object.keys($scope.toastPosition)
		    .filter(function(pos) { return $scope.toastPosition[pos]; })
		    .join(' ');
	};

	$scope.showCustomToast = function() {
		console.log($scope.getToastPosition());
	    $mdToast.show({
	      controller: 'easyToDoCtrl',
	      templateUrl: '/public/template/toast-attention.html',
	      hideDelay: 6000,
	      position: $scope.getToastPosition()
	    });
	};

	$scope.closeToast = function() {
		$mdToast.hide();
	}
	$scope.cancel = function() {
		$mdToast.hide();
	}

});

app.controller('allTasksCtrl', function($scope, model) {
	/** 所有任务 */
	$scope.allTasks = model.allTasks;
	$scope.pointer = model.pointer;

	/** 显示任务编辑框 */
	$scope.newTaskEdit = false;

	/** 监听任务分类是否改变 */
	$scope.$on('cateChange', function(evt, newIndex) {
		console.log(newIndex);
	})

	$scope.taskChange = function(index) {
    	$scope.taskIndex = index;
    	$scope.$emit('changeTask',index);
    }

    /** 增加新任务 */
    $scope.addNewTask = function() {
    	if(!$scope.user.title) {
    		return;
    	}
    	var task = {
    		title: $scope.user.title,
    		selected: false
    	};
    	$scope.allTasks.unshift(task);
    	$scope.newTaskEdit = false;
    	$scope.user.title = '';
    	$scope.taskChange(0);
    }

});

app.controller('taskDetailCtrl', function($scope, $filter, model){

	$scope.$on('taskIndexChange', function(evt, newIndex) {
		$scope.details = model.allTasks[newIndex];
	});

	 /** 显示日历 */
    $scope.calendarShow = false;
    $scope.isEdit = false;
    $scope.saveDetails = function() {

    }
    $scope.changeDate = function(date) {
    	$scope.details.deadline = date;
    }
});
