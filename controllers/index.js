angular.module('index',[ 'ngRoute', 'ui.materialize', 'home','$helper', 'inscrever', '$request'])
// angular.module('index',[ 'ngRoute', 'ngCookies', 'home'])

.controller('indexController', function($location, $scope, $window){
    $(".button-collapse").sideNav();

     $(document).ready(function(){
        $('.modal').modal();
    });
    var $doc = $('html, body');
})

.config(function($routeProvider, $locationProvider) {
    
    $routeProvider.when('/', {
        templateUrl: 'views/conteudo-home.html',
        controller: 'homeCtrl'
    }).when('/inscrever', {
        templateUrl: 'views/inscrever.html',
        controller: 'inscreverCtrl'
    }).when('/conteudo-home', {
        templateUrl: 'views/conteudo-home.html',
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