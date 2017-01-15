angular.module('app.controllers')
.controller('ContactsCtrl', function($scope, $rootScope, ionicToast, BaseService) {
	$scope.contactList = [];
	if(!$rootScope.loggedUser){
		$rootScope.loggedUser = {};
		$rootScope.loggedUser.id = "312432432";
	}
	$scope.listContact = function(){  
	   	BaseService.executarURLGet('/relationships/' + $rootScope.loggedUser.id)
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
