angular.module('app.controllers')
.controller('ProfileEditCtrl', function($scope, $ionicModal, $timeout, $rootScope, $state, ScanService, $cordovaBarcodeScanner) {

  $scope.user = {};

  $scope.profile = {};

  // jquery('#qrcode').qrcode("this plugin is great");

  $scope.listProfiles = function(){
    
  }

  $scope.findById = function(){
    // $scope.qrcode = jquery('#qrcode').qrcode("this plugin is great");

  }

  $scope.save = function(){
    alert($scope.profile);
  }

});
