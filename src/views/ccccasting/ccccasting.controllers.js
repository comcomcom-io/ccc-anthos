/*global angular firebase  */
angular.module('esqueleto')
    .controller('ccccastingController', function ($scope, $firebaseObject, $firebaseArray, $http) {
    'use strict';
    
    
    
    var ref = firebase.database().ref();
    
    $scope.casting = $firebaseArray(ref.child('Portfolio/casting/'));

    // on and off
    $scope.visible = function(i){
      
    $scope.ppp = $scope.casting[i].$id;
    $scope.vvv = $scope.casting[i].Visible;
      
    $firebaseObject(ref.child('Portfolio/casting/' + $scope.ppp + '/Visible').set($scope.vvv));  
        
  }
    
    
    
    $scope.getPLenght = function(e, item) {
        
//Lenght
//        console.log($scope.casting.length);
//Retrieve Element
//        console.log(e);
//ID To Set
        var PID = e.srcElement.id;
        console.log(PID);
//Position in Repeat
        var PORDER = $scope.casting.indexOf(item);
        console.log(PORDER);
//Get Order From Firebase
        $scope.FORDER = $firebaseArray(ref.child('Portfolio/casting/'));
        console.log($scope.FORDER);
        
    }
    
    
    $scope.upNum = function(e, item){
        
        var PID = e.srcElement.id;
        
        var POrder = item.Order;
        
        var POrderM = item.Order - 1;
        
        var POrderP = item.Order + 1;
        
		for(var i in $scope.casting){
			if($scope.casting[i] != null){
				if($scope.casting[i].Order){
                    if($scope.casting[i].Order == POrderM){ 
                        try {
                            var OID = $scope.casting[i].$id;
                            $firebaseArray(ref.child('Portfolio/casting/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/casting/' + PID + '/Order').set(POrderM)); 
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
        
		for(var i in $scope.casting){
			if($scope.casting[i] != null){
				if($scope.casting[i].Order){
                    if($scope.casting[i].Order == POrderP){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.casting[i].$id;
                            $firebaseArray(ref.child('Portfolio/casting/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/casting/' + PID + '/Order').set(POrderP)); 
                        }
                        
                        
                        
                        
                    }
				}
			}
		}
	}
    
    $scope.toggleVisible = function(item) {
        var OID = item.$id;
        for(var i in $scope.casting){
			if($scope.casting[i] != null && typeof $scope.casting[i] === 'object'){
				if($scope.casting[i].$id){
                    if($scope.casting[i].$id === item.$id){
                        if($scope.casting[i].Visible === 'On'){
                            try {
                                var OID = $scope.casting[i].$id;
                                $firebaseArray(ref.child('Portfolio/casting/' + OID + '/Visible').set('Off')); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.casting[i].$id;
                                $firebaseArray(ref.child('Portfolio/casting/' + OID + '/Visible').set('On')); 
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
        for(var i in $scope.casting){
			if($scope.casting[i] != null && typeof $scope.casting[i] === 'object'){
				if($scope.casting[i].$id){
                    if($scope.casting[i].$id === item.$id){
                        if($scope.casting[i].PIN === true){
                            try {
                                var OID = $scope.casting[i].$id;
                                $firebaseArray(ref.child('Portfolio/casting/' + OID + '/PIN').set(false)); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.casting[i].$id;
                                $firebaseArray(ref.child('Portfolio/casting/' + OID + '/PIN').set(true)); 
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
        for(var i in $scope.casting){
			if($scope.casting[i] != null && typeof $scope.casting[i] === 'object'){
				if($scope.casting[i].$id){
                    if($scope.casting[i].$id === item.$id){
                        if($scope.casting[i].Featured === 'Yes'){
                            try {
                                var OID = $scope.casting[i].$id;
                                $firebaseArray(ref.child('Portfolio/casting/' + OID + '/Featured').set('No')); 
                            }
                            catch (e) {

                                var OID = $scope.casting[i].$id;
                                $firebaseArray(ref.child('Portfolio/featured/' + OID).set({"id": OID, "section": "casting"})); 

                            }
                        } else {
                            try {
                                var OID = $scope.casting[i].$id;
                                $firebaseArray(ref.child('Portfolio/casting/' + OID + '/Featured').set('Yes')); 
                            }
                            catch (e) {

                                var OID = $scope.casting[i].$id;
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

        for(var i in $scope.casting){
            if($scope.casting[i] != null && typeof $scope.casting[i] === 'object'){
                if($scope.casting[i].Order){
                    if($scope.casting[i].Order > POrder){




                        try {

                            var OID = $scope.casting[i].$id;
                            var RVAL = $scope.casting[i].Order;
                            var NVAL = RVAL - 1;
                            console.log(NVAL);
                            $firebaseArray(ref.child('Portfolio/casting/' + OID + '/Order').set(NVAL)); 

                        }
                        catch (e) {
                        }
                        finally {
                            
                            try {

                            $firebaseArray(ref.child('Portfolio/casting/' + PID).set(null)); 

                        }
                        catch (e) {
                        }
                            
                        }




                    }
                }
            } else {
                
                try{
                $firebaseArray(ref.child('Portfolio/casting/' + PID).set(null)); 
                }
                catch (e) {
                        }
            }
        }
    }
    
    
});