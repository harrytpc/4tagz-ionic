angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.escanear', {
    url: '/escanear',
    views: {
      'tab1': {
        templateUrl: 'templates/escanear.html',
        controller: 'escanearCtrl'
      }
    }
  })

  .state('tabsController.perfis', {
    url: '/perfis',
    views: {
      'tab2': {
        templateUrl: 'templates/perfis.html',
        controller: 'perfisCtrl'
      }
    }
  })

  .state('tabsController.contatos', {
    url: '/contatos',
    views: {
      'tab3': {
        templateUrl: 'templates/contatos.html',
        controller: 'contatosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.scanQrcode', {
    url: '/scan',
    views: {
      'tab1': {
        templateUrl: 'templates/scanQrcode.html',
        controller: 'scanQrcodeCtrl'
      }
    }
  })

  .state('entrar', {
    url: '/entrar',
    templateUrl: 'templates/entrar.html',
    controller: 'entrarCtrl'
  })

  .state('cadastrar', {
    url: '/cadastrar',
    templateUrl: 'templates/cadastrar.html',
    controller: 'cadastrarCtrl'
  })

  .state('tabsController.meuPerfil', {
    url: '/meuPerfil',
    views: {
      'tab2': {
        templateUrl: 'templates/meuPerfil.html',
        controller: 'meuPerfilCtrl'
      }
    }
  })

  .state('nomeDaPessoa', {
    url: '/page9',
    templateUrl: 'templates/nomeDaPessoa.html',
    controller: 'nomeDaPessoaCtrl'
  })

$urlRouterProvider.otherwise('/entrar')

  

});