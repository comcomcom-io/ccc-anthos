/*global angular */
angular.module('esqueleto')
    .factory('InfoProductos', function (DIR, $resource) {
        "use strict";
        return $resource(DIR.hostSelected + 'myAPI/:id', {id: "@_id"});
    });
angular.module('esqueleto')
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
angular.module('esqueleto')
  .filter('trustUrl', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
angular.module('esqueleto')
    .service('MetadataService', ['$window', function($window){
 var self = this;
 self.setMetaTags = function (tagData){
   $window.document.title = tagData.title;
 }; 
}]);