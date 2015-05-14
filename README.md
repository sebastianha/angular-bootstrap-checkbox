ez-checkbox
===========

A better checkbox for AngularJS.

##Features
- Inverse selection (show check on falsy value)
- Non boolean true/false values
- Easily transclude a clickable label

##Installation
- run `bower install ez-checkbox`
- add `ez.checkbox` to your applications list of modules
- add sources to your html
```html
	<link href="bower_components/ez-checkbox/dist/ez-checkbox.min.css" rel="stylesheet"/>
	<script src="bower_components/ez-checkbox/dist/ez-checkbox.min.js"></script>
```

##Requirements
Font Awesome.

##Demo
See <a href="https://rawgit.com/jdewit/ez-checkbox/master/index.html">Live Demo</a>

##Usage
```html
<ez-checkbox ng-model="form.isCool">This is cool</ez-checkbox>
```

##Options
Add the following attributes to customize behaviour

- `invert="true"` - Show check on false value instead of true
- `true-value="this-is-cool"` - Will display check in checkbox if ng-model value === 'this-is-cool'

##Acknowledgements
Thanks to <a href="https://github.com/sebastianha/angular-bootstrap-checkbox">angular-bootstrap-checkbox</a>.
