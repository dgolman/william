app.controller('scraperController', function($scope, Restangular, $filter){
	function success(position) { 
		//console.log(position);
			// stackoverflow: distance between 2 geo locations
			var from = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

			Restangular.all('/localhost:8081/scrape').getList().then(function(result) {
				var restaurants = result;
				var ret = [];
				var log = [];
				angular.forEach(restaurants, function(restaurant, key){
					
					setTimeout(function() {
						var address = restaurant.contact.split('\u2022')[0];
						Restangular.oneUrl('maps', 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+',+Richmond,+VA').get().then(function(result){
								var to   = new google.maps.LatLng(result.results[0].geometry.location.lat, result.results[0].geometry.location.lng);
								var dist = google.maps.geometry.spherical.computeDistanceBetween(from, to) * 0.000621371;
										console.log(dist);
								restaurant.distance = dist;
						});
					}, 100);

				});
				
				$scope.restaurants = restaurants;
			});
		}
		function error(msg) {
			console.log(msg);
		}
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			error('not supported');
		}


	})


