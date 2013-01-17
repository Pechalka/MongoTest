define(["knockout", "jquery", "Grid", "ko.mapping"],
	function(ko, $, Grid, ko_mapping) {
		return function(model){
			var self = this;
            
            self.filterParams = ko_mapping.fromJS(model);
            self.grid = new Grid('/api/users', {"Field":"FirstName","Distinct":"asc"}, self);


            self.filted = function() {
                self.grid.refresh({ pageNumber : 1, filterParams : ko.toJS(self.filterParams) });
            };
		}
	});
