angular.module('index',[ 'ngRoute', 'ui.materialize', 'home', 'inscrever', '$request'])
// angular.module('index',[ 'ngRoute', 'ngCookies', 'home'])

.controller('indexController', function($location, $scope, $window){
    $(".button-collapse").sideNav();
    $scope.goToPerfil = function(){
        $location.path('/perfil');
    };
})

.config(function($routeProvider, $locationProvider) {
    
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
    }).when('/inscrever', {
        templateUrl: 'views/inscrever.html',
        controller: 'inscreverCtrl'
    }).when('/perfil', {
        templateUrl: 'views/perfil.html',
        controller: 'perfilCtrl'
    }).otherwise({
        redirectTo: "/"
    });
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
})