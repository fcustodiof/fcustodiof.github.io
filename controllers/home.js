angular.module('home',['angular-timeline'])

.controller('homeCtrl', function($scope){
    $(document).ready(function(){
        $('ul.tabs').tabs();
        $('.parallax').parallax();
    });
    $scope.events = [
        {
            badgeClass: 'info',
            title: 'UFLA',
            content: 'No segundo semestre de 2013 entrei na Universidade Federal de Lavras para cursar Sistemas de Informação'
        },
        {
            badgeClass: 'info',
            title: 'CIMtech',
            content: 'Entrei no CIMtech em março de 2016 fiquei lá até outubro de 2017, trabalhei com desenvolvimento mobile utilizando IONIC 1 e com front-end'
        }, {
            badgeClass: 'info',
            title: 'LICESA',
            content: 'Em novembro de 2017 comecei a trabalhar no laboratório do professor Ahmed e trabalho com desenvolvimento mobile utilizando o IONIC 1'
        }
    ];
})