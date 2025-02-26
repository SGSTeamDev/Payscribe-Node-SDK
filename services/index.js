class Payscribe {
  constructor(request) {
    this.request = request;
  }

  async balance(query) {
    return this.request(`/my-account/balances`, {
      method: "GET",
      query,
    });
  }

  async services(query) {
    return this.request(`/misc/services`, {
      method: "GET",
      query,
    });
  }
}

module.exports = Payscribe;
