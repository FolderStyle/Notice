var app = angular.module('app', ['Commons']);
app.directive("write", function(){
	link = {
		restrict : "A",
		templateUrl : "view/write.html",
		controller: function($scope, DataList) {
			$scope.data = {
				title: "",
				content: "" 
			};
			$scope.save = function() {
				DataList.setData($scope.data);
				location.href = "detail.html?num=" + $scope.data.num;
			}
			$scope.cancel = function() {
				location.href = "index.html";
			}
		}
	};
	return link;
});