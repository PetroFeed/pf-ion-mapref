
var protocolToUrl = function(protocol) {
  if(protocol === 'http') {
    return 'http://maps.google.com/';
  } else {
    return protocol + '://';
  }
};

var MapRef = {
  forCoordinates: function forCoordinates (mapProtocol, latitude, longitude) {
    var q = '?q=' + latitude + ',' + longitude;

    return protocolToUrl(mapProtocol) + q;
  },

  resolveMapsProtocolByPlatform: function resolveMapsProtocolByPlatform() {
    if (typeof ionic !== 'undefined') {
      if (ionic.Platform.isAndroid()) { return 'geo'; }
      if (ionic.Platform.isIOS()) { return 'maps'; }
    } else {
      console.warn('`ionic` not found!');
    }

    return 'http';
  }
};

module.exports = MapRef;
