angular.module('conteudo-home',[])

.controller('conteudoHomeCtrl', function($scope, $location, $helper){
    $(document).ready(function(){
        $('.parallax').parallax();
        $('.modal').modal();
        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true, 
          }
        );
        $('.collapsible').collapsible();
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
    $scope.abrirModalLogin = function(){
        $('.button-collapse').sideNav('hide');
        $('#ModalLogin').modal('open');
    }
    var $doc = $('html, body, main');
    $('.scrollSuave').click(function() {
        $window.animate({
            scrollTop: $( $.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
})