const { sendResponse } = require("../utils/helpers");

const STATUS_DESCRIPTIONS = {
  200: "Success",
  201: "Transaction Pending - Reverify using Payscribe trans_id or the ref passed",
  400: "Bad Request, Something missing in your body request",
  401: "User not authenticated",
  403: "Forbidden request, Contact Support",
  404: "Page Not Found",
  405: "Duplicate Transaction",
  406: "Missing Required Information, Please check that you have provided all mandatory information",
  407: "Invalid product code/token",
  408: "Result Not Found",
  409: "Invalid Amount to process. Transaction Limit",
  410: "Insufficient money in your wallet",
  434: "General Operator Side Error, Transaction Failed",
  435: "General Database Error, Transaction Failed",
};

class AppError extends Error {
  constructor(status, status_code, error, description, messages) {
    super(description);
    this.status = status;
    this.status_code = status_code;
    this.error = error !== undefined ? error : String(status);
    this.description =
      description !== undefined
        ? description
        : STATUS_DESCRIPTIONS[status_code] ||
          (status_code >= 500 ? "Some server-side error" : "Unknown Error");
    this.messages = messages !== undefined ? messages : {};
  }
}

const handleError = (err) => {
  return sendResponse(
    err.status,
    err.status_code,
    err.error,
    err.description,
    err.messages
  );
};

module.exports = {
  AppError,
  handleError,
};
