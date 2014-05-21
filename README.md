angular-bootstrap-checkbox
==========================

Bootstrap styled checkbox directive for AngularJS

### Description:

The standard checkboxes which use the input HTML element just don't look good in combination with Bootstrap.

Surprisingly, I could not find any nice looking, simple checkbox, so I built one. It is based on a button and Glyphicons which behaves like a normal checkbox.

The angular-bootstrap-checkbox is compatible to the use of the original AngularJS input[checkbox].

### Installation via Bower:

```
$ bower install angular-bootstrap-checkbox --save
```

### Usage:

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

See index.html for examples and how it looks.

### Testing:

Start web server e.g. via Python:
```
$ python -m SimpleHTTPServer 8000
```

Start Karma E2E tests (has to be installed globally before):
```
$ karma start
```

