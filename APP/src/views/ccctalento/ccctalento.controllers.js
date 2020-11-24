/*global angular firebase  */
angular.module('esqueleto')
    .controller('ccctalentoController', function ($scope, $firebaseObject, $firebaseArray, $http) {
    'use strict';
    
    
    
    var ref = firebase.database().ref();
    
    $scope.talento = $firebaseArray(ref.child('Portfolio/talento/'));

    // on and off
    $scope.visible = function(i){
      
    $scope.ppp = $scope.talento[i].$id;
    $scope.vvv = $scope.talento[i].Visible;
      
    $firebaseObject(ref.child('Portfolio/talento/' + $scope.ppp + '/Visible').set($scope.vvv));  
        
  }
    
    
    
    $scope.getPLenght = function(e, item) {
        
//Lenght
//        console.log($scope.talento.length);
//Retrieve Element
//        console.log(e);
//ID To Set
        var PID = e.srcElement.id;
        console.log(PID);
//Position in Repeat
        var PORDER = $scope.talento.indexOf(item);
        console.log(PORDER);
//Get Order From Firebase
        $scope.FORDER = $firebaseArray(ref.child('Portfolio/talento/'));
        console.log($scope.FORDER);
        
    }
    
    
    $scope.upNum = function(e, item){
        
        var PID = e.srcElement.id;
        
        var POrder = item.Order;
        
        var POrderM = item.Order - 1;
        
        var POrderP = item.Order + 1;
        
		for(var i in $scope.talento){
			if($scope.talento[i] != null){
				if($scope.talento[i].Order){
                    if($scope.talento[i].Order == POrderM){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.talento[i].$id;
                            $firebaseArray(ref.child('Portfolio/talento/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/talento/' + PID + '/Order').set(POrderM)); 
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
        
		for(var i in $scope.talento){
			if($scope.talento[i] != null){
				if($scope.talento[i].Order){
                    if($scope.talento[i].Order == POrderP){
                        
                        
                        
                        
                        try {
                            
                            var OID = $scope.talento[i].$id;
                            $firebaseArray(ref.child('Portfolio/talento/' + OID + '/Order').set(POrder)); 
                        
                            $scope.rndie();
                            
                        }
                        catch (e) {
                        }
                        finally {
                            $firebaseArray(ref.child('Portfolio/talento/' + PID + '/Order').set(POrderP)); 
                        }
                        
                        
                        
                        
                    }
				}
			}
		}
	}
    
    $scope.toggleVisible = function(item) {
        var OID = item.$id;
        for(var i in $scope.talento){
			if($scope.talento[i] != null && typeof $scope.talento[i] === 'object'){
				if($scope.talento[i].$id){
                    if($scope.talento[i].$id === item.$id){
                        if($scope.talento[i].Visible === 'On'){
                            try {
                                var OID = $scope.talento[i].$id;
                                $firebaseArray(ref.child('Portfolio/talento/' + OID + '/Visible').set('Off')); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.talento[i].$id;
                                $firebaseArray(ref.child('Portfolio/talento/' + OID + '/Visible').set('On')); 
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
        for(var i in $scope.talento){
			if($scope.talento[i] != null && typeof $scope.talento[i] === 'object'){
				if($scope.talento[i].$id){
                    if($scope.talento[i].$id === item.$id){
                        if($scope.talento[i].Featured === 'Yes'){
                            try {
                                var OID = $scope.talento[i].$id;
                                $firebaseArray(ref.child('Portfolio/talento/' + OID + '/Featured').set('No')); 
                            }
                            catch (e) {
                            }
                        } else {
                            try {
                                var OID = $scope.talento[i].$id;
                                $firebaseArray(ref.child('Portfolio/talento/' + OID + '/Featured').set('Yes')); 
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

        for(var i in $scope.talento){
            if($scope.talento[i] != null && typeof $scope.talento[i] === 'object'){
                if($scope.talento[i].Order){
                    if($scope.talento[i].Order > POrder){




                        try {

                            var OID = $scope.talento[i].$id;
                            var RVAL = $scope.talento[i].Order;
                            var NVAL = RVAL - 1;
                            console.log(NVAL);
                            $firebaseArray(ref.child('Portfolio/talento/' + OID + '/Order').set(NVAL)); 

                        }
                        catch (e) {
                        }
                        finally {
                            
                            try {

                            $firebaseArray(ref.child('Portfolio/talento/' + PID).set(null)); 

                        }
                        catch (e) {
                        }
                            
                        }




                    }
                }
            } else {
                
                try{
                $firebaseArray(ref.child('Portfolio/talento/' + PID).set(null)); 
                }
                catch (e) {
                        }
            }
        }
    }
    
    
});