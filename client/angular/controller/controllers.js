app.controller('scraperController', function($scope, Restangular){

		Restangular.all('/localhost:8081/scrape').getList().then(function(bill) {
			$scope.message = bill;
		});

})


