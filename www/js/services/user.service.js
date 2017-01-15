angular.module('app.services')

.factory('UserService', function($http, $rootScope, $timeout) {
	var UserService = {};
	
	UserService.save = function(user){
		return $http.post($rootScope.baseUrlBackend + '/user/create', JSON.stringify(user));
	}

 	return UserService;
});
