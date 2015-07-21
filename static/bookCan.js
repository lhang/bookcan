
// Declare app level module which depends on views, and components
angular.module('bookCan', [
  'ngRoute',
  'bookCan.bookList',
  'bookCan.cansList',
  'bookCan.found',
  'bookCan.newCan',
  'bookCan.login_regist'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/cansList'});
}])


.controller('index', ['$http', '$scope', '$rootScope', 
  function($http,$scope,$rootScope){
	$http.get('/login').success(function(data){
    console.log(data[0]['username'])
		if(data[0]['username'] == ""){ $rootScope.login = false; }
      else{ $rootScope.login = true; $rootScope.username = data[0]['username']; }
	})
	.error(function(){
		$rootScope.login = false;
	})

  $scope.logout = function(){
    $http.get('/logout').success(function(){
      $rootScope.login = false;
      $location.path('/');
    });
  };
}]);