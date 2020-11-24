/*global angular firebase  */
angular.module('esqueleto')
    .controller('projectssettingsController', function ($scope, $firebaseObject, $firebaseArray, $http) {
    'use strict';
    
    
    
    var ref = firebase.database().ref();
    
    $scope.projects = $firebaseArray(ref.child('Portfolio/Projects/'));

    // on and off
    $scope.visible = function(i){
      
    $scope.ppp = $scope.projects[i].$id;
    $scope.vvv = $scope.projects[i].Visible;
      
    $firebaseObject(ref.child('Portfolio/Projects/' + $scope.ppp + '/Visible').set($scope.vvv));  
        
  }
    
    
    
    $scope.getPLenght = function(e, item) {
        
//Lenght
//        console.log($scope.projects.length);
//Retrieve Element
//        console.log(e);
//ID To Set
        var PID = e.srcElement.id;
        console.log(PID);
//Position in Repeat
        var PORDER = $scope.projects.indexOf(item);
        console.log(PORDER);
//Get Order From Firebase
        $scope.FORDER = $firebaseArray(ref.child('Portfolio/Projects/'));
        console.log($scope.FORDER);
        
    }
    
    
    $scope.upNum = function(e, item){
        
        var PID = e.srcElement.id;
        
        var POrder = item.Order;
        
        var POrderM = item.Order - 1;
        
        var POrderP = item.Order + 1;
        
		for(var i in $scope.projects){
			if($scope.projects[i] != null){
				if($scope.projects[i].Order){
                    if($scope.projects[i].Order == POrderM){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.projects[i].$id;
                            $firebaseArray(ref.child('Portfolio/Projects/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/Projects/' + PID + '/Order').set(POrderM)); 
                        }
                        
                        
                        
                        
                    }
				}
			}
		}
	}
    $scope.downNum = function(e, item){
        
        var PID = e.srcElement.id;
        
        var POrder = item.Order;
        
        var POrderM = item.Order - 1;
        
        var POrderP = item.Order + 1;
        
		for(var i in $scope.projects){
			if($scope.projects[i] != null){
				if($scope.projects[i].Order){
                    if($scope.projects[i].Order == POrderP){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.projects[i].$id;
                            $firebaseArray(ref.child('Portfolio/Projects/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/Projects/' + PID + '/Order').set(POrderP)); 
                        }
                        
                        
                        
                        
                    }
				}
			}
		}
	}
    
    $scope.toggleVisible = function(item) {
        var OID = item.$id;
        for(var i in $scope.projects){
			if($scope.projects[i] != null && typeof $scope.projects[i] === 'object'){
				if($scope.projects[i].$id){
                    if($scope.projects[i].$id === item.$id){
                        if($scope.projects[i].Visible === 'On'){
                            try {
                                var OID = $scope.projects[i].$id;
                                $firebaseArray(ref.child('Portfolio/Projects/' + OID + '/Visible').set('Off')); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.projects[i].$id;
                                $firebaseArray(ref.child('Portfolio/Projects/' + OID + '/Visible').set('On')); 
                            }
                            catch (e) {
                            }
                        }
                    }
				}
			}
		}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }
    
    $scope.toggleFeatured = function(item) {
        var OID = item.$id;
        for(var i in $scope.projects){
			if($scope.projects[i] != null && typeof $scope.projects[i] === 'object'){
				if($scope.projects[i].$id){
                    if($scope.projects[i].$id === item.$id){
                        if($scope.projects[i].Featured === 'Yes'){
                            try {
                                var OID = $scope.projects[i].$id;
                                $firebaseArray(ref.child('Portfolio/Projects/' + OID + '/Featured').set('No')); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.projects[i].$id;
                                $firebaseArray(ref.child('Portfolio/Projects/' + OID + '/Featured').set('Yes')); 
                            }
                            catch (e) {
                            }
                        }
                    }
				}
			}
		}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }
    
    $scope.productDelete = function(e, item){

        var PID = e.srcElement.id;

        var POrder = item.Order;

        var POrderM = item.Order - 1;

        var POrderP = item.Order + 1;

        for(var i in $scope.projects){
            if($scope.projects[i] != null && typeof $scope.projects[i] === 'object'){
                if($scope.projects[i].Order){
                    if($scope.projects[i].Order > POrder){




                        try {

                            var OID = $scope.projects[i].$id;
                            var RVAL = $scope.projects[i].Order;
                            var NVAL = RVAL - 1;
                            console.log(NVAL);
                            $firebaseArray(ref.child('Portfolio/Projects/' + OID + '/Order').set(NVAL)); 

                        }
                        catch (e) {
                        }
                        finally {
                            
                            try {

                            $firebaseArray(ref.child('Portfolio/Projects/' + PID).set(null)); 

                        }
                        catch (e) {
                        }
                            
                        }




                    }
                }
            } else {
                
                try{
                $firebaseArray(ref.child('Portfolio/Projects/' + PID).set(null)); 
                }
                catch (e) {
                        }
            }
        }
    }
    
    
});