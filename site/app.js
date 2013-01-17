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
			render(app.content, "users", {});
        });

		this.get('', function () {
			
        	window.location = '#users';
        });

	});
});		