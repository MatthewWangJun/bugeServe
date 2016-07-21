'use strict';

angular.module('bugeSeverApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: '<main></main>'

    })
    .state('index', {
          url: '/index',
          views: {
            "context@": {
              templateUrl: 'app/main/index.html',
              controller:'IndexCtrl'
            }
          }
        })
  });
