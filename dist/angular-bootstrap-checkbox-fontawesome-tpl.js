angular.module('ui.checkbox').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('angular-bootstrap-checkbox-tpl.html',
    "<button type=\"button\" ng-style=\"stylebtn\" class=\"btn btn-default ui-checkbox\" ng-class=\"{'btn-xs': size==='default', 'btn-sm': size==='large', 'btn-lg': size==='largest'}\">\n" +
    "  <i ng-style=\"stylefaicon\" class=\"fa\" ng-class=\"{'fa-check': checked===true}\"></i>\n" +
    "</button>\n"
  );

}]);
