# MISC

## Get Services

Fetches a list of available services.

```javascript
const getServices = async () => {
  try {
    const response = await payscribe.services();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```

## Get Services by Category

Fetches services grouped by category.

```javascript
const getServicesByCategory = async () => {
  try {
    const response = await payscribe.services({ group_by: "betting" });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
```
