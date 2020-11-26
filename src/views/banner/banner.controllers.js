/*global angular firebase  */
angular.module('esqueleto')
    .controller('bannerController', function ($scope, $firebaseObject, $firebaseArray) {
    'use strict';

        if ($scope.superBandera === 1) {
            angular.element(document).ready(function () {
                $scope.superListon();
                console.log('superliston2');
            });
        }
  


});