/*global angular firebase  */
angular.module('esqueleto')
    .controller('homesettingsController', function ($scope, $routeParams, $route, $firebase, $firebaseObject, $firebaseArray) {
    'use strict';
    
    //Init Firebase    
    var ref = firebase.database().ref();
    //Var Required For Module
    $scope.home = $firebaseObject(ref.child('Portfolio/Home/'));
    //Helper
    $scope.homie = {
        Banner : []
    }; 
    $scope.newBanner = function(){
        $scope.homie.Banner.push({
            Type : "",
            Copy : ""
        });
    }; 
    //Fun
    $scope.items = $scope.homie.Banner;
    //Upload
    $scope.upBanner = function (e) {
        var bannie = 'bannie'+e.srcElement.name;
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref('banner/' + file.name)
        var task = storageRef.put(file);
        task.on('state_changed', function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
                    function error(err) {
            },
                    function complete() {

                storageRef.getDownloadURL().then(function(url) {
                    console.log(url);
                    $scope.items[e.srcElement.name].Src = url;
                    document.getElementById(bannie).src = url;
                    document.getElementById(bannie).style.display = "block";
                });


            }


        );




    }
 
        
    //Upload Previous
    $scope.upBannerEX = function (e) {
        
        console.log(e);
        console.log(e.target.id);
        
        var file = e.target.files[0];
        var aidi = e.target.id;
        
        var storageRef = firebase.storage().ref('banner/' + file.name);
        
        var task = storageRef.put(file);
        
        task.on('state_changed', function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
                    function error(err) {
            },
                    function complete() {

                    storageRef.getDownloadURL().then(function(url) {
                       
                        console.log(url);
                        
                    ref.child('Portfolio/Home/Banner/' + aidi + '/0/Src').set(url)
                        
                        
                        
                    });


            }


        );
        
        




    }
    
    
    $scope.deleteBanner = function (item) {
        console.log(item);
        var aidi = item.$id;
        console.log(aidi);
        
        ref.child('Portfolio/Home/Banner/' + aidi).set(null);
        
    }
    
//    var ref = firebase.database().ref();
//    
//
//$scope.newP = function(){
//		ref.child('Portfolio/Projects').push(
//            
//            
//            $scope.pro
//            
//  
//            
//        ); 
//	};
//    
//    

    
    $scope.tobannie = function(){
        console.log('why');
        $scope.homeSettings.$save()
		ref.child('Portfolio/Home/Banner').push(
            $scope.homie.Banner
        ); 
        setTimeout(function(){ 
            
            location.reload();
            
        }, 250);
	};
    
    
    
    
    
    
    
    
});