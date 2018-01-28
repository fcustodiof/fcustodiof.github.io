angular.module('conteudo-home',[])

.controller('conteudoHomeCtrl', function($scope, $location, $helper){
    $(document).ready(function(){
        $('.parallax').parallax();
        $('.modal').modal();
        $(".button-collapse").sideNav();
        $('.dropdown-button').dropdown();
    });
    // alert("to na home");
    $scope.inscrever = function(path){
   		$location.path('/inscrever');
   		$helper.setFrom(path);
    };
    $scope.editarPerfil = function(){
    	$location.path('/editarPerfil');
    };
    var $doc = $('html, body');
    $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
})