var test = require('tape');
var MapRef = require('../lib/mapref');

test('MapRef.forCoordinates expands http protocol to Google Maps', function (t) {
  t.equal(MapRef.forCoordinates('http', 10, 20), 'http://maps.google.com/?q=10,20');
  t.end();
});

test('MapRef.forCoordinates adds :// to other protocols', function (t) {
  t.equal(MapRef.forCoordinates('gopher', 10, 20), 'gopher://?q=10,20');
  t.end();
});

test('MapRef.resolveMapsProtocolByPlatform when ionic is not found', function (t) {
  var oWarn = console.warn;
  console.warn = function warn (message) {
    t.equal(message, '`ionic` not found!');
    t.end(); console.warn = oWarn;
  };

  t.equal(MapRef.resolveMapsProtocolByPlatform(), 'http');
});

test('MapRef.resolveMapsProtocolByPlatform on Android', function (t) {
  ionic = { Platform: {
    isAndroid: function () { return true; },
    isIOS: function () { return false; }
  }};

  t.equal(MapRef.resolveMapsProtocolByPlatform(), 'geo');
  t.end();
});

test('MapRef.resolveMapsProtocolByPlatform on iOS', function (t) {
  ionic = { Platform: {
    isAndroid: function () { return false; },
    isIOS: function () { return true; }
  }};

  t.equal(MapRef.resolveMapsProtocolByPlatform(), 'maps');
  t.end();
});

test('MapRef.resolveMapsProtocolByPlatform otherwise', function (t) {
  ionic = { Platform: {
    isAndroid: function () { return false; },
    isIOS: function () { return false; }
  }};

  t.equal(MapRef.resolveMapsProtocolByPlatform(), 'http');
  t.end();
});
