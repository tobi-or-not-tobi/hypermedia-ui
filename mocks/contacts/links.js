// var pagination = require('./pagination');

listEndpoint = '/contacts';
postEndpoint = '/contacts/postit';
detailEndpoint = '/contacts/:id';
patchEndpoint = '/v2/contacts/patcy/:id';
deleteEndpoint = '/contacts/:id/delete';

createListLinks = (query, page, size) => {
  return [
    {
      href: `/contacts?page=${page}&size=${size}`,
      rel: 'self',
      method: 'GET'
    },
    {
      href: postEndpoint,
      rel: 'create',
      method: 'POST'
    }
  ];
};

createDetailLinks = id => {
  return [
    {
      href: resolveId(detailEndpoint, id),
      rel: 'self',
      method: 'GET'
    },
    {
      href: resolveId(deleteEndpoint, id),
      rel: 'remove',
      method: 'DELETE'
    },
    {
      href: resolveId(patchEndpoint, id),
      rel: 'update',
      method: 'PATCH'
    },
    {
      href: `/contacts/${id}`,
      rel: 'replace',
      method: 'PUT'
    }
  ];
};

resolveId = (endpoint, id) => {
  return endpoint.replace(':id', id);
};

module.exports = {
  createListLinks,
  createDetailLinks,
  endpoints: {
    listEndpoint,
    postEndpoint,
    detailEndpoint,
    patchEndpoint,
    deleteEndpoint
  }
};
