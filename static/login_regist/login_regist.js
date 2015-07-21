angular.module('bookCan.login_regist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login_regist', {
    templateUrl: '/static/login_regist/login_regist.html',
    controller: 'login_registCtrl'
  });
}])

.controller('login_registCtrl', ['$http', '$scope', '$rootScope', '$location',
	function($http,$scope,$rootScope,$location) {
	$scope.loginfunc = function(){
		if($scope.user)
		$http.post("/login", $scope.user, []).success(function(data){
			console.log(data.login == 'true');
			if(data.login == 'true'){ 
				$location.path('/'); 
				$rootScope.login = true;
				$rootScope.username = $scope.user.username;
			}

		})
		.error(function(){
			console.log("faild",$scope.user);
		});
	};
}]);