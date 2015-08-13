var ResolveMapsProtocolByPlatform = function ResolveMapsProtocolByPlatform () {
  this.resolve = function resolve () {
    if (typeof ionic !== 'undefined') {
      if (ionic.Platform.isAndroid()) { return 'geo'; }
      if (ionic.Platform.isIOS()) { return 'maps'; }
    } else {
      console.warn('`ionic` not found!');
    }

    return 'http';
  }
}

module.exports = ResolveMapsProtocolByPlatform;
