angular.module('bookCan.cansList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cansList', {
    templateUrl: '/static/canslist/cansList.html',
    controller: 'cansListCtrl'
  });
}])

.controller('cansListCtrl', ['$http', '$scope', function($http, $scope) {
	$http.get('/cansList').success(function(data){
		$scope.cans = data;
	});
}]);
