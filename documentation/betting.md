# Betting

## Get Betting Providers

Retrieves a list of supported betting providers.

```javascript
const getBettingProviders = async () => {
  try {
    const response = await payscribe.Betting.providers();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

## Lookup Bet Account

Validates a bet account.

```javascript
const lookupBetAccount = async () => {
  try {
    const response = await payscribe.Betting.lookup({
      customer_id: "22540700",
      bet_id: "bet9ja",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

## Fund Bet Account Wallet

Processes a deposit to a bet account.

```javascript
const fundBetAccountWallet = async () => {
  try {
    const response = await payscribe.Betting.vend({
      bet_id: "bet9ja",
      customer_id: "22540700",
      customer_name: "rockeyplayer",
      amount: 100,
      ref: "3d6cd472-e2af-4944-8e24-16db4e8c8ec1",
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```
