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

  // <a pf-ion-mapref latitude="" longitude="">Goto map</a>
  // <a pf-ion-mapref="googlemaps" latitude="" longitude="">Goto map</a>
  directive.link = function link (scope, element, attrs) {
    var mapProtocol = attrs.mapProtocol || MapRef.bestProtocol();
    var href = MapRef.forCoordinates(mapProtocol, scope.latitude, scope.longitude);

    // For debugging...
    element.attr('map-protocol', mapProtocol);

    element.attr('href', href);
  };

  return directive;
});
