;(function () {
	'use strict';

	angular.module('futApp')
		.service('futeBitsSvc', ['$http', function ($http) {
			var ROOT_URL = 'http://www.futebits.com.br/ws/api';

			return {
				times: function () {
					return $http.get(ROOT_URL + '/getIdentificadorEquipes');
				},
				jogos: function (id) {
					return $http.get(ROOT_URL + '/getJogos/' + id);
				},
				time: function (id) {
					return $http.get(ROOT_URL + '/getDadosEquipe/' + id);
				}
			};
		}])
}());