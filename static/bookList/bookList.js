angular.module('bookCan.bookList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bookList/:canId', {
    templateUrl: '/static/bookList/bookList.html',
    controller: 'bookListCtrl'
  });
}])

.controller('bookListCtrl', ['$http', '$scope', function() {
	$http.get('/bookList/:canId').success(function(data){
		$scope.cans = data;
	});
}]);