angular.module('bookCan.canInfo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/canInfo/:canId', {
    templateUrl: '/static/canInfo/canInfo.html',
    controller: 'canInfoCtrl'
  });
}])

.controller('canInfoCtrl', ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {
	$http.get('/canInfo?canId=' + $routeParams.canId).success(function(data){
		console.log('in canInfoCtl', data)
		data[0].book_list = eval( "(" + data[0].book_list + ")");
		$scope.canInfo = data;
	});
	
}]);