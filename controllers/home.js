angular.module('home',[])

.controller('homeCtrl', function($scope, $location, $helper){
    $(document).ready(function(){
        $('.parallax').parallax();
        $('.modal').modal();
        $(".button-collapse").sideNav();
        $('.dropdown-button').dropdown();
    });

    $scope.inscrever = function(path){
   		$location.path('/inscrever');
   		$helper.setFrom(path);
    };
    $scope.editarPerfil = function(){
    	$location.path('/editarPerfil');
    };
<<<<<<< HEAD
    var $doc = $('html, body');
    $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
=======
>>>>>>> 961775b93da8c727068ba46886f3ce9589d3fa90
})