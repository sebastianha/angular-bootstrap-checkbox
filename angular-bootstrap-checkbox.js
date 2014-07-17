"use strict";

angular.module("ui.checkbox", []).directive("checkbox", function() {
    return {
        scope: {
            checkboxLabel:"@", // One way binding so we can bind expressions
            checkboxClass:"@"  // css classes for the btn
        },
        require: "ngModel",
        restrict: "E",
        replace: "true",
        template: "<label><div type=\"button\" ng-style=\"stylebtn\" class=\"btn btn-default {{checkboxClass}} \" ng-class=\"{'btn-xs': size==='default', 'btn-sm': size==='large', 'btn-lg': size==='largest'}\">" +
            "<span ng-style=\"styleicon\" class=\"glyphicon\" ng-class=\"{'glyphicon-ok': checked===true}\"></span>" +
            "</div>{{ checkboxLabel }}</label>",


        link: function(scope, elem, attrs, modelCtrl) {
            scope.size = "default";
            // Default Button Styling
            scope.stylebtn = {};
            // Default Checkmark Styling
            scope.styleicon = {"width": "10px", "left": "-1px"};
            // If size is undefined, Checkbox has normal size (Bootstrap 'xs')
            if(attrs.large !== undefined) {
                scope.size = "large";
                scope.stylebtn = {"padding-top": "2px", "padding-bottom": "2px", "height": "30px"};
                scope.styleicon = {"width": "8px", "left": "-5px", "font-size": "17px"};
            } else if(attrs.larger !== undefined) {
                scope.size = "larger";
                scope.stylebtn = {"padding-top": "2px", "padding-bottom": "2px", "height": "34px"};
                scope.styleicon = {"width": "8px", "left": "-8px", "font-size": "22px"};
            } else if(attrs.largest !== undefined) {
                scope.size = "largest";
                scope.stylebtn = {"padding-top": "2px", "padding-bottom": "2px", "height": "45px"};
                scope.styleicon = {"width": "11px", "left": "-11px", "font-size": "30px"};
            } else {
                // normal style
                scope.stylebtn = { "margin-top":"-2px", "margin-right":"5px", "height": "20px", "width":"20px"};
                scope.styleicon = { "font-size": "11px", "height": "20px", "width":"20px", "left":"-6px", "top":"2px"};
            }

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