angular.module('ejemplo.mesas', [])

// --------------->>>> Extrae los datos de las ponencias
.service('ServParalelos',function($http, $q){
            return {
                getAll: getAll
            }
            function getAll () {
                return $http.get('js/mesas.json');
            }
})

.controller('MesasCtrl', function($scope,$http, ServParalelos) {
  
    $scope.posts =[];
    	   ServParalelos.getAll().then(function(response){
          $scope.posts = response.data;
    
    })
})