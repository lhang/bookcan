angular.module('bookCan.found', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/found', {
    templateUrl: '/static/found/found.html',
    controller: 'foundCtrl'
  });
}])

.controller('foundCtrl', [function() {

}]);