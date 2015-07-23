angular.module('bookCan.newCan', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/newCan', {
    templateUrl: '/static/newCan/newCan.html',
    controller: 'newCanCtrl'
  });
}])

.controller('newCanCtrl', ['$scope', '$location', '$rootScope', '$http', function($scope,$location,$rootScope,$http) {
		$scope.checklogin = function(){
			if(!$rootScope.login){
				$location.path('/login_regist');
			}
			else
				return true
		};
		$scope.initpage = function(){
			$scope.can = {
			"name":"",
			"intro":"",
			"books":new Array(),
			"tags":new Array()
		}
			$scope.can.books[0] = {name:'',intro:'',link:''};
		};
		$scope.createCan = function(){
			$http.post('/newCan', $scope.can).success(

				)
				.error(
					)
		};
		$scope.delTag = function(tag){
			index = $scope.can.tags.indexOf(tag);
			$scope.can.tags.splice(index,1);
		};
		$scope.newTag = function(){
			console.log($scope.newtag);
			$scope.can.tags.push($scope.newtag);
		};

		$scope.newInput = function(){$scope.can.books.push({name:'',intro:'',link:''})};
		if($scope.checklogin())
			$scope.initpage();
		
}]);

