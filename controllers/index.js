angular.module('index',[ 'ngRoute', 'ui.materialize', 'home', '$helper', 'editarPerfil', 'inscrever', 'perfil', '$request'])
// angular.module('index',[ 'ngRoute', 'ngCookies', 'home'])

.controller('indexController', function($location, $scope, $window){
    $(".button-collapse").sideNav();
    $scope.goToPerfil = function(){
        $location.path('/perfil');
    };
     $(document).ready(function(){
        $('.modal').modal();
    });
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
    }).when('/editar-perfil', {
        templateUrl: 'views/editar-perfil.html',
        controller: 'editarPerfilCtrl'
    }).otherwise({
        redirectTo: "/"
    });
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
})