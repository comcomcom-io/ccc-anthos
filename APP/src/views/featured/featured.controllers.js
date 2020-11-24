/*global angular firebase  */
angular.module('esqueleto')
    .controller('featuredController', function ($scope, $firebaseObject, $firebaseArray) {
    'use strict';
    
    $scope.getProjects().then(function(snap){
        $scope.mason = function(){
            console.log('StartMason')
            setTimeout(function(){ 
                var elem = document.querySelector('.grid');
                var msnry = new Masonry( elem, {
                    // options
                    itemSelector: '.thumbnail',
                    columnWidth: '.grid-sizer',
                    percentPosition: true
                });

                // element argument can be a selector string
                //   for an individual element
                var msnry = new Masonry( '.grid', {
                    // options
                });
                
            }, 1000);
        }
    });    
});