angular.module('home',[])

.controller('homeCtrl', function($scope){
    $(document).ready(function(){
        $('ul.tabs').tabs();
        $('.parallax').parallax();
    });
})