/*global angular firebase  */
angular.module('esqueleto')
    .controller('headerController', function ($scope, $firebaseObject, $firebaseArray, $route, $routeParams, $location) {
    'use strict';
    
    
    var ref = firebase.database().ref();
    
    $scope.nswitch = $firebaseObject(ref.child('Portfolio/Settings/Splash'));
    
    $scope.loaderIMG = $firebaseArray(ref.child('Portfolio/loader/configuration/Addon/'));

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


    
   

   
    

    
});