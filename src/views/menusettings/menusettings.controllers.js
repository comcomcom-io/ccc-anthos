/*global angular firebase  */
angular.module('esqueleto')
    .controller('menusettingsController', function ($scope, $routeParams, $route, $firebase, $firebaseObject, $firebaseArray) {
    'use strict';
    

    
    // Init Firebase
    var ref = firebase.database().ref();
    
    // Fireb VAR
    $scope.newMenuEsp = $firebaseArray(ref.child('Portfolio/Settings/Filters/Esp'));
    
    $scope.newEsp = function(){
        $firebaseArray(ref.child('Portfolio/Settings/Filters/Esp').push(
            {
                Dat : 'As',
                Data : ''
            }
        )); 
    }; 
    $scope.DelEsp = function (item) {
        console.log(item.$id);
        var SID = item.$id;                  $firebaseArray(ref.child('Portfolio/Settings/Filters/Esp/' + SID).set(null)); 

    }
    
    
    $scope.newMenuEng = $firebaseArray(ref.child('Portfolio/Settings/Filters/Eng'));
    
    $scope.newEng = function(){
        $firebaseArray(ref.child('Portfolio/Settings/Filters/Eng').push(
            {
                Dat : 'As',
                Data : ''
            }
        )); 
    }; 
    $scope.DelEng = function (item) {
        console.log(item.$id);
        var SID = item.$id;                  $firebaseArray(ref.child('Portfolio/Settings/Filters/Eng/' + SID).set(null)); 

    }
    

    
    
});