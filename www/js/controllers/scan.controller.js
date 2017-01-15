angular.module('app.controllers')
.controller('ScanCtrl', function($scope, $ionicModal, $timeout, $rootScope, ionicToast, $state, BaseService, $cordovaBarcodeScanner) {

  $scope.user = {};

  $scope.scanBarCode = function(){
    cordova.plugins.barcodeScanner.scan( 
        function (result) {
          var profileId = result.text.replace('"', '');

          BaseService.executarURLGet('/profiles/' + profileId)
          .success(function (data) {
            $scope.contactData = data;

            $ionicModal.fromTemplateUrl('templates/modal-addcontact.html', {
              scope: $scope
            }).then(function(modal) {
              $scope.modalAddContact = modal;
              $scope.modalAddContact.show();
            });

          })
          .error(function (error) {
            ionicToast.show('Erro ao recuperar perfil.', 'middle', false, 1500);
          });

        },
        function (error) {
          alert("Scanning failed: " + error);
        }
      );

  }

  $scope.addContact = function(){
    //TODO adicionar contato

    $scope.relationship = {};
    $scope.relationship.user = {};
    $scope.relationship.beepedProfile = $scope.contactData;
    $scope.relationship.user.id = localStorage.getItem("loggedUserId");

    BaseService.executarURLPost('/relationships/', $scope.relationship)
      .success(function (data) {
        // alert('data: ' + data );
        if(data && data.id){
          // alert('true');
          ionicToast.show('Contato adicionado.', 'middle', false, 1500);
        }else{
          // alert('false');
          ionicToast.show('Erro ao adicionar.', 'middle', false, 1500);
        }
        
        $scope.modalAddContact.hide();
        // alert('hide');

      })
      .error(function (error) {
        // alert('error');
        ionicToast.show('Erro ao adicionar.', 'middle', false, 1500);
      });

  }


});
