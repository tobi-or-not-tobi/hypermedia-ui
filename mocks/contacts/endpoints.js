var data = require('./data');
var pagination = require('./pagination');
var links = require('./links');

const getContactList = {
  path: links.endpoints.listEndpoint,
  method: 'GET',
  cache: false,
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
      return data
        .getContacts()
        .slice(
          (pagination.getPage(query) - 1) * pagination.getSize(query),
          (pagination.getPage(query) - 1) * pagination.getSize(query) +
            pagination.getSize(query)
        );
    }
  }
};

const postContact = {
  path: links.endpoints.postEndpoint,
  method: 'POST',
  cache: false,
  template: (params, query, body) => {
    data.create(body.firstName, body.lastName, body.email);
  }
};

const getContactDetails = {
  path: links.endpoints.detailEndpoint,
  method: 'GET',
  cache: false,
  template: pathParameters => {
    return data
      .getContacts()
      .find(contact => contact.contact.id === pathParameters.id);
  }
};

const patchContactDetails = {
  path: links.endpoints.patchEndpoint,
  method: 'PATCH',
  cache: false,
  template: (params, query, body) => {
    const details = data.getContacts().find(contact => {
      return contact && contact.contact.id === body.id;
    });
    Object.assign(details.contact, body);
  }
};

const deleteContactDetails = {
  path: links.endpoints.deleteEndpoint,
  method: 'DELETE',
  cache: false,
  template: pathParameters => {
    const detail = data.contacts.find(
      contact => contact.contact.id === pathParameters.id
    );
    const index = data.getContacts().indexOf(detail);
    data.contacts.splice(index, index + 1);
  }
};

module.exports = [
  getContactList,
  postContact,
  getContactDetails,
  patchContactDetails,
  deleteContactDetails
];
