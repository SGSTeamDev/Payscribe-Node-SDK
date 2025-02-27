const { faker } = require("@faker-js/faker");

const app = require("../app");

describe("Customer Service", () => {
  let customerInstance;
  let customer;

  beforeEach(async () => {
    // process.env.PUBLIC_KEY from env.test
    customerInstance = app(process.env.PUBLIC_KEY).Customer;

    const createCustomer = await customerInstance.create({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      phone: faker.phone.number("+234##########"),
      email: faker.internet.email(),
      country: "NG",
    });

    customer = createCustomer.message.details;
  });

  describe("List Customers", () => {
    it("should throw error if customer list is not returned", async () => {
      const data = {};

      await expect(customerInstance.create(data)).rejects.toThrow();

      await expect(customerInstance.create(data)).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should list customers and return status as true", async () => {
      const res = await customerInstance.list({
        page: 1,
        page_size: 10,
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

  describe("Create Customer", () => {
    it("should throw error if request payload is incomplete", async () => {
      const data = {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        phone: faker.phone.number("+234##########"),
        country: "NG",
      };

      await expect(customerInstance.create(data)).rejects.toThrow();

      await expect(customerInstance.create(data)).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should create customer with tier 0", async () => {
      const res = await customerInstance.create({
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        phone: faker.phone.number("+234##########"),
        email: faker.internet.email(),
        country: "NG",
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

  describe("Upgrade customer to Tier 1", () => {
    it("should throw error if request payload is incomplete", async () => {
      const data = {
        dob: "1990-06-20",
        address: {
          street: `${faker.location.streetAddress()}`,
          city: "Victoria Island",
          state: "Lagos",
          country: "NG",
          postal_code: "535011",
        },
        identification_type: "BVN",
        identification_number: "22288771100",
        photo: faker.image.avatar(),
      };

      await expect(customerInstance.upgradeToTierOne(data)).rejects.toThrow();

      await expect(
        customerInstance.upgradeToTierOne(data)
      ).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should upgrade customer with tier 1", async () => {
      const res = await customerInstance.upgradeToTierOne({
        customer_id: customer.customer_id,
        dob: "1990-06-20",
        address: {
          street: `${faker.location.streetAddress()}`,
          city: "Victoria Island",
          state: "Lagos",
          country: "NG",
          postal_code: "535011",
        },
        identification_type: "BVN",
        identification_number: "22288771100",
        photo: faker.image.avatar(),
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

  describe("Upgrade customer to Tier 2", () => {
    it("should throw error if request payload is incomplete", async () => {
      const data = {
        identity: {
          type: "NIN",
          number: "22288771100",
          country: "NG",
          image: faker.image.avatar(),
        },
      };

      await expect(customerInstance.create(data)).rejects.toThrow();

      await expect(customerInstance.create(data)).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should upgrade customer with tier 2", async () => {
      const res = await customerInstance.upgradeToTierTwo({
        customer_id: customer.customer_id,
        identity: {
          type: "NIN",
          number: "22288771100",
          country: "NG",
          image: faker.image.avatar(),
        },
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

  describe("Create customer with full tiers", () => {
    it("should throw error if request payload is incomplete", async () => {
      const data = {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        phone: faker.phone.number("+234##########"),
        email: faker.internet.email(),
        country: "NG",
        dob: "1990-06-20",
        address: {
          street: `${faker.location.streetAddress()}`,
          city: "Victoria Island",
          state: "Lagos",
          country: "NG",
          postal_code: "535011",
        },
        photo: faker.image.avatar(),
        identity: {
          type: "NIN",
          number: "22288771100",
          country: "NG",
          image: faker.image.avatar(),
        },
      };

      await expect(customerInstance.createFull(data)).rejects.toThrow();

      await expect(customerInstance.createFull(data)).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should upgrade customer with full tiers", async () => {
      const res = await customerInstance.createFull({
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        phone: faker.phone.number("+234##########"),
        email: faker.internet.email(),
        country: "NG",
        dob: "1990-06-20",
        address: {
          street: `${faker.location.streetAddress()}`,
          city: "Victoria Island",
          state: "Lagos",
          country: "NG",
          postal_code: "535011",
        },
        identification_type: "BVN",
        identification_number: "22288771100",
        photo: faker.image.avatar(),
        identity: {
          type: "NIN",
          number: "22288771100",
          country: "NG",
          image: faker.image.avatar(),
        },
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

  describe("Get customer details", () => {
    it("should throw error if request payload is incomplete", async () => {
      await expect(customerInstance.details(1)).rejects.toThrow();

      await expect(customerInstance.details(1)).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should return customer details", async () => {
      const res = await customerInstance.details(customer.customer_id);

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

  describe("Get customer transactions", () => {
    it("should throw error if request payload is incomplete", async () => {
      const data = {
        customer_id: customer.customer_id,
        page: 1,
        page_size: 10,
      };

      await expect(customerInstance.transactions(data)).rejects.toThrow();

      await expect(customerInstance.transactions(data)).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should return customer transactions", async () => {
      const res = await customerInstance.transactions({
        customer_id: customer.customer_id,
        page: 1,
        page_size: 10,
        start_date: "2025-01-01",
        end_date: "2025-01-28",
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

  describe("Blacklist customer", () => {
    it("should throw error if request payload is incomplete", async () => {
      await expect(customerInstance.blacklist()).rejects.toThrow();

      await expect(customerInstance.blacklist()).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should return status true if customer is blacklisted", async () => {
      const res = await customerInstance.blacklist(customer.customer_id);

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

  describe("Whilelist customer", () => {
    it("should throw error if request payload is incomplete", async () => {
      await expect(customerInstance.whitelist()).rejects.toThrow();

      await expect(customerInstance.whitelist()).rejects.toMatchObject({
        status: expect.anything(),
        status_code: expect.anything(),
        error: expect.anything(),
        description: expect.any(String),
        messages: expect.any(Object),
      });
    });

    it("should return status true if customer is whitelisted", async () => {
      const res = await customerInstance.whitelist(customer.customer_id);

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
