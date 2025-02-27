const app = require("../app");

describe("Index", () => {
  let index;

  beforeEach(() => {
    // process.env.PUBLIC_KEY from env.test
    index = app(process.env.PUBLIC_KEY);
  });

  describe("Account Balance", () => {
    it("should return account balance", async () => {
      const res = await index.balance();

      expect(res.status).toBe(true);
      expect(res.status_code).toBe(200);
      expect(res).toMatchObject({
        status: res.status,
        status_code: res.status_code,
        description: expect.any(String),
        message: expect.any(Object),
      });
    });
  });

  describe("Services", () => {
    it("should return services", async () => {
      const res = await index.services();

      expect(res.status).toBe(true);
      expect(res.status_code).toBe(200);
      expect(res).toMatchObject({
        status: res.status,
        status_code: res.status_code,
        description: expect.any(String),
        message: expect.any(Object),
      });
    });

    it("should return only services with category betting", async () => {
      const res = await index.services({
        group_by: "betting",
      });

      expect(res.status).toBe(true);
      expect(res.status_code).toBe(200);
      expect(res).toMatchObject({
        status: res.status,
        status_code: res.status_code,
        description: expect.any(String),
        message: expect.any(Object),
      });
    });
  });
});
