define(["knockout", "jquery",

	"render",

    "sammy"

	],function(ko, $, 
		render,
		Sammy

		) {
		
	return Sammy(function(){
		var app = this;

		app.content = ko.observable(null)

        this.get('#users', function () {
        	var filter = {"AgeFrom":null,"AgeTo":null,"ShowMale":true,"ShowFemale":true,"Colors":[{"Key":"1","Value":"Black"},{"Key":"2","Value":"Red"},{"Key":"3","Value":"Green"}],"SelectedColor":"2"};
			render(app.content, "users", filter );
        });

		this.get('', function () {
			
        	window.location = '#users';
        });

	});
});		