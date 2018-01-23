angular.module('index',[ 'ngRoute', 'home', 'inscrever'])
// angular.module('index',[ 'ngRoute', 'ngCookies', 'home'])

.controller('indexController', function($location, $scope, $window){
    $(".button-collapse").sideNav();
})

.config(function($routeProvider, $locationProvider) {
    
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
    }).when('/inscrever', {
        templateUrl: 'views/inscrever.html',
        controller: 'inscreverCtrl'
    }).otherwise({
        redirectTo: "/"
    });
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
})