require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const base = require("./lib/base");

const Payscribe = require("./services/index");
const Betting = require("./services/betting");
const Customer = require("./services/customer");
const Airtime = require("./services/airtime");

module.exports = (key) => {
  const request = base(key);
  const index = new Payscribe(request);

  return {
    Customer: new Customer(request),
    Betting: new Betting(request),
    Airtime: new Airtime(request),
    ...Object.getOwnPropertyNames(Payscribe.prototype)
      .filter((method) => method !== "constructor") // exclude constructor
      .reduce((acc, method) => {
        acc[method] = index[method].bind(index); // bind methods to the instance
        return acc;
      }, {}),
  };
};
