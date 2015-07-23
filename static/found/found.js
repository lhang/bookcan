angular.module('bookCan.found', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/found', {
    templateUrl: '/static/found/found.html',
    controller: 'foundCtrl'
  });
}])

.controller('foundCtrl', ['$scope', '$http', function($scope,$http) {
	$http.get('/cansList', page=1).success(function(data){
		for(var i = 0; i < data.length; i++)
		{
			data[i].book_list = eval("("+ data[i].book_list + ")" );
		}
		$scope.cans = data;
		console.log(data);
	});
}]);