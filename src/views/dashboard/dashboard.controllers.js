/*global angular firebase  */
angular.module('esqueleto')
    .controller('dashboardController', function ($scope, $firebaseObject, $firebaseArray, $http) {
    'use strict';
    
    var ref = firebase.database().ref();
    
    $scope.nswitch = $firebaseObject(ref.child('Portfolio/Settings/Splash'));
    
    $scope.tologin = function (){
        location.href = '/#/login';
    }
    
    
    
    
    
    
    
    
    $scope.toggleSwitch = function() {
        
        if($scope.nswitch.$value === 'siporfavor'){
            try{
                $firebaseArray(ref.child('Portfolio/Settings/Splash').set('nogracias')); 
            }
            catch (e) {
                
            }
        }
        
        
        else{
            try{
                $firebaseArray(ref.child('Portfolio/Settings/Splash').set('siporfavor')); 
            }
            catch (e) {
                
            }
        }
        
    }

    
//    
//    
//           if($scope.projects[i].Featured === 'Yes'){
//                            try {
//                                var OID = $scope.projects[i].$id;
//                                $firebaseArray(ref.child('Portfolio/Projects/' + OID + '/Featured').set('No')); 
//                            }
//                            catch (e) {
//                            }
//                        } else {
//                            try {
//                                var OID = $scope.projects[i].$id;
//                                $firebaseArray(ref.child('Portfolio/Projects/' + OID + '/Featured').set('Yes')); 
//                            }
//                            catch (e) {
//                            }
//                        }
    
    
    
        
        
        
        
        
        
        
        
        
        
    
});