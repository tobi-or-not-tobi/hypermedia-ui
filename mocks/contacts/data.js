var faker = require('faker');

var links = require('./links');

const TOTAL_COUNT = 25;

const contacts = [];

create = (firstName, lastName, email) => {
  const id = faker.random.uuid();
  contacts.push({
    contact: {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email
    },
    links: links.createDetailLinks(id)
  });
};

sort = () => {
  contacts.sort(function(a, b) {
    if (a.contact.firstName < b.contact.firstName) {
      return -1;
    }
    if (a.contact.firstName > b.contact.firstName) {
      return 1;
    }
    return 0;
  });
};

while (contacts.length < TOTAL_COUNT) {
  create(faker.name.firstName(), faker.name.lastName(), faker.internet.email());
}

getContacts = () => {
  return contacts;
};

module.exports = { getContacts, create, sort };
