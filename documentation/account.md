# My Account

## Get Balance

Retrieves your Payscribe account balance.

```javascript
const getBalance = async () => {
  try {
    const response = await payscribe.balance();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```
