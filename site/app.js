define(["knockout", "jquery",

	"render",

    "sammy"

	],function(ko, $, 
		render,
		Sammy

		) {
		
	return Sammy(function(){
		var app = this;

		app.menu = ko.observable(null);
		render(app.menu, "widgets/menu");

		app.content = ko.observable(null);


        this.get('#Users', function () {
        	var filter = {"AgeFrom":null,"AgeTo":null,"ShowMale":true,"ShowFemale":true,"Colors":[{"Key":"1","Value":"Black"},{"Key":"2","Value":"Red"},{"Key":"3","Value":"Green"}],"SelectedColor":"2"};
			render(app.content, "users");

			app.menu().data.active('#Users');
        });

        this.get('#Photos', function () {
 			app.content(null);

 			app.menu().data.active('#Photos');
        });

		this.get('', function () {			
        	window.location = '#Users';
        });



	});
});		