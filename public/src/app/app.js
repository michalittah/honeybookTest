angular.module('contact-list', [

  /**
   * Dependencies must be injected in specific order:
   * 1) AngularJS dependencies
   * 2) Compiled HTML templates
   * 3) Common Services, Directives, Filters and Utilities
   * 4) App Layout component (e.g. Layout or Frame)
   * 5) Other App components (e.g. Topbar, About, etc)
   */

  // AngularJS dependencies
  'ui.router',
  //'ngResource',

  // Include compiled HTML templates
  'app.templates',

  // Components
  'app.contacts'
])

  .run(['$state', function ($state) {
    $state.go('contacts');
  }]);
