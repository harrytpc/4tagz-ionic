angular.module('app.controllers')
.controller('ProfilesCtrl', function($scope, $ionicModal, ionicToast, $timeout, $rootScope, $state, BaseService, $cordovaBarcodeScanner) {

  $scope.user = {};

  // localStorage.setItem("loggedUserId", data.id);
  $scope.listProfiles = function(){
    BaseService.executarURLGet('/users/' + 'e60b6bb5-be45-4cca-af9b-7b8c6c5b4e3b' + '/profiles', $scope.profile)
      .success(function (data) {
        
        // $scope.modalEditProfile.hide();
        $scope.profileList = data;

      })
      .error(function (error) {
        ionicToast.show('Erro ao recuperar os perfis.', 'middle', false, 1500);
      });
  }

  $scope.findById = function(){
    // $scope.qrcode = jquery('#qrcode').qrcode("this plugin is great");

    BaseService.executarURLGet('/profiles/' + 'e60b6bb5-be45-4cca-af9b-7b8c6c5b4e3b' + '/profiles', $scope.profile)
      .success(function (data) {
        
        // $scope.modalEditProfile.hide();
        $scope.profileList = data;

      })
      .error(function (error) {
        ionicToast.show('Erro ao recuperar os perfis.', 'middle', false, 1500);
      });


  }

  $scope.newProfile = function(){
    $scope.profile = {}; 
    // $scope.editEvent = {};
    $ionicModal.fromTemplateUrl('templates/profileEdit.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modalEditProfile = modal;
      $scope.modalEditProfile.show();
      // $scope.newEvent.
      // initEditEvent($scope.eventTemp);
    });
  }

  $scope.editing = function(){
    $scope.profile.editing = true;
  }

  $scope.editProfile = function(profile){
    $scope.profile = profile; 
    // $scope.profile.id = 'teste1';
    // $scope.profile.name = 'xxxx';
    // $scope.editEvent = {};
    $ionicModal.fromTemplateUrl('templates/profileEdit.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modalEditProfile = modal;
      $scope.modalEditProfile.show();
      // $scope.newEvent.
      // initEditEvent($scope.eventTemp);
    });
  }

  $scope.save = function(){
    
    $scope.profile.user = $rootScope.loggedUser;

    BaseService.executarURLPost('/profiles', $scope.profile)
      .success(function (data) {
        if(!data || !data.id){
          ionicToast.show('Erro ao salvar o perfil!.', 'middle', false, 1500);
          return false;
        }else{
          ionicToast.show('Perfil criado com sucesso!', 'middle', false, 1500);
        }

        $scope.modalEditProfile.hide();

      })
      .error(function (error) {
        ionicToast.show('Usuário inválido.', 'middle', false, 1500);
      });

    console.log($scope.profileTemp);
    
  }

  init();
  function init(){
    $scope.listProfiles(); 
  }

});
