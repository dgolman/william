app.controller('scraperController', function($scope, Restangular){

	Restangular.all('/localhost:8081/scrape').getList().then(function(result) {
		$scope.message = result;

		var restaurants = result;
		var log = [];
		angular.forEach(restaurants, function(restaurant, key){
			var address = restaurant.contact.split('\u2022')[0];

			setTimeout(function() {
				Restangular.oneUrl('maps', 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+',+Richmond,+VA').get().then(function(result){

					$scope.maps = result;
					console.log(result);
				});
			}, 100);
			
		});
	});
})


