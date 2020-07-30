module.exports = {
  LeadStatus: {
    __resolveType(leadStatus) {
      console.log(leadStatus, "???");
      return "???";

      //   if (shoe.status === "Interested") return "Interested";
      //   return "NotHom3e";
    },
  },
};
