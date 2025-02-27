const { faker } = require("@faker-js/faker");

const app = require("../app");

describe("Betting Service", () => {
  let bettingInstance;

  beforeEach(async () => {
    // process.env.PUBLIC_KEY from env.test
    bettingInstance = app(process.env.PUBLIC_KEY).Betting;
  });

  describe("List providers", () => {
    it("should list providers and return status as true", async () => {
      const res = await bettingInstance.providers();

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

  describe("Lookup bet account", () => {
    it("should throw error if request payload is incomplete", async () => {
      const data = {
        bet_id: "bet9ja",
      };

      await expect(bettingInstance.lookup(data)).rejects.toThrow();

      await expect(bettingInstance.lookup(data)).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should return status true if airtime is purchased", async () => {
      const res = await bettingInstance.lookup({
        customer_id: "22540700",
        bet_id: "bet9ja",
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

  describe("Fund bet account wallet", () => {
    it("should throw error if request payload is incomplete", async () => {
      const data = {
        bet_id: "bet9ja",
        customer_name: "rockeyplayer",
        amount: 100,
        ref: faker.string.uuid(),
      };

      await expect(bettingInstance.vend(data)).rejects.toThrow();

      await expect(bettingInstance.vend(data)).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should return status true if airtime is purchased", async () => {
      const res = await bettingInstance.vend({
        bet_id: "bet9ja",
        customer_id: "22540700",
        customer_name: "rockeyplayer",
        amount: 100,
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
