/**
 * 缓存数据服务
 * 
 */
angular.module('easyToDo.services',[])
	.factory('model', function(){
		var categories = [
				{content: 'Home'},
				{content: '生活碎碎念'},
				{content: '各科作业'},
				{content: '专业技能'},
				{content: '修身'}
			],
			allTasks = [
				{ title: "看书一小时", selected: false},
    			{ title: "打码", selected: false},
    			{ title: "Message C", selected: false},
    			{ title: 'node 一章', selected: true },
	    		{ title: '博文一篇', selected: true },
	    		{ title: '深入浅出 node', selected: true },
	    		{ title: '深入浅出 Angular', selected: true }
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