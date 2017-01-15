angular.module('app.services')
	.factory('BaseService', function($http, $rootScope, $timeout) {
		var service = {};
		service.executarURLGet=executarURLGet;
		service.executarURLPost=executarURLPost;
		service.executarURLDelete=executarURLDelete;
		service.executarURLPut=executarURLPut;
		service.executarURLGetWithParams=executarURLGetWithParams;

		return service;

		function executarURLGet(url) {
			return $http.get($rootScope.baseUrlBackend + url);
		}

		function executarURLPost(url, object) {
			return $http.post($rootScope.baseUrlBackend + url, object);
		}

		function executarURLPut(url, object) {
			return $http.put($rootScope.baseUrlBackend + url, object);
		}

		function executarURLDelete(url) {
			return $http.delete($rootScope.baseUrlBackend + url);
		}

		function executarURLGetWithParams(url, params) {
			return $http.get($rootScope.baseUrlBackend + url, params);
		}
	});
