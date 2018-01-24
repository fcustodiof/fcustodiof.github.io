angular.module('inscrever',[])

.controller('inscreverCtrl', function($scope, $request){
    $(document).ready(function(){
        $('select').material_select();
    });
    $scope.estados = [];
    $scope.estado = "";
    $scope.cidades = [];
    $scope.cidade = "";
    $scope.cidades = [];
    $scope.getIndexEstado = function(){
        angular.forEach($scope.estados, function(estado, key) {
            if(estado.sigla == $scope.estado){
                $scope.cidades = $scope.estados[key].cidades;
            }
        });
        console.log($scope.cidades);
    };

    $request.getEstadosCidades()
	    .then(function(response) {
            console.log(response);
	      	$scope.estados = response;
	    }, function(error) {
	       	console.log("erro de requisicao", error);
		}
	);
})