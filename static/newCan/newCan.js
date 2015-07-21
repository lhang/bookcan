angular.module('bookCan.newCan', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/newCan', {
    templateUrl: '/static/newCan/newCan.html',
    controller: 'newCanCtrl'
  });
}])

.controller('newCanCtrl', ['$scope', '$location', '$rootScope', function($scope,$location,$rootScope) {
		$scope.checklogin = function(){
			if(!$rootScope.login){
				$location.path('/login_regist');
			}
			else
				return true
		};
		$scope.initpage = function(){
			$scope.can.books[0] = {name:'',intro:'',link:''};
		};
		$scope.newInput = function(){$scope.can.books.push({name:'',intro:'',link:''})};
		
		$scope.can.books = new Array();
		if($scope.checklogin())
			$scope.initpage();
		
}]);

