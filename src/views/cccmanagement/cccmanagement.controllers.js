/*global angular firebase  */
angular.module('esqueleto')
    .controller('cccmanagementController', function ($scope, $firebaseObject, $firebaseArray, $http) {
    'use strict';
    
    
    
    var ref = firebase.database().ref();
    
    $scope.management = $firebaseArray(ref.child('Portfolio/management/'));

    $scope.featured = $firebaseArray(ref.child('Portfolio/featured/'));

    // on and off
    $scope.visible = function(i){
      
    $scope.ppp = $scope.management[i].$id;
    $scope.vvv = $scope.management[i].Visible;
      
    $firebaseObject(ref.child('Portfolio/management/' + $scope.ppp + '/Visible').set($scope.vvv));  
        
  }
    
    
    
    $scope.getPLenght = function(e, item) {
        
//Lenght
//        console.log($scope.management.length);
//Retrieve Element
//        console.log(e);
//ID To Set
        var PID = e.srcElement.id;
        console.log(PID);
//Position in Repeat
        var PORDER = $scope.management.indexOf(item);
        console.log(PORDER);
//Get Order From Firebase
        $scope.FORDER = $firebaseArray(ref.child('Portfolio/management/'));
        console.log($scope.FORDER);
        
    }
    
    
    $scope.upNum = function(e, item){
        
        var PID = e.srcElement.id;
        
        var POrder = item.Order;
        
        var POrderM = item.Order - 1;
        
        var POrderP = item.Order + 1;
        
		for(var i in $scope.management){
			if($scope.management[i] != null){
				if($scope.management[i].Order){
                    if($scope.management[i].Order == POrderM){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.management[i].$id;
                            $firebaseArray(ref.child('Portfolio/management/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/management/' + PID + '/Order').set(POrderM)); 
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
        
		for(var i in $scope.management){
			if($scope.management[i] != null){
				if($scope.management[i].Order){
                    if($scope.management[i].Order == POrderP){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.management[i].$id;
                            $firebaseArray(ref.child('Portfolio/management/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/management/' + PID + '/Order').set(POrderP)); 
                        }
                        
                        
                        
                        
                    }
				}
			}
		}
	}
    
    $scope.toggleVisible = function(item) {
        var OID = item.$id;
        for(var i in $scope.management){
			if($scope.management[i] != null && typeof $scope.management[i] === 'object'){
				if($scope.management[i].$id){
                    if($scope.management[i].$id === item.$id){
                        if($scope.management[i].Visible === 'On'){
                            try {
                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/management/' + OID + '/Visible').set('Off')); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/management/' + OID + '/Visible').set('On')); 
                            }
                            catch (e) {
                            }
                        }
                    }
				}
			}
		}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    }


    $scope.togglePIN = function(item) {
        var OID = item.$id;
        for(var i in $scope.management){
			if($scope.management[i] != null && typeof $scope.management[i] === 'object'){
				if($scope.management[i].$id){
                    if($scope.management[i].$id === item.$id){
                        if($scope.management[i].PIN === true){
                            try {
                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/management/' + OID + '/PIN').set(false)); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/management/' + OID + '/PIN').set(true)); 
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
        for(var i in $scope.management){
			if($scope.management[i] != null && typeof $scope.management[i] === 'object'){
				if($scope.management[i].$id){
                    if($scope.management[i].$id === item.$id){
                        if($scope.management[i].Featured === 'Yes'){
                            try {

                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/management/' + OID + '/Featured').set('No')); 

                            }
                            catch (e) {

                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/featured/' + OID).set({"id": OID, "section": "management"})); 

                            }
                        } else {
                            try {

                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/management/' + OID + '/Featured').set('Yes')); 

                            }
                            catch (e) {

                                var OID = $scope.management[i].$id;
                                $firebaseArray(ref.child('Portfolio/featured/' + OID).set(null)); 
                                
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

        for(var i in $scope.management){
            if($scope.management[i] != null && typeof $scope.management[i] === 'object'){
                if($scope.management[i].Order){
                    if($scope.management[i].Order > POrder){




                        try {

                            var OID = $scope.management[i].$id;
                            var RVAL = $scope.management[i].Order;
                            var NVAL = RVAL - 1;
                            console.log(NVAL);
                            $firebaseArray(ref.child('Portfolio/management/' + OID + '/Order').set(NVAL)); 

                        }
                        catch (e) {
                        }
                        finally {
                            
                            try {

                            $firebaseArray(ref.child('Portfolio/management/' + PID).set(null)); 

                        }
                        catch (e) {
                        }
                            
                        }




                    }
                }
            } else {
                
                try{
                $firebaseArray(ref.child('Portfolio/management/' + PID).set(null)); 
                }
                catch (e) {
                        }
            }
        }
    }
    
    
});