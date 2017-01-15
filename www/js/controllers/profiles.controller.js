angular.module('app.controllers')
.controller('ProfilesCtrl', function($scope, $ionicModal, $timeout, $rootScope, $state, ScanService, $cordovaBarcodeScanner) {

  $scope.user = {};

  $scope.listProfiles = function(){
    
  }

  $scope.findById = function(){
    // $scope.qrcode = jquery('#qrcode').qrcode("this plugin is great");

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

  $scope.editProfile = function(){
    $scope.profile = {}; 
    $scope.profile.id = 'teste1';
    $scope.profile.name = 'xxxx';
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
    
  }


});
