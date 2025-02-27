class Airtime {
  constructor(request) {
    this.request = request;
  }

  async purchase(data) {
    return this.request("/airtime", { method: "POST", data });
  }
}

module.exports = Airtime;
