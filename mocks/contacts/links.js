// var pagination = require('./pagination');

listEndpoint = '/contacts';
postEndpoint = '/contacts';
detailEndpoint = '/contacts/:id';
patchEndpoint = '/contacts/:id';
putEndpoint = '/contacts/:id';
deleteEndpoint = '/contacts/:id';

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
  const random_edit = Math.random() >= 0.3;
  const random_delete = random_edit && Math.random() >= 0.3;
  const links = [];
  links.push({
    href: resolveId(detailEndpoint, id),
    rel: 'self',
    method: 'GET'
  });
  if (random_edit) {
    links.push({
      href: resolveId(patchEndpoint, id),
      rel: 'update',
      method: 'PATCH'
    });
    links.push({
      href: `/contacts/${id}`,
      rel: 'replace',
      method: 'PUT'
    });
  }
  if (random_delete) {
    links.push({
      href: resolveId(deleteEndpoint, id),
      rel: 'remove',
      method: 'DELETE'
    });
  }
  return links;
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
    putEndpoint,
    patchEndpoint,
    deleteEndpoint
  }
};
