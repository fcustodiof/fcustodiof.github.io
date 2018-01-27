angular.module('home',[])

.controller('homeCtrl', function($scope, $location){
    $(document).ready(function(){
        $('.parallax').parallax();
        $('.modal').modal();
        $(".button-collapse").sideNav();
        $('.dropdown-button').dropdown();
    });
    $scope.inscrever = function(){
        $location.path('/inscrever');
    };
    var $doc = $('html, body');
    $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
})