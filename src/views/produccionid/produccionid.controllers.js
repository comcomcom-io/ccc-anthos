/*global angular firebase  */
angular.module('esqueleto')
    .controller('produccionidController', function ($scope, $rootScope, $routeParams, $route, $firebaseObject, $firebaseArray, $sanitize, $http, $sce, MetadataService) {
    'use strict';
    
    var ref = firebase.database().ref();
    
    $scope.id = $routeParams.id;
    
    
    $scope.theproject = $firebaseObject(ref.child('Portfolio/produccion/'+$scope.id));

     
    $scope.Addoniess = $firebaseArray(ref.child('Portfolio/produccion/' + $scope.id + '/Addon'));


    
     $scope.theproject.$loaded().then(function(data) {
        // Store into service, SERVICE CALL
       MetadataService.setMetaTags({
    //    title: 'In The Park — ' + $scope.theproject.Title,
        title: 'In The Park',
       description: $scope.theproject.Description,
       keywords: $scope.theproject.Metatags ? $scope.theproject.Metatags : $scope.theproject.Tags 
       //
    });
        window.prerenderReady = true;
        console.log(window.prerenderReady);
        console.log($rootScope.metatags);
        $rootScope.metatags.description = $scope.theproject.DescriptionE + ' ' +  $scope.theproject.Description
        // DO WHATEVER
    })
    

});