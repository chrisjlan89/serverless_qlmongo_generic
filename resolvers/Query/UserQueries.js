const UserQueries = {
  async allUsers(_, __, { db }) {
    const { User } = db;
    try {
      const res = await User.find();
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = UserQueries;
