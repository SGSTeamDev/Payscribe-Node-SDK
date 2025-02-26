const { AppError } = require("../middleware/error.js");

class Customer {
  constructor(request) {
    this.request = request;
  }

  async list(query) {
    if (!query.page || !query.page_size) {
      throw new AppError(400, 400, "400", undefined, {
        page: "The 'page' query is required.",
        page_size: "The 'page_size' query is required.",
      });
    }

    return this.request(`/customers`, { method: "GET", query });
  }

  async create(data) {
    return this.request("/customers/create", { method: "POST", data });
  }

  async createFull(data) {
    return this.request("/customers/create/full", { method: "POST", data });
  }

  async upgradeToTierOne(data) {
    return this.request("/customers/create/tier1", { method: "PATCH", data });
  }

  async upgradeToTierTwo(data) {
    return this.request("/customers/create/tier2", { method: "PATCH", data });
  }

  async details(id) {
    if (!id) {
      throw new AppError(
        false,
        400,
        "false",
        "The customer_id parameter is required.",
        {}
      );
    }

    return this.request(`/customers/${id}/details`, { method: "GET" });
  }

  async transactions(data) {
    if (!data.customer_id) {
      throw new AppError(
        false,
        400,
        "false",
        "The customer_id parameter is required.",
        {}
      );
    }

    if (!data.page || !data.page_size) {
      throw new AppError(400, 400, "400", undefined, {
        page: "The 'page' query is required.",
        page_size: "The 'page_size' query is required.",
      });
    }

    if (!data.start_date || !data.end_date) {
      throw new AppError(400, 400, "400", undefined, {
        start_date: "The start_date field is required.",
        end_date: "The end_date field is required.",
      });
    }

    const query = {
      page: data.page,
      page_size: data.page_size,
    };

    return this.request(`/customers/${data.customer_id}/transactions`, {
      method: "POST",
      query,
      data,
    });
  }

  async blacklist(id) {
    return this.request("/customers/blacklist", {
      method: "POST",
      data: { customer_id: id, blacklist: 0 },
    });
  }

  async whitelist(id) {
    return this.request("/customers/blacklist", {
      method: "POST",
      data: { customer_id: id, blacklist: 1 },
    });
  }
}

module.exports = Customer;
