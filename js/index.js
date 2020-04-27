var app = angular.module('app', ['Commons']);
app.directive("list", function(){
	link = {
		restrict : "A",
		templateUrl : "view/list.html",
		controller: function($scope, DataList) {
			
			$scope.resourceList = DataList.getData();
			
			$scope.remove = function() {
				$scope.resourceList = DataList.remove();
			}
			
			$scope.write = function() {
				location.href = "write.html";
			}
			
			$scope.li_event = function(row){
				console.log(row);
				if(row.del) {
					alert("삭제된 글입니다.");
					return;
				}
				location.href = "detail.html?num=" + row.num;
			}
		}
	};
	return link;
});