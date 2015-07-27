var MapRef = require('./mapref');

angular.module('pf-ion-mapref', [])
.directive('pfIonMapref', function pfIonMapref () {
  var directive = {
    restrict: 'A',
    scope: { coordinates: '=pfIonMapref' }
  };

  directive.link = function link (scope, element) {
    var href = MapRef.forCoordinates(scope.coordinates);
    element.attr('href', href);
  };

  return directive;
});
