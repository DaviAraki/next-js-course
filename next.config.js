const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "dsaraki",
        mongodb_password: "123qwe",
        mongodb_clustername: "cluster0",
        mongodb_database: "mySite-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "dsaraki",
      mongodb_password: "123qwe",
      mongodb_clustername: "cluster0",
      mongodb_database: "mySite",
    },
  };
};
