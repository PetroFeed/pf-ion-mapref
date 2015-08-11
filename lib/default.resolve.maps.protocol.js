module.exports = function DefaultResolveMapsProtocol (_) {
    if (typeof ionic !== 'undefined') {
      if (ionic.Platform.isAndroid()) { return 'geo'; }
      if (ionic.Platform.isIOS()) { return 'maps'; }
    } else {
      console.warn('`ionic` not found!');
    }

    return 'http';
  }
}
