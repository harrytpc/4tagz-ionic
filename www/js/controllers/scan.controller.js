angular.module('app.controllers')
.controller('ScanCtrl', function($scope, $ionicModal, $timeout, $rootScope, $state, BaseService, $cordovaBarcodeScanner) {

  $scope.user = {};

  $scope.scanBarCode = function(){
    cordova.plugins.barcodeScanner.scan( 
        function (result) {
          // alert("We got a barcode\n" +
          // "Result: " + result.text + "\n" +
          // "Format: " + result.format + "\n" +
          // "Cancelled: " + result.cancelled);
          $scope.userData = result.text;

          

        },
        function (error) {
          alert("Scanning failed: " + error);
        }
      );

  }
});
