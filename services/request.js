angular.module('$request', [])

.service('$request', ['$http','$q', function($http, $q){

	this.getEstadosCidades = function(){
		return $http.get('./services/data/estados-cidades.json')
            .then(function(response) {
                return response.data;
            }, function(response) {
                // something went wrong
                return $q.reject(response.data);
            }
        );
	}
	
	this.findAllPainelBySubculturaId = function(idSubcultura){
		return $http.get('/navegacaoController/findAllPainelBySubculturaId/' + idSubcultura)
		.then(function(response) {
			if (typeof response.data === 'object') {
				return response.data;
			} else {
				// invalid response
				return $q.reject(response.data);
			}
		}, function(response) {
			// something went wrong
			return $q.reject(response.data);
		});
    }
}])