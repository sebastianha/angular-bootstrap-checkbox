'use strict';

angular.module('ui.checkbox', []).directive('checkbox', function() {
	return {
		scope: {},
		require: 'ngModel',
		restrict: 'E',
		replace: 'true',
		templateUrl: 'angular-bootstrap-checkbox-tpl.html',
		link: function(scope, elem, attrs, modelCtrl) {
			scope.size = 'default';
			// Default Button Styling
			scope.stylebtn = {};
			// Default Checkmark Styling
			scope.styleicon = {'width': '10px', 'position': 'relative', 'left': '-1px'};
			// FontAwesome Default Checkmark Styling
			scope.stylefaicon = {'width': '10px', 'position': 'relative', 'left': '-3px', 'top': '1px', 'font-size': '16px'};
			// If size is undefined, Checkbox has normal size (Bootstrap 'xs')
			if(attrs.large !== undefined) {
				scope.size = 'large';
				scope.stylebtn = {'padding-top': '2px', 'padding-bottom': '2px', 'height': '30px'};
				scope.styleicon = {'width': '8px', 'position': 'relative', 'left': '-5px', 'font-size': '17px'};
				scope.stylefaicon = {'width': '8px', 'position': 'relative', 'left': '-8px', 'top': '-1px', 'font-size': '25px'};
			}
			if(attrs.larger !== undefined) {
				scope.size = 'larger';
				scope.stylebtn = {'padding-top': '2px', 'padding-bottom': '2px', 'height': '34px'};
				scope.styleicon = {'width': '8px', 'position': 'relative', 'left': '-8px', 'font-size': '22px'};
				scope.stylefaicon = {'width': '8px', 'position': 'relative', 'left': '-11px', 'top': '-2px', 'font-size': '30px'};
			}
			if(attrs.largest !== undefined) {
				scope.size = 'largest';
				scope.stylebtn = {'padding-top': '2px', 'padding-bottom': '2px', 'height': '45px'};
				scope.styleicon = {'width': '11px', 'position': 'relative', 'left': '-11px', 'font-size': '30px'};
				scope.stylefaicon = {'width': '11px', 'position': 'relative', 'left': '-14px', 'top': '-2px', 'font-size': '40px'};
			}

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
});
