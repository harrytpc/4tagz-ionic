angular.module('app.controllers')
.controller('LoginCtrl', function($scope, $ionicModal, $ionicPopup, $timeout, $rootScope, LoginService, $state ) {


  $scope.login = {};

  $scope.executeLogin = function(){
  // if(validaLogin()){
    
    LoginService.login($scope.login)
    .success(function (data) {
      if(!data && !data.id){
        alert('Usuário inválido');
        return false;
      }

      $rootScope.loggedUser = data;
       alert('logado: ' + data);
       $state.go('tabsController.scan', {}); 

    })
    .error(function (error) {
      alert('Usuário inválido');
    });       
  }

  function validaLogin(){
    $scope.errors = [];
    if(!$scope.login.email){
      //alert('Preencher email');
      $scope.errors.push('Preencher email');
    }

    if($scope.login.password){
      $scope.errors.push('Preencher senha');
    }

    if($scope.errors.length > 1){
      return false;
    }


    return true;
  }



});
