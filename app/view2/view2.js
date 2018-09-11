'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http',function($scope,$http) {
	$http.get("http://localhost:8080/jogadores/listar").then(function(response){  
		 $scope.jogadores = response.data;     
    });
    
        $scope.deletar = function(id){
        	$http({
        	        url: 'http://localhost:8080/jogadores/'+id,
        	        method: "DELETE"     	       
        	    })
        	    .then(function(response) {
    	            alert("Alguma coisa errada não está certa !");
	    	    }, 
	    	    function(response) { // optional
	    	            alert("Excluido com Sucesso!");
                        window.location.reload();
	    	    });
	    	};

			$scope.editar = function(jogador){
        	$http({
        	        url: 'http://localhost:8080/jogadores/editar',
        	        method: "PUT",
                    data: JSON.stringify(jogador)
        	    })
        	    .then(function(response) {
    	            alert("Alguma coisa errada não está certa !");
	    	    }, 
	    	    function(response) { // optional
	    	            alert("Editado com Sucesso!");
                        window.location.reload();
	    	    });
	    	};
}]);