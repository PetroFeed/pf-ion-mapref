exports.forCoordinates = function forCoordinates (latitude, longitude) {
  var q = '?q=' + latitude + ',' + longitude;

  if (typeof ionic !== 'undefined') {
    if (ionic.Platform.isAndroid()) { return 'geo://' + q; }
    if (ionic.Platform.isIOS()) { return 'maps://' + q; }
  } else { console.warn('`ionic` not found!'); }

  return 'http://maps.google.com/' + q;
};
