/*global angular firebase  */
angular.module('esqueleto')
    .controller('relatedController', function ($scope, $firebaseObject, $firebaseArray, $route, $routeParams, $location) {
    'use strict';
    
    
    var ref = firebase.database().ref();
    
    $scope.nswitch = $firebaseObject(ref.child('Portfolio/Settings/Splash'));
    
    $scope.Featured = $firebaseObject(ref.child('Portfolio/featured'));

    $scope.management = $firebaseObject(ref.child('Portfolio/management'));
    $scope.casting = $firebaseObject(ref.child('Portfolio/casting'));
    $scope.produccion = $firebaseObject(ref.child('Portfolio/produccion'));

    $scope.route = $route;
    $scope.location = $location.path();


    $scope.mobileIcon = false;


    $scope.navMobile = function(){
        var mobileOn = document.getElementById('navMobile').style.display
        if (mobileOn == 'block'){
            document.getElementById('navMobile').style.display = 'none';
            $scope.mobileIcon = false;
        }
        else{
            document.getElementById('navMobile').style.display = 'block';
            $scope.mobileIcon = true;
        }
    }


    $scope.random = function() {
        return 0.5 - Math.random();
    }


    
   

   
    

    
});