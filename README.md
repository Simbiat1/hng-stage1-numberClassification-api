# hng-stage1-numberClassification-api

An API that takes a number and returns interesting mathematical properties about it, alongside a fun fact from a Number API. Built with Node/Express.JS for the HNG12 Internship Stage 1 task.

## Setup Instructions (Local Development)

If you wish to run the API locally, follow these steps:

1.  **Clone the repository:**

```bash
git clone [https://github.com/Simbiat1/hng-stage1-numberClassification-api.git](https://github.com/Simbiat1/hng-stage1-numberClassification-api.git)
cd hng-stage1-numberClassification-api  # To go into the project directory
```

2.  **Install dependencies:**

```bash
npm install
```

3.  **Create a `.env` file in the project's root directory with the following content:**

```
PORT=3000
NUMBERS_API_URL=[http://numbersapi.com](http://numbersapi.com)
```

_Note:_ The original `.env` file is _not_ committed to the repository for security reasons and was implemented to avoid hardcoding.

4.  **Start the server:**

```bash
node index.js
```

The server will start listening on port 3000.

## API Documentation

### Endpoint URL

`https://hng12-stage1-numberclassification-api.onrender.com/api/classify-number/:num`

**`:num`: The number to be classified**

### Request Parameters

**Method: GET**

### Response Status Codes

**200 OK: Successful request. Returns the classification results.**
**400 Bad Request: Invalid input (e.g., non-numeric input).**
**500 Internal Server Error: An error occurred while processing the request.**

### Environment Variables

The Port number and Fun Fact Number API are stored as environment variables on the Render platform to avoid hardcoding into the source code and for configuration purposes.

### Example Usage

You can test the API using `curl`, Postman, or your browser's developer tools. Replace `:num` with the number you want to classify.

**Using (curl):**

```bash
curl http://localhost:3000/api/classify-number/:num  # to test locally
curl [https://hng12-stage1-numberclassification-api.onrender.com/api/classify-number/:num](https://hng12-stage1-numberclassification-api.onrender.com/api/classify-number/:num) # to test deployed API
```

**Using Postman or Browser Developer Tools:**

1. Open Postman or your browser's developer tools (usually by pressing F12).
2. Make a GET request to https://hng12-stage1-numberclassification-api.onrender.com/api/classify-number/:num.

### Response Format

**JSON Response Format (200 OK):**

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11, // sum of its digits
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}
```

**JSON Response Format (400 Bad Request):**

```json
{
  "number": "alphabet",
  "error": true
}
```

## Hire HNG NodeJS Developers

`https://hng.tech/hire/nodejs-developers`
