angular.module('app.controllers')
.controller('ContactsCtrl', function($scope, $rootScope, ionicToast, BaseService) {
	$scope.listContact = function(){  
	   	BaseService.executarURLGet('/relationships/' + $rootScope.loggedUser.id)
			.success(function (data) {

	      	})
	    	.error(function (error) {
	        	ionicToast.show('Usuário inválido.', 'middle', false, 1500);
	      	});
   }

   $scope.listContact();
});
