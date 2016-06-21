/**
 * Created by Michal on 6/21/16.
 */
angular.module('contacts.directives.contactsCard', [])
  .directive("contactsCard", function () {
    return {
      template: '<div class="panel contact-card">' +
      '<div class="contact-image" style="background-image:url({{contact.profile_image}});"></div>' +
      '<div class="contact-icon" style="background-image:url({{contact.icon}});"></div>' +
      '<div class="contact-info">' +
      '<div class="contact-name">{{contact.name}}</div>' +
      '<div class="contact-job">{{contact.job}} {{contact.job?"|":""}} {{contact.company_name?"@":""}}{{contact.company_name }}</div>' +
      '<div class="show-on-hover">' +
      '<div class="contact-phone">Phone Number {{contact.phone}}</div>' +
      '<div class="contact-email">{{contact.email}}</div>' +
      '</div>' +
      '</div>' +
      '</div>'
    };
  });

