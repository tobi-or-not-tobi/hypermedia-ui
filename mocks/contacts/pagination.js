var contactData = require('./data');

let DEFAULT_PAGE_SIZE = 5;

getPage = query => {
  return query.page ? Number(query.page) : 1;
};

getSize = query => {
  return query.size ? Number(query.size) : DEFAULT_PAGE_SIZE;
};

module.exports = {
  getPage,
  getSize
};
