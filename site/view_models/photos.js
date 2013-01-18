define(["knockout", "jquery"],
	function(ko, $) {
		return function(){
			
			// function test() {
			//   var d = $.Deferred();
			//   setTimeout(function() { d.resolve(); }, 3000);
			//   return d.promise();
			// }

			// var t = test().done(function() { alert("время истекло"); })

			var self = this;
			self.test = function(){
				alert(';sdf');
			}
		}
	}
);