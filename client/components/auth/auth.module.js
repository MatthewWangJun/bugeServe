'use strict';

angular.module('bugeSeverApp.auth', ['bugeSeverApp.constants', 'bugeSeverApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
