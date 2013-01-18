define(["knockout", "jquery",

	"ViewModelContainer",

    "sammy"

	],function(ko, $, 
		ViewModelContainer,
		Sammy

		) {
		
	return Sammy(function(){
		var app = this;

		app.menu = ViewModelContainer("widgets/menu", '/api/menu');
		app.content = ViewModelContainer();


        this.get('#Users', function () {
        	app.content.render("users");

        	app.menu.action(function(menu){
        		menu.active('#Users');
        	});     	
        });

        this.get('#Photos', function () {
 			app.content.render('photos');

        	app.menu.action(function(menu){
        		menu.active('#Photos');
        	});
        });

		this.get('', function () {			
        	window.location = '#Users';
        });



	});
});		