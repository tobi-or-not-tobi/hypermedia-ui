var g = require('dyson-generators');
var faker = require('faker');

const TOTAL_COUNT = 100;

const contacts = [];

create = (firstName, lastName, email) => {
  const id = g.id();
  contacts.push({
    contact: {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email
    }
  });
};

while (contacts.length < TOTAL_COUNT) {
  create(faker.name.firstName(), faker.name.lastName(), faker.internet.email());
}

module.exports = { contacts, create };
