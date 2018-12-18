var g = require('dyson-generators');
var data = require('./data');

const getContactList = {
  path: '/contacts',
  method: 'GET',
  cache: false,
  template: {
    contacts: (params, query) => data.contacts
  }
};

module.exports = [getContactList];
