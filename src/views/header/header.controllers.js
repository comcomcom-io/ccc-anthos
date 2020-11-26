/*global angular firebase  */
angular.module('esqueleto')
    .controller('headerController', function ($scope, $firebaseObject, $firebaseArray, $route, $routeParams, $location) {
    'use strict';
    
    
    var ref = firebase.database().ref();
    
    $scope.nswitch = $firebaseObject(ref.child('Portfolio/Settings/Splash'));
    
    $scope.LoaderLoader = $firebaseObject(ref.child('Portfolio/loader'));

    $scope.route = $route;
    $scope.location = $location.path();


    $scope.mobileIcon = false;


    $scope.navMobile = function(){
        var mobileOn = document.getElementById('navMobile').style.top
        if (mobileOn == '45px'){
            document.getElementById('navMobile').style.top = '-150px';
            $scope.mobileIcon = false;
        }
        else{
            document.getElementById('navMobile').style.top = '45px';
            $scope.mobileIcon = true;
        }
    }
    
});