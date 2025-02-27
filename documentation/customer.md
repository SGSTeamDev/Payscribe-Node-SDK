# Customers

## Get Customers

Fetches a paginated list of customers.

```javascript
const getCustomers = async () => {
  try {
    const response = await payscribe.Customer.list({
      page: 1,
      page_size: 10,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

## Create Customer

Registers a new customer (Tier 0).

```javascript
const createCustomer = async () => {
  try {
    const response = await payscribe.Customer.create({
      first_name: "John",
      last_name: "Doe",
      phone: "+2348160381840",
      email: "john.doe@yopmail.com",
      country: "NG",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

## Upgrade Customer to Tier One

Upgrades a customer to Tier One.

```javascript
const upgradeCustomerToTierOne = async () => {
  try {
    const response = await payscribe.Customer.upgradeToTierOne({
      customer_id: "3dab37c3-38cd-47e7-990c-823e31e83a51",
      dob: "1990-06-20",
      address: {
        street: "1, Victoria Island, Lagos State",
        city: "Victoria Island",
        state: "Lagos",
        country: "NG",
        postal_code: "535011",
      },
      identification_type: "BVN",
      identification_number: "22288771100",
      photo: "https://i.ibb.co/6cfrwhRw/profile-1.jpg",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

## Upgrade Customer to Tier Two

Upgrades a customer to Tier Two.

```javascript
const upgradeCustomerToTierTwo = async () => {
  try {
    const response = await payscribe.Customer.upgradeToTierTwo({
      customer_id: "3dab37c3-38cd-47e7-990c-823e31e83a51",
      identity: {
        type: "NIN",
        number: "22288771100",
        country: "NG",
        image: "https://i.ibb.co/6cfrwhRw/profile-1.jpg",
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

## Create Customer with Full Tiers

Registers a new customer and upgrades them to Tier Two in a single process.

```javascript
const createCustomerWithFullTiers = async () => {
  try {
    const response = await payscribe.Customer.createFull({
      first_name: "Mathew",
      last_name: "Doe",
      phone: "2347044667722",
      email: "mathew.doe@yopmail.com",
      dob: "2001-06-20",
      country: "NG",
      address: {
        street: "56, Adeola Odeku, Victoria Island",
        city: "Ojota",
        state: "Lagos",
        country: "NG",
        postal_code: "882700",
      },
      identification_type: "BVN",
      identification_number: "22288771100",
      photo: "https://i.ibb.co/6cfrwhRw/profile-1.jpg",
      identity: {
        type: "NIN",
        number: "22288771100",
        country: "NG",
        image: "https://i.ibb.co/6cfrwhRw/profile-1.jpg",
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

## Get Customer Details

Retrieves detailed information about a specific customer.

```javascript
const getCustomerDetails = async () => {
  try {
    const response = await payscribe.Customer.details(
      "3dab37c3-38cd-47e7-990c-823e31e83a51"
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

## Get Customer Transactions

Fetches a list of transactions associated with a specific customer.

```javascript
const getCustomerTransactions = async () => {
  try {
    const response = await payscribe.Customer.transactions({
      customer_id: "3dab37c3-38cd-47e7-990c-823e31e83a51",
      page: 1,
      page_size: 10,
      start_date: "2025-01-01",
      end_date: "2025-01-28",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

## Blacklist Customer

Blacklist a customer.

```javascript
const blacklistCustomer = async () => {
  try {
    const response = await payscribe.Customer.blacklist(
      "3dab37c3-38cd-47e7-990c-823e31e83a51"
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

## Whitelist Customer

Whitelist a customer.

```javascript
const whitelistCustomer = async () => {
  try {
    const response = await payscribe.Customer.whitelist(
      "3dab37c3-38cd-47e7-990c-823e31e83a51"
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```
