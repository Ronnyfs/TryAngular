'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {

    $scope.salvar = function(jogador){
    	$http({
    	        url: 'http://localhost:8080/jogadores/salvar',
    	        method: "POST",
    	        data: JSON.stringify(jogador)
    	    })
    	    .then(function(response) {
    	            alert("Alguma coisa errada não está certa !");
    	    }, 
    	    function(response) { // optional
    	            alert("Cadastrado com Sucesso!");
    	            $scope.jogadoresForm.$setPristine();
                    window.location.href = "http://localhost:8000/#!/view2";
    	    });


    };
     
}]);