'use strict';

angular.module('learningAngularApp')
  .directive('test', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the test directive');
      }
    };
  });
