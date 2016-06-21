angular.module('contacts.controllers.ContactsCtrl', [])
  .controller('ContactsCtrl', function ($scope, ContactsService) {
    // $scope.title = 'Contacts List';
    // $scope.homepageMessage = HomeService.getHelloMessage();
    // $scope.foundationItems = HomeService.foundationItems;
    ContactsService.get()
      .then(function (response) {
        $scope.contacts = response.data;
      });
  });
