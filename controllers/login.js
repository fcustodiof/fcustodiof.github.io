angular.module('login',[])

.controller('loginCtrl', function($scope, $request, $helper, $location, md5){
    $scope.usuario = {
        login:'',
        senha:''
    };
    $scope.doLogin = function(){
        $scope.usuario.senha = md5.createHash($scope.usuario.senha);
        $request.login($scope.usuario)
            .then(function(response) {
                console.log(response);
                $('#ModalLogin').modal('close');
            }, function(error) {
                console.log("erro de requisicao", error);
            }
        );
    };
})