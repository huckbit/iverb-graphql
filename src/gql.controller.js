const verbsData = require("../data/verbs.json");

const getVerbs = () => {
  return verbsData;
};

const getVerbById = (args) => {
  let id = args.id;
  return verbsData.filter((verb) => {
    return verb.id === id;
  })[0];
};

const getVerbByInfinitive = (args) => {
  let infinitive = args.infinitive;
  return verbsData.filter((verb) => {
    return verb.infinitive === infinitive;
  })[0];
};

module.exports = {
  getVerbs,
  getVerbById,
  getVerbByInfinitive,
};
