'use strict';

angular.module('ui.checkbox', [])
.constant('uiCheckboxConfig', {
	iconClass: 'glyphicon glyphicon-ok',
	buttonClass: 'btn btn-default btn-xs',
})
.directive('checkbox', ['uiCheckboxConfig', function(uiCheckboxConfig) {
	return {
		scope: {
			config: '=?checkbox'
		},
		require: 'ngModel',
		restrict: 'EA',
		replace: 'true',
		template: '<a class="ui-checkbox" ng-class="options.buttonClass"><i ng-show="checked" ng-class="options.iconClass"></i></a>',
		link: function(scope, elem, attrs, modelCtrl) {

			scope.options = angular.extend({}, uiCheckboxConfig, scope.config);

			var trueValue = attrs.invert ? false : true;
			var falseValue = attrs.invert ? true : false;

			// If defined set true value
			if(attrs.ngTrueValue !== undefined) {
				trueValue = attrs.ngTrueValue;
			}
			// If defined set false value
			if(attrs.ngFalseValue !== undefined) {
				falseValue = attrs.ngFalseValue;
			}

			// Check if name attribute is set and if so add it to the DOM element
			if(scope.name !== undefined) {
				elem.name = scope.name;
			}

			// Update element when model changes
			scope.$watch(function() {
				if(modelCtrl.$modelValue === trueValue || modelCtrl.$modelValue === true) {
					modelCtrl.$setViewValue(trueValue);
				} else {
					modelCtrl.$setViewValue(falseValue);
				}
				return modelCtrl.$modelValue;
			}, function(newVal, oldVal) {
				scope.checked = modelCtrl.$modelValue === trueValue;
			}, true);

			// On click swap value and trigger onChange function
			elem.bind('click', function() {
				scope.$apply(function() {
					if(modelCtrl.$modelValue === falseValue) {
						modelCtrl.$setViewValue(trueValue);
					} else {
						modelCtrl.$setViewValue(falseValue);
					}
				});
			});
		}
	};
}]);
