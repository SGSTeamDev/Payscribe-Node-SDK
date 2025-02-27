# Responses

## Success Response Structure

```json
{
  "status": true,
  "status_code": 200,
  "description": "Example description",
  "message": { ... }
}
```

## Error Response Structure

```json
{
  "status": ...,
  "status_code": ...,
  "error": ...,
  "description": "Example description",
  "messages": { ... }
}
```

## Response Codes

| Status Code | Description                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------- |
| 200         | Success                                                                                     |
| 201         | Transaction Pending - Reverify using Payscribe trans_id or the ref passed                   |
| 400         | Bad Request, Something missing in your body request                                         |
| 401         | User not authenticated                                                                      |
| 403         | Forbidden request, Contact Support                                                          |
| 404         | Page Not Found                                                                              |
| 405         | Duplicate Transaction                                                                       |
| 406         | Missing Required Information, Please check that you have provided all mandatory information |
| 407         | Invalid product code/token                                                                  |
| 408         | Result Not Found                                                                            |
| 409         | Invalid Amount to process. Transaction Limit                                                |
| 410         | Insufficient money in your wallet                                                           |
| 434         | General Operator Side Error, Transaction Failed                                             |
| 435         | General Database Error, Transaction Failed                                                  |
| 5xx         | Some server-side error                                                                      |
