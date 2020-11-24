/*global angular firebase  */
angular.module('esqueleto')
    .controller('loginController', function ($scope, $firebaseObject, $firebaseArray, $firebaseAuth, localStorageService) {
    'use strict';
    
    

//    var ref = firebase.database().ref();
//    
//    
//    $scope.Login = function(user){
//        $scope.user = {
//            email: "", 
//            pass: ""
//        };
//        $scope.authObj = $firebaseAuth();
//        $scope.authObj.$signInWithEmailAndPassword({
//            email: user.email.toString(),
//            password: user.pass
//        }).then(function(authData) {
//            console.log("Logged in as:", authData.uid);
//        }).catch(function(error) {
//            console.error("Authentication failed:", error);
//        });
//    }
    
    
    var ref = firebase.database().ref();
    
    $scope.thepass = $firebaseObject(ref.child('Portfolio/Settings/Access/'));
    
    $scope.access = function (){
        
        if($scope.user.pass != null){
            if($scope.user.pass === $scope.thepass.$value){
                
                var key = 'log';
                var val = 'yes';

                localStorageService.set(key, val);

                setTimeout(function(){ 
                    
                    location.reload();
            
                }, 250);
                
            }else{
                $scope.error = "Incorrect Password ";
            }
        }else{
            $scope.error = "Enter Password";
        }
        
    }
    
    $scope.todash = function (){
        location.href = '/#/dashboard';
    }

    
    
});


//ng-if="realog === 'yes'"