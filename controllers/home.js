angular.module('home',[])

.controller('homeCtrl', function($scope, $location, $helper){
    $(document).ready(function(){
        $('.parallax').parallax();
        $('.modal').modal();
    });

    $scope.inscrever = function(path){
   		$location.path('/inscrever');
   		$helper.setFrom(path);
    };
    $scope.editarPerfil = function(){
    	$location.path('/editarPerfil');
    };
})