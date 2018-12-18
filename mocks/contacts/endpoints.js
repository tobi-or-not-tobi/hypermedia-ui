var g = require('dyson-generators');
var data = require('./data');
var pagination = require('./pagination');

const getContactList = {
  path: '/contacts',
  method: 'GET',
  cache: false,
  template: {
    contacts: (params, query) =>
      data.contacts.slice(
        (pagination.getPage(query) - 1) * pagination.getSize(query),
        (pagination.getPage(query) - 1) * pagination.getSize(query) +
          pagination.getSize(query)
      )
  }
};

module.exports = [getContactList];
