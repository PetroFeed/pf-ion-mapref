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
  }
};

module.exports = MapRef;
