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
    function TestaCPF(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;
        
        for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
        
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
        
        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
        
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }
    var strCPF = "12345678909";
    // alert(TestaCPF(strCPF));
})