const fs = require("fs-extra");
const path = require("path");

const cucumber = require('cypress-cucumber-preprocessor').default;

const fetchConfigurationByFile = file => {
  const pathOfConfigurationFile = `environments/${file}_env.json`;

  return (
    file && fs.readJson(path.join(__dirname, "../", pathOfConfigurationFile))
  );
};

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());

  const environment = config.env.configFile || "dev";
  const configurationForEnvironment = fetchConfigurationByFile(environment);

  return configurationForEnvironment || config;
};
