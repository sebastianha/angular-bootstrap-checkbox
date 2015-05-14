'use strict';

angular.module('ez.checkbox', [])
.directive('ezCheckbox', [function() {
	return {
		require: 'ngModel',
		restrict: 'EA',
		replace: 'true',
		transclude: true,
		template: '<a class="ez-checkbox" ng-click="toggle()">' +
                '<i class="fa fa-lg" ng-class="{\'fa-check-square-o\': checked, \'fa-square-o\': !checked}"></i>' +
                '<span ng-transclude></span>' +
              '</a>',
    scope: {},
		link: function(scope, elem, attrs, modelCtrl) {
			var trueValue = true;
			var falseValue = false;

			if (attrs.hasOwnProperty('trueValue')) {
				trueValue = attrs.trueValue;
			}

      // invert truthyness if invert is defined
      if (attrs.hasOwnProperty('invert')) {
        falseValue = trueValue;
        trueValue = false;
      }

      modelCtrl.$render = function() {
        if (modelCtrl.$modelValue === trueValue) {
          scope.checked = true;
        } else {
          scope.checked = false;
        }
      };

      scope.toggle = function() {
        if (modelCtrl.$modelValue === falseValue) {
          modelCtrl.$setViewValue(trueValue);
        } else {
          modelCtrl.$setViewValue(falseValue);
        }

        modelCtrl.$render();
			};
		}
	};
}]);
