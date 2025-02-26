class Betting {
  constructor(request) {
    this.request = request;
  }

  async providers(query) {
    return this.request(`/betting/list`, { method: "GET", query });
  }

  async lookup(query) {
    return this.request(`/betting/lookup`, { method: "GET", query });
  }

  async vend(data) {
    return this.request("/betting/vend", { method: "POST", data });
  }
}

module.exports = Betting;
