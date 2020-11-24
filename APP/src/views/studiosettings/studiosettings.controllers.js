/*global angular firebase  */
angular.module('esqueleto')
    .controller('studiosettingsController', function ($scope, $routeParams, $route, $firebase, $firebaseObject, $firebaseArray) {
    'use strict';
    
    var uniqid = Date.now();
    
    //Worker for Model
    $scope.studioSettingsFake = {
        Social : [],
    }; 
    $scope.studioSettings = {
        Social : [],
    };
    
    // Init Firebase
    var ref = firebase.database().ref();
    
    // Fireb VAR
    $scope.studioSettings = $firebaseObject(ref.child('Portfolio/Studio'));
    // Fireb VAR
    $scope.sosocial = $firebaseArray(ref.child('Portfolio/Studio/Social'));
    // Fireb VAR
    $scope.SGrid = $firebaseArray(ref.child('Portfolio/Studio/Grid'));
    
    // Upload MainImg
    $scope.uMain = function (e) {

        uploader.className= "on";
        
        var file = e.target.files[0];

        var storageRef = firebase.storage().ref('studio/' + file.name)
        
        var task = storageRef.put(file);

        task.on('state_changed', function progress(snapshot) {
            
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            
            uploader.value = percentage;

            },
                
                function error(err) {
            
            },
                
                function complete() {

                    storageRef.getDownloadURL().then(function(url) {
                        
                        console.log(url);
                        
                        ref.child('Portfolio/Studio/Header').set(url); 
                        
                        document.getElementById("headie").src = url;
                        
                        document.getElementById("headie").style.display = "block";
                });

                    setTimeout(function(){      
                        
                        uploader.className= "off";
                        
                    }, 1000);
            }
        );
    }
    
    // New Url
    $scope.newUrl = function(){
        $firebaseArray(ref.child('Portfolio/Studio/Social/').push(
            {
                Dat : 'As'
            }
        )); 
    }; 
    
    $scope.newImgG = function(){
        $firebaseArray(ref.child('Portfolio/Studio/Grid').push(
            {
                Dat : 'As',
                Ratio : 'l'
            }
        )); 
    }; 
    
        
    $scope.uGridImg = function (e) {

        var THEID = e.srcElement.id;
        
        var file = e.target.files[0];

        var storageRef = firebase.storage().ref('studio/' + uniqid + file.name)
        
        var task = storageRef.put(file);

        task.on('state_changed', function progress(snapshot) {
            
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            

            },
                
                function error(err) {
            
            },
                
                function complete() {

                    storageRef.getDownloadURL().then(function(url) {
                        
                        console.log(url);
 ref.child('Portfolio/Studio/Grid/'+ THEID +'/Src').set(url); 
                        
                });

                    setTimeout(function(){      
                        
                        console.log('end');
                        
                    }, 1000);
            }
        );
    }
    
    // Bottom Layout
    $scope.uLayoutL = function (e) {

        uploader.className= "on";
        
        var file = e.target.files[0];

        var storageRef = firebase.storage().ref('studio/' + file.name)
        
        var task = storageRef.put(file);

        task.on('state_changed', function progress(snapshot) {
            
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            
            uploader.value = percentage;

            },
                
                function error(err) {
            
            },
                
                function complete() {

                    storageRef.getDownloadURL().then(function(url) {
                        
                        console.log(url);
                        
                        ref.child('Portfolio/Studio/Layout/Left').set(url); 
                        
                        document.getElementById("LayieL").src = url;
                        
                        document.getElementById("LayieL").style.display = "block";
                });

                    setTimeout(function(){      
                        
                        uploader.className= "off";
                        
                    }, 1000);
            }
        );
    }
    $scope.uLayoutR = function (e) {

        uploader.className= "on";
        
        var file = e.target.files[0];

        var storageRef = firebase.storage().ref('studio/' + file.name)
        
        var task = storageRef.put(file);

        task.on('state_changed', function progress(snapshot) {
            
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            
            uploader.value = percentage;

            },
                
                function error(err) {
            
            },
                
                function complete() {

                    storageRef.getDownloadURL().then(function(url) {
                        
                        console.log(url);
                        
                        ref.child('Portfolio/Studio/Layout/Right').set(url); 
                        
                        document.getElementById("RigieR").src = url;
                        
                        document.getElementById("RigieR").style.display = "block";
                });

                    setTimeout(function(){      
                        
                        uploader.className= "off";
                        
                    }, 1000);
            }
        );
    }
    $scope.uLayoutRR = function (e) {

        uploader.className= "on";
        
        var file = e.target.files[0];

        var storageRef = firebase.storage().ref('studio/' + file.name)
        
        var task = storageRef.put(file);

        task.on('state_changed', function progress(snapshot) {
            
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            
            uploader.value = percentage;

            },
                
                function error(err) {
            
            },
                
                function complete() {

                    storageRef.getDownloadURL().then(function(url) {
                        
                        console.log(url);
                        
                        ref.child('Portfolio/Studio/Layout/RightR').set(url); 
                        
                        document.getElementById("RigieRR").src = url;
                        
                        document.getElementById("RigieRR").style.display = "block";
                });

                    setTimeout(function(){      
                        
                        uploader.className= "off";
                        
                    }, 1000);
            }
        );
    }
    
    $scope.DelSoc = function (item) {
        console.log(item.$id);
        var SID = item.$id;
                                    $firebaseArray(ref.child('Portfolio/Studio/Social/' + SID).set(null)); 

    }
    $scope.DelSG = function (item) {
        console.log(item.$id);
        var SID = item.$id;
                                    $firebaseArray(ref.child('Portfolio/Studio/Grid/' + SID).set(null)); 

    }
    
    // Save Url
    $scope.saveUrl = function () {
        
        
        $scope.studioSettings.$save();
        console.log($scope.studioSettingsFake.Social);
        
        
//        if ($scope.studioSettingsFake.Social == 'null') {
            ref.child('Portfolio/Studio/Social').push(angular.fromJson(angular.toJson($scope.studioSettingsFake.Social[0])))
            
//        }
            
        setTimeout(function(){ 
            
            location.reload();
            
        }, 250);
        
            
	}
    
    
    
});