/*global angular firebase  */
angular.module('esqueleto')
    .controller('newtalentController', function ($scope, $routeParams, $route, $firebase, $firebaseObject, $firebaseArray) {
    'use strict';
    
    
    var uniqid = Date.now();
    var uploader = document.getElementById('uploader');

    $scope.HITHERE = function(){
        $scope.PLENGHT = $scope.talento.length + 1;
    }
    $scope.waitSave = 0;
    $scope.buttonMgs = 'Create';

    $scope.monitorWaitSave = function (n) {
        if (n == 0) {
            $scope.buttonMgs = 'Create';
            console.log("create project freely");
            $scope.$apply();
        } else {
            $scope.buttonMgs = 'Uploading (wait)';
            console.log("wait for creating a project");
            $scope.$apply();
        }
    };

    $scope.$watch('pro.Url', function() {
        delete $scope.errorMsg;
    });


    $scope.pro = {
        Addon : [],
        Visible : "Off",
        Featured : "No"
    }; 
    
    $scope.numAddons = 0;
        
    // Diferent Functions For newAddon
    $scope.newAddonImgVid = function(){
        $scope.numAddons = $scope.numAddons + 1;
        $scope.pro.Addon.push({
            Type : "imgvid",
            Order : $scope.numAddons
        });
    };  
    $scope.newAddonText = function(){
        $scope.numAddons = $scope.numAddons + 1;
        $scope.pro.Addon.push({
            Type : "text",
            Order : $scope.numAddons
        });
    }; 
    $scope.newAddonTwoc = function(){
        $scope.numAddons = $scope.numAddons + 1;
        $scope.pro.Addon.push({
            Type : "twoc",
            Order : $scope.numAddons
        });
    }; 
    $scope.newAddonQuote = function(){
        $scope.numAddons = $scope.numAddons + 1;
        $scope.pro.Addon.push({
            Type : "quote",
            Order : $scope.numAddons
        });
    };
    $scope.newAddonEmbed = function(){
        $scope.numAddons = $scope.numAddons + 1;
        $scope.pro.Addon.push({
            Type : "embed",
            Order : $scope.numAddons
        });
    };
        
        
    // Remove From Array; Fixed by Mon
    $scope.items = $scope.pro.Addon;
    $scope.deleteAddon = function (index, item) {
        console.log(item);
    //    console.log(index);
        $scope.numAddons = $scope.numAddons - 1;
        var Gillie = item.Order;
        for(var i in $scope.items){
                if($scope.items[i] != null){
                    if($scope.items[i].Order){
                        if($scope.items[i].Order > Gillie){
                            $scope.items[i].Order = $scope.items[i].Order - 1;
                        }
                    }
                }
            }
        $scope.items.splice(index, 1);
    } 
        
    // Upload Thumbnail
    $scope.uThumbnail = function (e) {
        $scope.waitSave += 1;
        $scope.monitorWaitSave($scope.waitSave);

        var file = e.target.files[0];
        var tipo = e.target.files[0].type;
        var storageRef = firebase.storage().ref('talento/' + uniqid + file.name)
        var task = storageRef.put(file);
        task.on('state_changed', function progress(snapshot) {
                
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
            
            },
            function error(err) {},
            function complete() {
            
                storageRef.getDownloadURL().then(function(url) {
                    $scope.waitSave = $scope.waitSave -1;
                    $scope.monitorWaitSave($scope.waitSave);
                    $scope.pro.Thumbnail = url;
                    document.getElementById("thumbie").src = url;
                    document.getElementById("thumbie").style.display = "block";
                });
                setTimeout(function(){}, 1000);
            }    
        ); 
    }


    $scope.uThumbnailTwo = function (e) {
        $scope.waitSave += 1;
        $scope.monitorWaitSave($scope.waitSave);

        var file = e.target.files[0];
        var tipo = e.target.files[0].type;
        var storageRef = firebase.storage().ref('talento/' + uniqid + file.name)
        var task = storageRef.put(file);
        task.on('state_changed', function progress(snapshot) {
                
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
            
            },
            function error(err) {},
            function complete() {
            
                storageRef.getDownloadURL().then(function(url) {
                    $scope.waitSave = $scope.waitSave -1;
                    $scope.monitorWaitSave($scope.waitSave);
                    $scope.pro.ThumbnailTwo = url;
                    document.getElementById("thumbieTwo").src = url;
                    document.getElementById("thumbieTwo").style.display = "block";
                });
                setTimeout(function(){}, 1000);
            }    
        ); 
    }

    $scope.uHeader = function (e) {
        $scope.waitSave += 1;
        $scope.monitorWaitSave($scope.waitSave);
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref('talento/' + uniqid + file.name)
        var task = storageRef.put(file);
        
        task.on('state_changed', function progress(snapshot) {    
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
            },
                    function error(err) {},
                    function complete() {
            
                storageRef.getDownloadURL().then(function(url) {
                    $scope.waitSave = $scope.waitSave - 1;
                    $scope.monitorWaitSave($scope.waitSave);
                    $scope.pro.Header = url;
                    document.getElementById("headie").src = url;
                    document.getElementById("headie").style.display = "block";
                });
                setTimeout(function(){}, 1000);
            }      
        );  
    }
    
    $scope.upAddonImgVid = function (e) {
        $scope.waitSave += 1;
        $scope.monitorWaitSave($scope.waitSave);
        var hollieid = 'hollie'+e.srcElement.name;
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref('talento/' + uniqid + file.name)
        var task = storageRef.put(file);
        var tipo = file.type;
        task.on('state_changed', function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
            },
            function error(err) {},
            function complete() {
                storageRef.getDownloadURL().then(function(url) {
                    $scope.waitSave = $scope.waitSave - 1;
                    $scope.monitorWaitSave($scope.waitSave);
                    $scope.items[e.srcElement.name].Src = url;
                    $scope.items[e.srcElement.name].Tipo = tipo;
                    document.getElementById(hollieid).src = url;
                    document.getElementById(hollieid).style.display = "block";
                });
                setTimeout(function(){}, 1000);
            }        
        ); 
    }
        
    var ref = firebase.database().ref();

    $scope.newP = function(){

        if (!$scope.pro.Url) {
            $scope.errorMsg = 'Please input a valid URL';
        } else {
            $scope.pro.Order = $scope.talento.length + 1;
            ref.child('Portfolio/talento/'+$scope.pro.Url).set($scope.pro).then(function(val) {
                location.href = '/ccctalento';
            });
        }
    };
        
        $scope.productDelete = function(e, item){

            var PID = e.srcElement.id;
            var POrder = item.Order;
            var POrderM = item.Order - 1;
            var POrderP = item.Order + 1;
            for(var i in $scope.talento){
                if($scope.talento[i] != null && typeof $scope.talento[i] === 'object'){
                    if($scope.talento[i].Order){
                        if($scope.talento[i].Order > POrder){
                            
                            var OID = $scope.talento[i].$id;
                            var RVAL = $scope.talento[i].Order;
                            var NVAL = RVAL - 1;
                            $firebaseArray(ref.child('Portfolio/talento/' + OID + '/Order').set(NVAL)); 

                        }
                    }
                }
            }
        }; 
    });