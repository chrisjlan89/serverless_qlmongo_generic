const User = require("../../db/models/User");

const UserMutations = {
  async createUser(_, { input }, { db }) {
    console.log(db, input);

    const res = await User.create({ ...input });
    return res;
  },
};

module.exports = UserMutations;
