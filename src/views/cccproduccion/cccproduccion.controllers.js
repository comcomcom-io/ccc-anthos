/*global angular firebase  */
angular.module('esqueleto')
    .controller('cccproduccionController', function ($scope, $firebaseObject, $firebaseArray, $http) {
    'use strict';
    
    
    
    var ref = firebase.database().ref();
    
    $scope.produccion = $firebaseArray(ref.child('Portfolio/produccion/'));

    // on and off
    $scope.visible = function(i){
      
    $scope.ppp = $scope.produccion[i].$id;
    $scope.vvv = $scope.produccion[i].Visible;
      
    $firebaseObject(ref.child('Portfolio/produccion/' + $scope.ppp + '/Visible').set($scope.vvv));  
        
  }
    
    
    
    $scope.getPLenght = function(e, item) {
        
//Lenght
//        console.log($scope.produccion.length);
//Retrieve Element
//        console.log(e);
//ID To Set
        var PID = e.srcElement.id;
        console.log(PID);
//Position in Repeat
        var PORDER = $scope.produccion.indexOf(item);
        console.log(PORDER);
//Get Order From Firebase
        $scope.FORDER = $firebaseArray(ref.child('Portfolio/produccion/'));
        console.log($scope.FORDER);
        
    }
    
    
    $scope.upNum = function(e, item){
        
        var PID = e.srcElement.id;
        
        var POrder = item.Order;
        
        var POrderM = item.Order - 1;
        
        var POrderP = item.Order + 1;
        
		for(var i in $scope.produccion){
			if($scope.produccion[i] != null){
				if($scope.produccion[i].Order){
                    if($scope.produccion[i].Order == POrderM){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.produccion[i].$id;
                            $firebaseArray(ref.child('Portfolio/produccion/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/produccion/' + PID + '/Order').set(POrderM)); 
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
        
		for(var i in $scope.produccion){
			if($scope.produccion[i] != null){
				if($scope.produccion[i].Order){
                    if($scope.produccion[i].Order == POrderP){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.produccion[i].$id;
                            $firebaseArray(ref.child('Portfolio/produccion/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/produccion/' + PID + '/Order').set(POrderP)); 
                        }
                        
                        
                        
                        
                    }
				}
			}
		}
	}
    
    $scope.toggleVisible = function(item) {
        var OID = item.$id;
        for(var i in $scope.produccion){
			if($scope.produccion[i] != null && typeof $scope.produccion[i] === 'object'){
				if($scope.produccion[i].$id){
                    if($scope.produccion[i].$id === item.$id){
                        if($scope.produccion[i].Visible === 'On'){
                            try {
                                var OID = $scope.produccion[i].$id;
                                $firebaseArray(ref.child('Portfolio/produccion/' + OID + '/Visible').set('Off')); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.produccion[i].$id;
                                $firebaseArray(ref.child('Portfolio/produccion/' + OID + '/Visible').set('On')); 
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
        for(var i in $scope.produccion){
			if($scope.produccion[i] != null && typeof $scope.produccion[i] === 'object'){
				if($scope.produccion[i].$id){
                    if($scope.produccion[i].$id === item.$id){
                        if($scope.produccion[i].PIN === true){
                            try {
                                var OID = $scope.produccion[i].$id;
                                $firebaseArray(ref.child('Portfolio/produccion/' + OID + '/PIN').set(false)); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.produccion[i].$id;
                                $firebaseArray(ref.child('Portfolio/produccion/' + OID + '/PIN').set(true)); 
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
        for(var i in $scope.produccion){
			if($scope.produccion[i] != null && typeof $scope.produccion[i] === 'object'){
				if($scope.produccion[i].$id){
                    if($scope.produccion[i].$id === item.$id){
                        if($scope.produccion[i].Featured === 'Yes'){
                            try {
                                var OID = $scope.produccion[i].$id;
                                $firebaseArray(ref.child('Portfolio/produccion/' + OID + '/Featured').set('No')); 
                            }
                            catch (e) {
                                var OID = $scope.produccion[i].$id;
                                $firebaseArray(ref.child('Portfolio/featured/' + OID).set({"id": OID, "section": "produccion"})); 
                            }
                        } else {
                            try {
                                var OID = $scope.produccion[i].$id;
                                $firebaseArray(ref.child('Portfolio/produccion/' + OID + '/Featured').set('Yes')); 
                            }
                            catch (e) {
                                var OID = $scope.produccion[i].$id;
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

        for(var i in $scope.produccion){
            if($scope.produccion[i] != null && typeof $scope.produccion[i] === 'object'){
                if($scope.produccion[i].Order){
                    if($scope.produccion[i].Order > POrder){




                        try {

                            var OID = $scope.produccion[i].$id;
                            var RVAL = $scope.produccion[i].Order;
                            var NVAL = RVAL - 1;
                            console.log(NVAL);
                            $firebaseArray(ref.child('Portfolio/produccion/' + OID + '/Order').set(NVAL)); 

                        }
                        catch (e) {
                        }
                        finally {
                            
                            try {

                            $firebaseArray(ref.child('Portfolio/produccion/' + PID).set(null)); 

                        }
                        catch (e) {
                        }
                            
                        }




                    }
                }
            } else {
                
                try{
                $firebaseArray(ref.child('Portfolio/produccion/' + PID).set(null)); 
                }
                catch (e) {
                        }
            }
        }
    }
    
    
});