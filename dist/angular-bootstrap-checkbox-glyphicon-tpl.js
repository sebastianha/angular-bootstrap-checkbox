angular.module('ui.checkbox').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('angular-bootstrap-checkbox-tpl.html',
    "<button type=\"button\" ng-style=\"stylebtn\" class=\"btn btn-default\" ng-class=\"{'btn-xs': size==='default', 'btn-sm': size==='large', 'btn-lg': size==='largest'}\">\n" +
    "  <span ng-style=\"styleicon\" class=\"glyphicon\" ng-class=\"{'glyphicon-ok': checked===true}\"></span>\n" +
    "</button>"
  );

}]);
