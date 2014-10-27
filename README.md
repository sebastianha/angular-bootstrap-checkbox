angular-bootstrap-checkbox
==========================

A checkbox for AngularJS styled to fit the Twitter Bootstrap standard design

Screenshot:

![Screenshot](/checkbox.png?raw=true "Screenshot")

### Description:

The standard checkboxes which use the input HTML element just don't look good in combination with Bootstrap.

Surprisingly, I could not find any nice looking, simple checkbox, so I built one. It is based on a button and Glyphicons (or FontAwesome, if you prefer) which behaves like a normal checkbox.

The angular-bootstrap-checkbox is compatible to the use of the original AngularJS input[checkbox], with one minor change: while the original implementation allows an "uninitialized" or other then defined state of the model this one forces "false" or "ng-false-value" (not checked) when not set to "true" or "ng-true-value".

### Installation via Bower:

```
$ bower install angular-bootstrap-checkbox --save
```

### Usage:

Include the dist files (be sure to choose **only one (1)** of the compiled template files).

If you don't use glyphicons or FontAwesome and instead want to create your own template, see the existing html templates and directive (in /src) and the Gruntfile.js for examples.

Add "ui.checkbox" to your modules list. Then you can use it like AngularJS input[checkbox]:

```
<checkbox
    ng-model="checkboxModel"
    name="custom-name"              (Optional)
    ng-true-value="The Truth"       (Optional)
    ng-false-value="The Untruth"    (Optional)
    ng-change="onChange()"          (Optional)
></checkbox>
```

Additionally you can set the size:

```
<checkbox ...></checkbox>            (Normal size, corresponds to 'btn-xs')
<checkbox class="large" ...></checkbox>      (Large, corresponds to 'btn-sm')
<checkbox class="larger" ...></checkbox>     (Larger, corresponds to Button default size)
<checkbox class="largest" ...></checkbox>    (Largest, corresponds to 'btn-lg')
```

###Configure

By default, glyphicon icon is used but you can customize the classes within ui-checkbox through the uiCheckboxConfig constant. You can alter the constant globally in your apps boot phase or within a controller and pass the options to the checkbox directive as a parameter.

```
//controller
$scope.customConfig = {
	iconClass: 'fa fa-check',
	buttonClass: 'btn btn-default btn-success'
};
```

```
<span checkbox="customConfig" ng-model="form.ok"></span>
```


![Screenshot](/sizes.png?raw=true "Screenshot Sizes")

And also style the checkboxes like Bootstrap buttons:

```
<checkbox class="btn-primary"></checkbox>    (Looks like primary button)
<checkbox class="btn-success"></checkbox>    (Looks like success button)
<checkbox class="btn-info"></checkbox>       (Looks like info button)
<checkbox class="btn-warning"></checkbox>    (Looks like warning button)
<checkbox class="btn-danger"></checkbox>     (Looks like danger button)
```

![Screenshot](/styles.png?raw=true "Screenshot Styles")

Invert selection of checkbox
```
Show Item
<checkbox ng-model="data.isHidden" invert="true"></checkbox>
```

See index.html and app.js for examples and how it works.

### Testing:

Start web server e.g. via Python:
```
$ python -m SimpleHTTPServer 8000
```

Start Karma E2E tests (has to be installed globally before):
```
$ karma start
```

### License

Copyright (c) 2014 Sebastian Hammerl, Getslash GmbH

Licensed under the MIT License
