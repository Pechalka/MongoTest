define(["knockout", "jquery", "Grid", "ko.mapping", "render"],
	function(ko, $, Grid, ko_mapping, render) {
		return function(model){
			var self = this;
            
			self.popup = ko.observable(null);

            self.filterParams = ko_mapping.fromJS(model);
            self.grid = new Grid('/api/users', {"Field":"FirstName","Distinct":"asc"}, self);


            self.filted = function() {
                self.grid.refresh({ pageNumber : 1, filterParams : ko.toJS(self.filterParams) });
            };


            self.add = function(){
				render(self.popup, "add_user", {
					//categories : self.categories,
					//dishe : { category : self.chosen_category(), price : 0, name : '', description : '' },
					on_save : function(){
					//	self.fetch_dishes();
						$('#popup').modal('hide');
					}
				});
				$('#popup').modal('show');
            };
		}
	});
