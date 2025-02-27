# Airtime

## Single Airtime Purchase

Purchases airtime for a single recipient.

```javascript
const singleAirtimePurchase = async () => {
  try {
    const response = await payscribe.Airtime.purchase({
      network: "mtn",
      amount: 10,
      recipient: "08160381840",
      ported: false,
      ref: "b4363c03-a069-42b5-bfe8-deb895e162f1",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

## Bulk Airtime Purchase

Purchases airtime for multiple recipients.

```javascript
const bulkAirtimePurchase = async () => {
  try {
    const response = await payscribe.Airtime.purchase({
      network: "mtn",
      amount: 10,
      recipient: ["08160381840", "08168643908"],
      ported: false,
      ref: "b4363c03-a069-92b5-bfe8-deb895e162f2",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```
