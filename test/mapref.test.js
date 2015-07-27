var test = require('tape');
var MapRef = require('../lib/mapref');

test('MapRef.forCoordinates when ionic is not found', function (t) {
  var oWarn = console.warn;
  console.warn = function warn (message) {
    t.equal(message, '`ionic` not found!');
    t.end(); console.warn = oWarn;
  };

  t.equal(MapRef.forCoordinates(10, 20), 'http://maps.google.com/?q=10,20');
});

test('MapRef.forCoordinates on Android', function (t) {
  ionic = { Platform: {
    isAndroid: function () { return true; },
    isIOS: function () { return false; }
  }};

  t.equal(MapRef.forCoordinates(10, 20), 'geo://?q=10,20');
  t.end();
});

test('MapRef.forCoordinates on iOS', function (t) {
  ionic = { Platform: {
    isAndroid: function () { return false; },
    isIOS: function () { return true; }
  }};

  t.equal(MapRef.forCoordinates(10, 20), 'maps://?q=10,20');
  t.end();
});

test('MapRef.forCoordinates otherwise', function (t) {
  ionic = { Platform: {
    isAndroid: function () { return false; },
    isIOS: function () { return false; }
  }};

  t.equal(MapRef.forCoordinates(10, 20), 'http://maps.google.com/?q=10,20');
  t.end();
});
