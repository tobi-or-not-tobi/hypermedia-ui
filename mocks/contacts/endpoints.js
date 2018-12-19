var data = require('./data');
var pagination = require('./pagination');
var links = require('./links');

const getContactList = {
  path: '/contacts',
  method: 'GET',
  template: {
    pagination: (params, query) => pagination.create(query),
    links: (params, query) =>
      links.createListLinks(
        query,
        pagination.getPage(query),
        pagination.getSize(query)
      ),
    contacts: (params, query) => {
      data.sort();
      return data.contacts.slice(
        (pagination.getPage(query) - 1) * pagination.getSize(query),
        (pagination.getPage(query) - 1) * pagination.getSize(query) +
          pagination.getSize(query)
      );
    }
  }
};

const getContactDetails = {
  path: '/contacts/:id',
  method: 'GET',
  template: pathParameters => {
    return data.contacts.find(
      contact => contact.contact.id === pathParameters.id
    );
  }
};

const patchContactDetails = {
  path: '/contacts/:id',
  method: 'PATCH',
  template: (params, query, body) => {
    const details = data.contacts.find(
      contact => contact.contact.id === body.id
    );
    Object.assign(details.contact, body);
  }
};

module.exports = [getContactList, getContactDetails, patchContactDetails];
