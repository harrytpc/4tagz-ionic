angular.module('app.services')

.factory('LoginService', function($http, $rootScope, $timeout) {
	var LoginService = {};
	
	LoginService.login = function(loginData)	{
		return $http.post($rootScope.baseUrlBackend + '/user/login', JSON.stringify(loginData));
	}
 
 	return LoginService;

});
