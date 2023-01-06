const dotenv = require("dotenv");
dotenv.config();

const constants = {
  APP_NAME_UPPER_CASE: "GIFT EXCHANGE",
  APP_NAME_SENTENCE_CASE: "Gift Exchange",
  APP_NAME_KEBAB_CASE: "gift-exchange",
  SERVER_URL: process.env.SERVER_URL,
};

module.exports = constants;
