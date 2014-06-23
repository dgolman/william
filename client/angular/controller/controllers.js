app.factory('geocode', function($q, Restangular, $timeout) {
	
	return function(restaurants, from) {

		var promises = restaurants.map(function(restaurant){
			
			

			var address = restaurant.contact.split('\u2022')[0];
			
			Restangular.oneUrl('maps', 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+',+Richmond,+VA').get().then(function(result){
				var deferred = $q.defer();
				var to  = new google.maps.LatLng(result.results[0].geometry.location.lat, result.results[0].geometry.location.lng);
				var dist = google.maps.geometry.spherical.computeDistanceBetween(from, to) * 0.000621371;
				restaurant.distance = dist;
				deferred.resolve(restaurant);
				return deferred.promise;
			});
			
		});

		return $q.all(promises);
	}
});

app.controller('scraperController', function($scope, Restangular, $filter, $q, geocode){
	function success(position) { 
		//console.log(position);
			// stackoverflow: distance between 2 geo locations
			var from = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

			Restangular.all('/localhost:8081/scrape').getList().then(function(restaurants) {

				geocode(restaurants, from).then(function(restaurants) {
					$scope.restaurants = restaurants;
					console.log(restaurants);
				});

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

	});

