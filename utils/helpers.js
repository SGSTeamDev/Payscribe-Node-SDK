const helpers = {
  sendResponse(status, status_code, error, description, message) {
    const response = {
      status,
      status_code,
      error,
      description,
      message,
    };

    // Remove undefined values dynamically
    return Object.fromEntries(
      // eslint-disable-next-line no-unused-vars
      Object.entries(response).filter(([_, v]) => v !== undefined)
    );
  },
};

module.exports = helpers;
