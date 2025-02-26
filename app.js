require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const base = require("./lib/base");

const Payscribe = require("./services/index");
const Betting = require("./services/betting");
const Customer = require("./services/customer");

module.exports = (key) => {
  const request = base(key);
  const index = new Payscribe(request);

  return {
    Customer: new Customer(request),
    Betting: new Betting(request),
    ...Object.getOwnPropertyNames(Payscribe.prototype)
      .filter((method) => method !== "constructor") // exclude constructor
      .reduce((acc, method) => {
        acc[method] = index[method].bind(index); // bind methods to the instance
        return acc;
      }, {}),
  };
};
