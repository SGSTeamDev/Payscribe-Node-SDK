const { faker } = require("@faker-js/faker");

const app = require("../app");

describe("Airtime Service", () => {
  let airtimeInstance;

  beforeEach(async () => {
    // process.env.PUBLIC_KEY from env.test
    airtimeInstance = app(process.env.PUBLIC_KEY).Airtime;
  });

  describe("Single Airtime Purchase", () => {
    it("should throw error if request payload is incomplete", async () => {
      const data = {
        network: "mtn",
        amount: 10,
        ported: false,
        ref: faker.string.uuid(),
      };

      await expect(airtimeInstance.purchase(data)).rejects.toThrow();

      await expect(airtimeInstance.purchase(data)).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should return status true if airtime is purchased", async () => {
      const res = await airtimeInstance.purchase({
        network: "mtn",
        amount: 10,
        recipient: "08160381840",
        ported: false,
        ref: faker.string.uuid(),
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

  describe("Bulk Airtime Purchase", () => {
    it("should throw error if request payload is incomplete", async () => {
      const data = {
        network: "mtn",
        amount: 10,
        ported: false,
        ref: faker.string.uuid(),
      };

      await expect(airtimeInstance.purchase(data)).rejects.toThrow();

      await expect(airtimeInstance.purchase(data)).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should return status true if airtime is purchased", async () => {
      const res = await airtimeInstance.purchase({
        network: "mtn",
        amount: 10,
        recipient: ["08160381840", "08168643908"],
        ported: false,
        ref: faker.string.uuid(),
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
