"use strict";

describe("Checkbutton Tests", function() {
	it("Minimal Example", function() {
		browser().navigateTo("index.html");

		// Check if the checkbox has been replaced with template
		expect(element("#checkbox0").attr("class")).toBe("btn btn-default btn-xs ng-isolate-scope ng-valid ng-dirty");


		// Check if the checkbox is unchecked
		expect(element("#checkbox0 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel0").text()).toBe("false");


		// Click checkbox to be checked
		element("#checkbox0").click();
		expect(element("#checkbox0 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel0").text()).toBe("true");

		// Click the checkbox to be unchecked
		element("#checkbox0").click();
		expect(element("#checkbox0 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel0").text()).toBe("false");


		// Click external trigger for true
		element("#checkboxButton0true").click();
		expect(element("#checkbox0 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel0").text()).toBe("true");

		// Click external trigger for false
		element("#checkboxButton0false").click();
		expect(element("#checkbox0 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel0").text()).toBe("false");
	});

	it("Example with Custom Name", function() {
		browser().navigateTo("index.html");

		// Check if the checkbox has been replaced with template
		expect(element("#checkbox1").attr("class")).toBe("btn btn-default btn-xs ng-isolate-scope ng-valid ng-dirty");


		// Check if the name is set correctly
		expect(element("#checkbox1").attr("name")).toBe("custom-name");


		// Check if the checkbox is unchecked
		expect(element("#checkbox1 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel1").text()).toBe("false");


		// Click checkbox to be checked
		element("#checkbox1").click();
		expect(element("#checkbox1 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel1").text()).toBe("true");

		// Click the checkbox to be unchecked
		element("#checkbox1").click();
		expect(element("#checkbox1 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel1").text()).toBe("false");


		// Click external trigger for true
		element("#checkboxButton1true").click();
		expect(element("#checkbox1 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel1").text()).toBe("true");

		// Click external trigger for false
		element("#checkboxButton1false").click();
		expect(element("#checkbox1 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel1").text()).toBe("false");
	});

	it("Example with Custom True Value", function() {
		browser().navigateTo("index.html");

		// Check if the checkbox has been replaced with template
		expect(element("#checkbox2").attr("class")).toBe("btn btn-default btn-xs ng-isolate-scope ng-valid ng-dirty");


		// Check if the checkbox is unchecked
		expect(element("#checkbox2 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel2").text()).toBe("false");


		// Click checkbox to be checked
		element("#checkbox2").click();
		expect(element("#checkbox2 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel2").text()).toBe("The Truth");

		// Click the checkbox to be unchecked
		element("#checkbox2").click();
		expect(element("#checkbox2 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel2").text()).toBe("false");


		// Click external trigger for true
		element("#checkboxButton2true").click();
		expect(element("#checkbox2 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel2").text()).toBe("The Truth");

		// Click external trigger for false
		element("#checkboxButton2false").click();
		expect(element("#checkbox2 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel2").text()).toBe("false");

		// Click external trigger for truth
		element("#checkboxButton2truth").click();
		expect(element("#checkbox2 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel2").text()).toBe("The Truth");
	});

	it("Example with Custom False Value", function() {
		browser().navigateTo("index.html");

		// Check if the checkbox has been replaced with template
		expect(element("#checkbox3").attr("class")).toBe("btn btn-default btn-xs ng-isolate-scope ng-valid ng-dirty");


		// Check if the checkbox is unchecked
		expect(element("#checkbox3 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel3").text()).toBe("The Untruth");


		// Click checkbox to be checked
		element("#checkbox3").click();
		expect(element("#checkbox3 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel3").text()).toBe("true");

		// Click the checkbox to be unchecked
		element("#checkbox3").click();
		expect(element("#checkbox3 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel3").text()).toBe("The Untruth");


		// Click external trigger for true
		element("#checkboxButton3true").click();
		expect(element("#checkbox3 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel3").text()).toBe("true");

		// Click external trigger for false
		element("#checkboxButton3false").click();
		expect(element("#checkbox3 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel3").text()).toBe("The Untruth");


		// Click checkbox to be checked
		element("#checkbox3").click();
		expect(element("#checkbox3 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel3").text()).toBe("true");

		// Click external trigger for untruth
		element("#checkboxButton3untruth").click();
		expect(element("#checkbox3 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel3").text()).toBe("The Untruth");
	});

	it("Example with Custom True and False Value", function() {
		browser().navigateTo("index.html");

		// Check if the checkbox has been replaced with template
		expect(element("#checkbox4").attr("class")).toBe("btn btn-default btn-xs ng-isolate-scope ng-valid ng-dirty");


		// Check if the checkbox is unchecked
		expect(element("#checkbox4 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel4").text()).toBe("The Untruth");


		// Click checkbox to be checked
		element("#checkbox4").click();
		expect(element("#checkbox4 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel4").text()).toBe("The Truth");

		// Click the checkbox to be unchecked
		element("#checkbox4").click();
		expect(element("#checkbox4 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel4").text()).toBe("The Untruth");


		// Click external trigger for true
		element("#checkboxButton4true").click();
		expect(element("#checkbox4 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel4").text()).toBe("The Truth");

		// Click external trigger for false
		element("#checkboxButton4false").click();
		expect(element("#checkbox4 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel4").text()).toBe("The Untruth");

		// Click external trigger for truth
		element("#checkboxButton4truth").click();
		expect(element("#checkbox4 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel4").text()).toBe("The Truth");

		// Click external trigger for untruth
		element("#checkboxButton4untruth").click();
		expect(element("#checkbox4 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel4").text()).toBe("The Untruth");
	});

	it("Minimal Example", function() {
		browser().navigateTo("index.html");

		// Check if the checkbox has been replaced with template
		expect(element("#checkbox5").attr("class")).toBe("btn btn-default btn-xs ng-isolate-scope ng-valid ng-dirty");


		// Check if the checkbox is unchecked
		expect(element("#checkbox5 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel5").text()).toBe("false");
		expect(element("#changes").text()).toBe("0");


		// Click checkbox to be checked
		element("#checkbox5").click();
		expect(element("#checkbox5 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel5").text()).toBe("true");
		expect(element("#changes").text()).toBe("1");

		// Click the checkbox to be unchecked
		element("#checkbox5").click();
		expect(element("#checkbox5 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel5").text()).toBe("false");
		expect(element("#changes").text()).toBe("2");


		// Click external trigger for true
		element("#checkboxButton5true").click();
		expect(element("#checkbox5 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel5").text()).toBe("true");
		expect(element("#changes").text()).toBe("2");

		// Click external trigger for false
		element("#checkboxButton5false").click();
		expect(element("#checkbox5 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel5").text()).toBe("false");
		expect(element("#changes").text()).toBe("2");
	});

	it("Example Disabled", function() {
		browser().navigateTo("index.html");

		// Check if the checkbox has been replaced with template
		expect(element("#checkbox6").attr("class")).toBe("btn btn-default btn-xs ng-isolate-scope ng-valid ng-dirty");


		// Check if the checkbox is unchecked and enabled
		expect(element("#checkbox6 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel6").text()).toBe("false");
		expect(element("#checkbox6").attr("disabled")).toBe(undefined);


		// Click checkbox to be checked
		element("#checkbox6").click();
		expect(element("#checkbox6 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel6").text()).toBe("true");

		// Click the checkbox to be unchecked
		element("#checkbox6").click();
		expect(element("#checkbox6 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel6").text()).toBe("false");


		// Click external trigger for true
		element("#checkboxButton6true").click();
		expect(element("#checkbox6 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel6").text()).toBe("true");

		// Click external trigger for false
		element("#checkboxButton6false").click();
		expect(element("#checkbox6 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel6").text()).toBe("false");


		// Disable checkbox
		element("#checkboxButton6disable").click();
		expect(element("#checkbox6").attr("disabled")).toBe("disabled");

		// Click disabled checkbox
		element("#checkbox6").click();
		expect(element("#checkbox6 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel6").text()).toBe("false");

		// Click external trigger for true
		element("#checkboxButton6true").click();
		expect(element("#checkbox6 > span:eq(0)").attr("class")).toBe("glyphicon glyphicon-ok");
		expect(element("#checkboxModel6").text()).toBe("true");

		// Click external trigger for false
		element("#checkboxButton6false").click();
		expect(element("#checkbox6 > span:eq(0)").attr("class")).toBe("glyphicon");
		expect(element("#checkboxModel6").text()).toBe("false");


		// Enable checkbox again
		element("#checkboxButton6enable").click();
		expect(element("#checkbox6").attr("disabled")).toBe(undefined);
	});
});
