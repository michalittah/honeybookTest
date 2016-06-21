/* eslint-disable  */
angular.module('app.templates', ['contacts/views/contacts.tpl.html']);

angular.module('contacts/views/contacts.tpl.html', []).run(['$templateCache', function($templateCache) {
  $templateCache.put('contacts/views/contacts.tpl.html',
    '<!--contact list top bar-->\n' +
    '<div class="top-bar-container">\n' +
    '  <nav class="top-bar row" data-topbar role="navigation">\n' +
    '    <!--contact list title-->\n' +
    '    <ul class="title-area">\n' +
    '      <li class="name">\n' +
    '        <h1>Contact List</h1>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '    <span class="flex-1"></span>\n' +
    '    <!--search input-->\n' +
    '    <section class="search-box">\n' +
    '      <input class="search-input" type="search" placeholder="Search" ng-model="search">\n' +
    '      <i class="fa fa-search"></i>\n' +
    '    </section>\n' +
    '  </nav>\n' +
    '</div>\n' +
    '\n' +
    '<!--contact list body-->\n' +
    '<div class="contact-list">\n' +
    '  <div class="row flex" ng-hide="contacts">\n' +
    '    <i class="fa fa-spin fa-spinner"></i>\n' +
    '  </div>\n' +
    '  <div class="row" ng-show="contacts">\n' +
    '    <div class="columns text-center">\n' +
    '      <div class="row">\n' +
    '        <ul class="small-block-grid-1 medium-block-grid-3 large-block-grid-4">\n' +
    '          <!--loop over contacts data-->\n' +
    '          <li ng-repeat="contact in contacts| filter:search">\n' +
    '            <!--contact\'s card directive-->\n' +
    '            <div contacts-card></div>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
/* eslint-enable  */
