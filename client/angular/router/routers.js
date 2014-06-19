app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'client/angular/templates/index.html',
		controller: 'scraperController'
	});
}]);