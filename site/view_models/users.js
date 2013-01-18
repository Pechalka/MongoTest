define(["knockout", "jquery", "Grid", "ko.mapping", "render"],
	function(ko, $, Grid, ko_mapping, render) {
		return function(model){
			var self = this;
            
			self.popup = ko.observable(null);

var filter = {"AgeFrom":null,"AgeTo":null,"ShowMale":true,"ShowFemale":true,"Colors":[{"Key":"1","Value":"Black"},{"Key":"2","Value":"Red"},{"Key":"3","Value":"Green"}],"SelectedColor":"2"};
			
            self.filterParams = ko_mapping.fromJS(filter);
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
