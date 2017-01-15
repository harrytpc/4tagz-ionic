angular.module('app.controllers')
.controller('ContactsCtrl', function($scope, $rootScope, ionicToast, BaseService, $ionicModal) {
	$scope.loggedUserId = localStorage.getItem("loggedUserId");

	$scope.contactList = [];	
	$scope.listContact = function(){  
	   	BaseService.executarURLGet('/users/' + $scope.loggedUserId + "/relationships")
			.success(function (data) {
				$scope.contactList = data;
	      	})
	    	.error(function (error) {
	        	ionicToast.show('Usuário inválido.', 'middle', false, 1500);
	      	});
   }

   $scope.detail = function(contact){
   		$scope.contactData = contact.beepedProfile;
   		$scope.contactData.qrcode = JSON.stringify(contact.beepedProfile.id);
   		$ionicModal.fromTemplateUrl('templates/modal-viewcontact.html', {
          scope: $scope
        }).then(function(modal) {
          $scope.modalViewContact = modal;
          $scope.modalViewContact.show();
        });
   }

   $scope.listContact();
});
