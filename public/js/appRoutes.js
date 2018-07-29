angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/admin', {
			templateUrl: 'views/admin.html',
			controller: 'AdminController'
		})

        .when('/admin_home', {
            templateUrl: 'views/admin_home.html',
            controller: 'AdminHomeController'
        })

		.when('/leader', {
			templateUrl: 'views/leader.html',
			controller: 'LeaderController'	
		});

	$locationProvider.html5Mode(true);

}]);