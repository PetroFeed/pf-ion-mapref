(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./mapref":2}],2:[function(require,module,exports){
exports.forCoordinates = function forCoordinates (latitude, longitude) {
  var q = '?q=' + latitude + ',' + longitude;

  if (typeof ionic !== 'undefined') {
    if (ionic.Platform.isAndroid()) { return 'geo://' + q; }
    if (ionic.Platform.isIOS()) { return 'maps://' + q; }
  } else { console.warn('`ionic` not found!'); }

  return 'http://maps.google.com/' + q;
};

},{}]},{},[1]);
