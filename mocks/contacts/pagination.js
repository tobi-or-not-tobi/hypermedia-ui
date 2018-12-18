var contactData = require('./data');

let DEFAULT_PAGE_SIZE = 5;

getPage = query => {
  return query.page ? Number(query.page) : 1;
};

getSize = query => {
  return query.size ? Number(query.size) : DEFAULT_PAGE_SIZE;
};

createPreviousLink = query => {
  const previous = getPage(query) - 1;
  return previous > 0
    ? {
        href: `/contacts?page=${previous}&size=${getSize(query)}`,
        rel: 'previous',
        method: 'GET'
      }
    : {};
};

createNextLink = query => {
  const next = getPage(query) + 1;
  const size = getSize(query);
  return (next - 1) * size < contactData.contacts.length
    ? {
        href: `/contacts?page=${next}&size=${getSize(query)}`,
        rel: 'next',
        method: 'GET'
      }
    : {};
};

createFirstLink = query => {
  const size = getSize(query);
  const page = getPage(query);
  return page !== 1 && size < contactData.contacts.length
    ? {
        href: `/contacts?page=1&size=${getSize(query)}`,
        rel: 'first',
        method: 'GET'
      }
    : {};
};

createLastLink = query => {
  const size = getSize(query);
  const page = getPage(query);
  const lastPage =
    Math.round((contactData.contacts.length + size / 2 + 1) / size) - 1;
  return lastPage > page
    ? {
        href: `/contacts?page=${lastPage}&size=${getSize(query)}`,
        rel: 'last',
        method: 'GET'
      }
    : {};
};

create = query => {
  console.log(query);
  return {
    page: getPage(query),
    size: getSize(query),
    totalcount: contactData.contacts.length,
    links: [
      createPreviousLink(query),
      createNextLink(query),
      createFirstLink(query),
      createLastLink(query)
    ]
  };
};

module.exports = {
  create,
  getPage,
  getSize
};
