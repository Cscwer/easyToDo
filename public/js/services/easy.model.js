/**
 * 缓存数据服务
 * 
 */
angular.module('easyToDo.services',[])
	.factory('model', function(){
		var categories = [
				{content: '百度 IFE 项目'},
				{content: '毕业设计'},
				{content: '社团活动'},
				{content: '家庭分类'},
				{content: 'Test'}
			],
			allTasks = [
				{ title: "Message B", selected: false},
    			{ title: "A", selected: false},
    			{ title: "Message C", selected: false},
    			{ title: 'Pepperoni', selected: true },
	    		{ title: 'Sausage', selected: true },
	    		{ title: 'Black Olives', selected: true },
	    		{ title: 'Green Peppers', selected: true }
	    	];

		function getCategories() {
			return categories;
		};

		function setCateories(cIndex, content) {
			if(content) {
				categories.push({content: content})
			}
			else {
				categories.splice(index, 1);
			}
		};

		function setCategories() {

		}

		function getTask(index) {
			return allTasks;
		};

		function setTask(task) {
			allTasks.unshift(task);
		};

		function getDetail(index) {
			return allTasks[index];
		}

		return {
			getCategories: getCategories,
			getTask: getTask,
			detail: getDetail,
			setTask: setTask,
			allTasks:allTasks
		};
	})