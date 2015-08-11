var supportedProtocols = [
  'http', // DEFAULT (http://maps.google.com)
  'geo', // Android handler
  'maps', // Apple maps app
  'comgooglemaps' // iOS Google Maps app
];

var protocolToUrl = function(protocol) {
  if(protocol == 'http') {
    return 'http://maps.google.com/';
  } else {
    return protocol + '://';
  }
};

var MapRef = {
  bestProtocol: function bestProtocol() {
    return DefaultProtocolService.bestProtocol(supportedProtocols);
  },

  forCoordinates: function forCoordinates (mapProtocol, latitude, longitude) {
    var q = '?q=' + latitude + ',' + longitude;

    return protocolToUrl(mapProtocol) + q;
  },

};

module.exports = MapRef;
