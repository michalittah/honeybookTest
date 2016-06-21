angular.module('contacts.services.ContactsService', [])
  .factory('ContactsService', function ($http) {
    return {
      get: function () {
        return $http.get('https://candidate-test.herokuapp.com/contacts');
      }
    };
  });
