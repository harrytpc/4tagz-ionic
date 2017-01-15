angular.module('app.controllers')
.controller('LoginCtrl', function($scope, $ionicModal, $ionicPopup, $timeout, $rootScope, ionicToast, BaseService, $state ) {
  $scope.login = {};

  $scope.executeLogin = function(){  
    if(validaLogin()){
      BaseService.executarURLPost('/users/login', $scope.login)
      .success(function (data) {
        if(!data && !data.id){
          ionicToast.show('Usuário inválido.', 'middle', false, 1500);
          return false;
        }

        $rootScope.loggedUser = data;
         $state.go('tabsController.scan', {}); 
      })
      .error(function (error) {
        ionicToast.show('Usuário inválido.', 'middle', false, 1500);
      });       
    }
  }

  function validaLogin(){
    if(!$scope.login.email){
      ionicToast.show('Preencher email.', 'middle', false, 1500);
      return false;
    }

    if(!$scope.login.password){
      ionicToast.show('Preencher senha.', 'middle', false, 1500);
       return false;
    }

    return true;
  }
});
