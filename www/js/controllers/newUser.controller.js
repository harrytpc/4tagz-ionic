angular.module('app.controllers')
.controller('NewUserCtrl', function($scope, $ionicModal, $timeout, $rootScope, $state, UserService) {

  $scope.user = {};

  $scope.save = function(){
  
    $scope.user = UserService.save($scope.user)
    .success(function (data) {
      if(!data && !data.id){
        alert('Erro ao salvar');
        return false;
      }

      alert('Usuario criado com sucesso');

      // $rootScope.loggedUser = data;
      //  alert('logado: ' + data);
      //  $state.go('tabsController.scan', {}); 

      $state.go('login', {}); 

    })
    .error(function (error) {
      alert('Erro ao salvar');
    });       
  }

  function validateUser(){
    $scope.errors = [];
    if(!$scope.login.email){
      //alert('Preencher email');
      $scope.errors.push('Preencher email');
    }

    if($scope.errors.length > 1){
      return false;
    }

    return true;
  }



});
