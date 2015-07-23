angular.module('bookCan.cansList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cansList', {
    templateUrl: '/static/canslist/cansList.html',
    controller: 'cansListCtrl'
  });
}])

.controller('cansListCtrl', ['$http', '$scope', function($http, $scope) {
	$http.get('/cansList', page=1).success(function(data){
		for(var i = 0; i < data.length; i++)
		{
			data[i].book_list = eval("("+ data[i].book_list + ")" );
		}
		$scope.cans = data;
		console.log(data);
	});
}]);
