var MapRef = require('./mapref');
var ResolveMapsProtocolByPlatform = require('./resolve.maps.protocol.by.platform');

angular.module('pf-ion-mapref', [])
.service('resolveMapsProtocol', ResolveMapsProtocolByPlatform)
.directive('pfIonMapref', function pfIonMapref (resolveMapsProtocol) {
  var directive = {
    restrict: 'A',
    scope: {
      latitude: '=',
      longitude: '='
    }
  };

  var supportedProtocols = [
    'http', // DEFAULT (http://maps.google.com)
    'geo', // Android handler
    'maps', // Apple maps app
    'comgooglemaps' // iOS Google Maps app
  ];

  // <a pf-ion-mapref latitude="" longitude="">Goto map</a>
  // <a pf-ion-mapref maps-protocol="googlemaps" latitude="" longitude="">Goto map</a>
  // var resolveMapsProtocol = resolveMapsProtocol;
  directive.link = function link (scope, element, attrs) {
    var mapProtocol = attrs.mapProtocol || resolveMapsProtocol.resolve(supportedProtocols);
    var href = MapRef.forCoordinates(mapProtocol, scope.latitude, scope.longitude);

    // For debugging...
    element.attr('map-protocol', mapProtocol);

    element.attr('href', href);
  };

  return directive;
});
