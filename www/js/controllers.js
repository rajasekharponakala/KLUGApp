angular.module('KLUG')
.controller('AppCtrl', function($scope) {

         $scope.images = [];

        $scope.loadImages = function() {
          for(var i = 0; i < 100; i++) {
            $scope.images.push({id: i, src: "#/img/"});
          }
        }
  });



 angular.module('KLUG').controller("ExampleController", function($scope, $ionicSlideBoxDelegate) {
  $scope.navSlide = function(index) {
    $ionicSlideBoxDelegate.slide(index, 500);
  }
});
