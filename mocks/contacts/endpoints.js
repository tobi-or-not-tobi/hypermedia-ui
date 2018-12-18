var data = require('./data');
var pagination = require('./pagination');

const getContactList = {
  path: '/contacts',
  method: 'GET',
  template: {
    pagination: (params, query) => pagination.create(query),
    contacts: (params, query) =>
      data.contacts.slice(
        (pagination.getPage(query) - 1) * pagination.getSize(query),
        (pagination.getPage(query) - 1) * pagination.getSize(query) +
          pagination.getSize(query)
      )
  }
};

const getContactDetails = {
  path: '/contacts/:id',
  method: 'GET',
  template: pathParameters => {
    return data.contacts.find(contact => {
      return contact.contact.id === pathParameters.id;
    });
  }
};

module.exports = [getContactList, getContactDetails];
