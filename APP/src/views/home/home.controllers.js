/*global angular firebase  */
angular.module('esqueleto')
    .controller('homeController', function ($scope, $firebaseObject, $firebaseArray,MetadataService) {
    'use strict';

    
    MetadataService.setMetaTags({
       title: 'In The Park'
    });
});