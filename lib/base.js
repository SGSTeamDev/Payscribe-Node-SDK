const querystring = require("querystring");

const axios = require("axios");
const { AppError } = require("../middleware/error.js");
const { sendResponse } = require("../utils/helpers");

const base = (key) => {
  if (!key) throw new AppError(500, "Public key is required.");

  const url = {
    live: "https://api.payscribe.ng/api/v1",
    test: "https://sandbox.payscribe.ng/api/v1",
  };

  const base_url = key.startsWith("ps_pk_live") ? url.live : url.test;

  const request = async (path, payload = {}) => {
    try {
      if (!payload.method) {
        if (!key)
          throw new AppError(false, 401, undefined, "Public key is required.");
      }

      const method = payload.method.toUpperCase();
      let request_url = `${base_url}${path}`;

      // add query string to url
      if (payload.query) {
        const query_string = querystring.stringify(payload.query);
        request_url += query_string ? `?${query_string}` : "";
      }

      // set payload data (request payload) to empty object if method is GET or DELETE
      if (method.toUpperCase() === "GET" || method.toUpperCase() === "DELETE") {
        payload.data = {};
      }

      const config = {
        method,
        url: request_url,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        data: payload.data,
      };

      const response = await axios(config);
      const data = response.data;

      if (
        typeof data.status === "number" &&
        ![200, 201].includes(data.status)
      ) {
        throw new AppError(
          data.status || false,
          data.status_code || response.status || 500,
          data.error || data.errors || String(data.status),
          data.description || undefined,
          data.message || data.messages || {}
        );
      }

      if (
        data.status !== true ||
        data.error ||
        data.errors ||
        (data.status_code && ![200, 201].includes(data.status_code))
      ) {
        throw new AppError(
          data.status || false,
          data.status_code || response.status || 500,
          data.error || data.errors || String(data.status),
          data.description || undefined,
          data.message || data.messages || {}
        );
      }

      return sendResponse(
        data.status,
        data.status_code || response.status,
        undefined,
        data.description,
        data.message
      );
    } catch (error) {
      if (error.response && error.response.data) {
        const response = error.response.data;

        throw new AppError(
          response.status || false,
          response.status_code || error.response.status || 500,
          response.error || response.errors || String(response.status),
          response.description || undefined,
          response.message || response.messages || {}
        );
      } else if (error instanceof AppError) {
        throw error;
      } else {
        throw new AppError(false, 500, undefined, undefined, {});
      }
    }
  };

  return request;
};

module.exports = base;
