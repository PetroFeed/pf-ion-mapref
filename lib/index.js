var MapRef = require('./mapref');

angular.module('pf-ion-mapref', [])
.directive('pfIonMapref', function pfIonMapref () {
  var directive = {
    restrict: 'A',
    scope: {
      latitude: '=',
      longitude: '='
    }
  };

  directive.link = function link (scope, element) {
    var href = MapRef.forCoordinates(scope.latitude, scope.longitude);
    element.attr('href', href);
  };

  return directive;
});
