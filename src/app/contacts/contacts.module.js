angular.module('app.contacts', [
  'ui.router',
  'contacts.controllers',
  'contacts.services',
  'contacts.directives'
])

.config(function config($stateProvider) {
  $stateProvider.state('contacts', {
    url: '/contacts',
    templateUrl: 'contacts/views/contacts.tpl.html'
  });
});
