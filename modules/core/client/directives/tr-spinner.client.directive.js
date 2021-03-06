(function () {
  'use strict';

  angular
    .module('core')
    .directive('trSpinner', trSpinnerDirective);

  function trSpinnerDirective() {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {

        function generateSVGMarkup(size, square, stroke) {
          return '<svg class="spinner spinner-' + size + '" width="' + square + 'px" height="' + square + 'px" viewBox="0 0 ' + (square + 1) + ' ' + (square + 1) + '" xmlns="http://www.w3.org/2000/svg">' +
                 '  <circle class="spinner-path" fill="none" stroke-width="' + stroke + '" stroke-linecap="round" cx="' + ((square + 1) / 2) + '" cy="' + ((square + 1) / 2) + '" r="' + (((square + 1) / 2) - stroke) + '"></circle>' +
                 '</svg>';
        }

        function renderSVG() {
          var size = attrs.size || 'md',
              square,
              stroke;

          if (size === 'lg') {
            square = 85;
            stroke = 4;
          } else if (size === 'md') {
            square = 65;
            stroke = 3;
          } else if (size === 'sm') {
            square = 35;
            stroke = 2;
          } else if (size === 'xs') {
            square = 25;
            stroke = 1;
          }

          var svg = generateSVGMarkup(size, square, stroke);

          element.html(svg);
        }

        // Initialize svg
        renderSVG();

      }
    };
  }

}());
