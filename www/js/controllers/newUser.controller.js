angular.module('app.controllers')
.controller('NewUserCtrl', function($scope, $ionicModal, $timeout, $rootScope, $state, ionicToast, UserService) {
  $scope.user = {};

  $scope.save = function(){  
    if(validateUser()){
      $scope.user = UserService.save($scope.user)
        .success(function (data) {
          if(!data && !data.id){
            ionicToast.show('Erro ao salvar.', 'middle', false, 1500);
            return false;
          }
          ionicToast.show('Usuario criado com sucesso.', 'middle', false, 1500);

          // $rootScope.loggedUser = data;
          //  alert('logado: ' + data);
          //  $state.go('tabsController.scan', {}); 

          $state.go('login', {}); 

        })
        .error(function (error) {
          ionicToast.show('Erro ao salvar.', 'middle', false, 1500);
        });
    }    
  }

  function validateUser(){
    if(!$scope.user.email){
      ionicToast.show('Preencher email.', 'middle', false, 1500);
      return false;
    }
    if(!$scope.user.password){
      ionicToast.show('Preencher password.', 'middle', false, 1500);
      return false;
    }
    
    if(!$scope.user.confirmPassword){
      ionicToast.show('Preencher confirmação password.', 'middle', false, 1500);
      return false;
    }
    if($scope.user.password !== $scope.user.confirmPassword){
      ionicToast.show('Password e confirmação devem ser iguais', 'middle', false, 1500);
      return false;
    }
    return true;
  }
});
