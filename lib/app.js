;(function () {
	'use strict';

	angular.module('futApp', ['ngRoute', 'ngMaterial'])
		.config(['$mdThemingProvider', '$routeProvider', function ($mdThemingProvider, $routeProvider) {
			$mdThemingProvider.theme('default');

			$routeProvider.
				when('/', {
					controller: 'HomeCtrl',
					templateUrl: 'lib/views/home.html'
				}).
				when('/times/:estado', {
					controller: 'TimesCtrl',
					templateUrl: 'lib/views/times.html'
				}).
				when('/jogos/:time', {
					controller: 'JogosCtrl',
					templateUrl: 'lib/views/jogos.html'
				}).
				otherwise({ redirectTo: '/' })
		}])
}());