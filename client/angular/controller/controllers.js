app.controller('scraperController', function($scope, Restangular){

		Restangular.all('/localhost:8081/scrape').getList().then(function(result) {
			$scope.message = result;
			console.log(result);
		});

})


