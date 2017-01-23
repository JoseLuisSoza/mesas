angular.module('ejemplo', ['ionic', 'ui.router', 'ejemplo.mesas', 'ejemplo.desmesa'])
// TABS Y NAVEGACION


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  
    .state('app.mesas', {
    url: '/mesas',
    views: {
      'menuContent': {
        templateUrl: 'templates/mesas.html',
        controller: 'MesasCtrl'
      }
    }
  })
   .state('app.desme', {
      url: "/mesas/:Tipo",
      views: {
        'menuContent': {
          templateUrl: "templates/desmesa.html",
          controller: 'DesmesaCtrl'
        }
      }
    })

    
  // Aqui damos por defecto la primera ruta, ademas si no encuentra alguna ruta, se la envia a esta
  $urlRouterProvider.otherwise('/app/mesas');
})
