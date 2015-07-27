# Ion-MapRef

Open in Maps href

## Installation

```bash
bower install pf-ion-mapref
```

## Usage

```javascript
angular.module('MyModule', ['pf-ion-mapref']);
```

```html
<a pf-ion-mapref="51.053236,-114.095222" target="_blank">Open in Maps</a>
```
Will render your `href` set according to the platform you're on:
* iOS: `maps://…`
* Android: `geo://…`
* Otherwise: `http://maps.google.com/…`

### Heads Up!

You'll need to add those URLs to angular's whitelist:

```javascript
app.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^(maps|geo):/);
}]);
```

# License [![Creative Commons License](http://i.creativecommons.org/l/by/4.0/80x15.png)](http://creativecommons.org/licenses/by/4.0/)
Creative Commons Attribution 4.0 International

---

Proudly brought to you by [PetroFeed](http://PetroFeed.com).

![Pedro](https://www.petrofeed.com/img/company/pedro.png)
