var app = angular.module('app', ['Commons']);
app.directive("detail", function(){
	link = {
		restrict : "A",
		templateUrl : "view/detail.html",
		controller: function($scope, DataList) {
			var params = document.location.search;
			var param = params.substring(2, params.length).split("=");
			var num = 0;
			if(param.length == 2) {
				num = Number(param[1]);
			} else {
				document.location.href = "index.html";
			}
			$scope.data = DataList.getRow(num);
			if(angular.equals($scope.data, {})) {
				document.location.href = "index.html";
			}
			
			$scope.state = true;
			$scope.cancel = function() {
				$scope.state = !$scope.state;
			}
			$scope.save = function() {
				DataList.setRow($scope.data);
				$scope.cancel();
			}
			$scope.del = function() {
				$scope.data.del = true;
				DataList.setRow($scope.data);
				$scope.back();
			}
			$scope.back = function() {
				location.href = "index.html";
			}
		}
	};
	return link;
});