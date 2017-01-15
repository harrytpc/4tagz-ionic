angular.module('app.controllers')
.controller('ContactsCtrl', function($scope, $rootScope, ionicToast, BaseService) {
	$scope.loggedUserId = localStorage.getItem("loggedUserId");

	$scope.contactList = [];	
	$scope.listContact = function(){  
	   	BaseService.executarURLGet('/relationships/' + $scope.loggedUserId)
			.success(function (data) {
				$scope.contactList = [
					{id:"123", name:"Harry", avatar:"img/ben.png"}, 
					{id:"123", name:"Ponte", avatar:"img/mike.png"}, 
					{id:"123", name:"Gabriel", avatar:"img/galhardi.jpg"}, 
					{id:"123", name:"Alan", avatar:"img/max.png"}, 
				];
	      	})
	    	.error(function (error) {
	        	ionicToast.show('Usuário inválido.', 'middle', false, 1500);
	      	});
   }

   $scope.detail = function(id){
	
   }

   $scope.listContact();
});
