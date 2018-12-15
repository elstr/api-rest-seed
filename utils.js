const faker = require("faker");

const generateUsers = limit =>
  Array.from({ length: limit || 100 }, () => ({
    id: faker.random.uuid(),
    photo: faker.image.avatar(),
    name: faker.name.firstName(),
    description: faker.lorem.paragraph()
  }));

module.exports = {
  generateUsers
};
