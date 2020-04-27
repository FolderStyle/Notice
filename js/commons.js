angular.module('Commons', [])
.factory('DataList', function(){
	var DataList = {};
	DataList.remove = function() {
		localStorage.removeItem('list');
		return [];
	}
	DataList.setData = function(row) {
		var data = [];
		if(localStorage.getItem('list') != null) {
			data = JSON.parse(localStorage.getItem('list'));
		}
		row.num = (data.length + 1);
		row.del = false;
		data.push(row);
		localStorage.setItem('list', JSON.stringify(data));
		return true;
	}
	DataList.setRow = function(row) {
		var data = [];
		if(localStorage.getItem('list') != null) {
			data = JSON.parse(localStorage.getItem('list'));
		}
		var index = (row.num - 1);
		data.splice(index, 1, row);		
		localStorage.setItem('list', JSON.stringify(data));
		return true;
	}
	DataList.getData = function() {
		var data = [];
		if(localStorage.getItem('list') != null) {
			data = JSON.parse(localStorage.getItem('list'));
		}
		return data;
	}
	DataList.getRow = function(num) {
		data = [];
		row = {};
		if(localStorage.getItem('list') != null) {
			data = JSON.parse(localStorage.getItem('list'));
		}
		for(var i = 0; i < data.length; i++) {
			var target = data[i];
			if(target.num == num){
				row = target;
				break;
			}
		}
		return row; 
	}
	return DataList;
});