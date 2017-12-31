const cmaContentful = require('contentful-management');

module.exports = {
  getClient (accessToken) {
    return cmaContentful.createClient({
      accessToken
    });
  }
};
