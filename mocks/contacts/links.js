// var pagination = require('./pagination');

createListLinks = (query, page, size) => {
  return [
    {
      href: `/contacts?page=${page}&size=${size}`,
      rel: 'self',
      method: 'GET'
    },
    {
      href: '/contacts',
      rel: 'create',
      method: 'POST'
    }
  ];
};

createDetailLinks = id => {
  return [
    {
      href: `/contacts/${id}`,
      rel: 'self',
      method: 'GET'
    },
    {
      href: `/contacts/${id}`,
      rel: 'remove',
      method: 'DELETE'
    },
    {
      href: `/contacts/${id}`,
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

module.exports = { createListLinks, createDetailLinks };
