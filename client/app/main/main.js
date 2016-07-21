'use strict';

angular.module('bugeSeverApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/main',
        views: {
            "context@": {
                templateUrl:  'app/main/main.html',
                controller:'mainCtrl'
            }

    }})
    .state('index', {
          url: '/',
          views: {
            "context@": {
              templateUrl: 'app/main/index.html',
              controller:'IndexCtrl'
            }
          }
        })
  });
