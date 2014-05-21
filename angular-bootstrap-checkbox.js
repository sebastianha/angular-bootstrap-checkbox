"use strict";

angular.module("ui.checkbox", []).directive("checkbox", function() {
	return {
		scope: {},
		require: "ngModel",
		restrict: "E",
		replace: "true",
		template: "<button type=\"button\" class=\"btn btn-default btn-xs\">" +
			"<span style=\"width:10px;left:-1px;\" class=\"glyphicon\" ng-class=\"{'glyphicon-ok': checked===true}\"></span>" +
			"</button>",
		link: function(scope, elem, attrs, modelCtrl) {
			var trueValue = true;
			var falseValue = false;

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
			elem.bind("click", function() {
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
});