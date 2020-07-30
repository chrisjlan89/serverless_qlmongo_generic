// Impport Individul Resolver Files Here
const UserMutations = require("./UserMutations");
// Export them here, spread them in since they are objs
module.exports = {
  ...UserMutations,
};
