angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('tabsController.scan', {
    cache: false,
    url: '/scan',
    views: {
      'tab1': {
        templateUrl: 'templates/scan.html',
        controller: 'ScanCtrl'
      }
    }
  })

  .state('tabsController.profiles', {
    cache: false,
    url: '/profiles',
    views: {
      'tab2': {
        templateUrl: 'templates/profiles.html',
        controller: 'ProfilesCtrl'
      }
    }
  })

  .state('tabsController.contatos', {
    cache: false,
    url: '/contatos',
    views: {
      'tab3': {
        templateUrl: 'templates/contatos.html',
        controller: 'contatosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/home',
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

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('newUser', {
    url: '/newUser',
    templateUrl: 'templates/newUser.html',
    controller: 'NewUserCtrl'
  })

  .state('tabsController.profileEdit', {
    cache: false,
    url: '/profileEdit',
    views: {
      'tab2': {
        templateUrl: 'templates/profileEdit.html',
        controller: 'ProfileEditCtrl'
      }
    }
  })

  .state('nomeDaPessoa', {
    url: '/page9',
    templateUrl: 'templates/nomeDaPessoa.html',
    controller: 'nomeDaPessoaCtrl'
  })

$urlRouterProvider.otherwise('/login')
  

});