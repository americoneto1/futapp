;(function () {
	'use strict';

	angular.module('futApp')
		.factory('futeBitsFct', [function () {
			
		
			return {
				ConvertEstados: function (data) {
					return _.chain(data)
						.map(function(value, key){
							return {
								id: key,
								nome: value.nome,
								estado: value.estado
							};
						})
						.groupBy('estado')
						.map(function(value, key) {
							return {
								nome: key,
								times: value
							}
						})
						.sortBy('nome')
						.value();
				},
				ConvertTimes: function (data, estado) {
					return _.chain(data)
						.map(function(value, key){
							return {
								id: key,
								nome: value.nome,
								estado: value.estado
							};
						})
						.where({estado: estado})
						.sortBy('nome')
						.value();
				},
				ConvertJogos: function (data) {
					return _.where(data, { edicao: 2014 });
				}
			};
		}])
}());