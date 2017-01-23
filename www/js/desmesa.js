angular.module('ejemplo.desmesa', [])

// --------------->>>> Extrae los datos de las ponencias
.service('ServParalelos',function($http, $q){
            return {
                getAll: getAll
            }
            function getAll () {
                return $http.get('js/mesas.json');
            }
})

// --------------->>>> Detalle de la ponencia-Mapa
.controller('DesmesaCtrl', function($scope, $state, ServParalelos) {
        
  $scope.posts =[];
     ServParalelos.getAll().then(function(response){
          $scope.posts = response.data;
          $scope.queTipo = $state.params.Tipo;
          
          parseInt($scope.queTipo);
          console.log($scope.queTipo);
                  
  })
})