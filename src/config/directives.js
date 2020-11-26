/*global angular $ */
angular.module('esqueleto')
    .directive('fixedToBody', function ($rootScope) {
        'use strict';
        return {
            link: function (scope, element, attrs) {
                var $body = $('body');
                var $footer = $('footer');
                $footer.append($(element));
                $body.css({
                    marginBottom: 40
                });
                $rootScope.$on('$routeChangeStart', function (e, next) {
                    $(element).remove();
                    $body.css({
                        marginBottom: 0
                    });
                });
            }
        };
    })
    .directive('numbersOnly', function () {
        'use strict';
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function (inputValue) {
                    if (inputValue == undefined) {
                        return '';
                    }
                    var transformedInput = inputValue.replace(/[^0-9]/g, '');
                    if (transformedInput!= inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }
                    return transformedInput;
                });
            }
        };
    })
    .directive('forceInt', function () {
        'use strict';
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, controller) {
                controller.$parsers.push(function (value) {
                    if (typeof value === 'string') {
                        value = parseInt(value, 10);
                        controller.$setViewValue(value);
                        controller.$render();
                    }
                    return value;
                });
            }
        };
    })
    .directive('wmBlock', function ($parse) {
        'use strict';
        return {
            scope: {
                wmBlockLength: '='
            },
            link: function (scope, elm, attrs) {
                elm.bind('keypress', function (e) {
                    if (elm[0].value.length > scope.wmBlockLength) {
                        e.preventDefault();
                        return false;
                    }
                });
            }
        };
    })
    .directive('customOnChange', function() {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          var onChangeFunc = scope.$eval(attrs.customOnChange);
          element.bind('change', onChangeFunc);
        }
      };
    });