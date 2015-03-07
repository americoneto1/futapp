;(function () {
	'use strict';

	angular.module('futApp')
		.controller('HomeCtrl', ['$scope', 'futeBitsSvc', 'futeBitsFct', 
			function ($scope, futeBitsSvc, futeBitsFct) {
				$scope.isLoading = true;
				futeBitsSvc.times().success(function (data) {
					$scope.estados = futeBitsFct.ConvertEstados(data);
				}).finally(function() {
					$scope.isLoading = false;
				});
			}
		])
		.controller('TimesCtrl', ['$scope', '$routeParams', '$q', 'futeBitsSvc', 'futeBitsFct', 
			function ($scope, $routeParams, $q, futeBitsSvc, futeBitsFct) {
				$scope.times = [];
				$scope.isLoading = true;
				$scope.estado = $routeParams.estado;
				futeBitsSvc.times().success(function (data) {
					var times = futeBitsFct.ConvertTimes(data, $routeParams.estado);
					var requests = [];
					for (var i = 0; i < times.length; i++) {
						requests.push(futeBitsSvc.time(times[i].id));
					};
					$q.all(requests).then(function(results) {
						for (var i = 0; i < results.length; i++) {
							$scope.times.push(results[i].data);
						};
					}).finally(function() {
						$scope.isLoading = false;
					});
				});
			}
		])
		.controller('JogosCtrl', ['$scope', '$routeParams', 'futeBitsSvc', 'futeBitsFct', 
			function ($scope, $routeParams, futeBitsSvc, futeBitsFct) {
				$scope.data = {
			      selectedIndex : 0
			    };
				$scope.next = function() {
			      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
			    };
			    $scope.previous = function() {
			      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
			    };

			    futeBitsSvc.time($routeParams.time).success(function (data) {
			    	$scope.time = data;
			    });

			    futeBitsSvc.jogos($routeParams.time).success(function (data) {
			    	$scope.jogos = futeBitsFct.ConvertJogos(data);
			    });
			}
		])

}());