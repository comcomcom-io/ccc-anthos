/*global angular firebase  */
angular.module('esqueleto')
    .controller('graciasController', function ($scope,MetadataService) {
    'use strict';

    if ($scope.realan == 'eng') {
        MetadataService.setMetaTags({
           title: 'In The Park'
        });
    } else {
        MetadataService.setMetaTags({
           title: 'In The Park'
        });
    }
    
        
    window.onload = function() {
        
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
        
        }, 1500);
        
    };
    
    
    $scope.mason = function(){
        console.log('StartMason')
         window.prerenderReady = true;
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