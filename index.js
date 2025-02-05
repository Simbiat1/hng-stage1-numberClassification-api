import express from "express";
import axios from "axios";
import cors from "cors";
import * as property from "./numPropFunc.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/api/classify-number/:num", async(req, res) => {
    const num = req.params.num;
    const numApi = `${process.env.NUMBERS_API_URL}/${num}/math`;

    if (isNaN(num)) {
        return res.status(400).json({
          number: "alphabet",
          error: true,
        })
    }
    try {
    const response = await axios.get(numApi);
   if (response.status >= 200 && response.status < 300){
    const funFact = response.data;

    const results = {
        number: num,
        is_prime: property.isPrime(num),
        is_perfect: property.isPerfect(num),
        properties: [property.isArmstrong(Number(num)), property.getParity(num)].filter(Boolean), // filters boolean value null
        digit_sum: property.sumOfDigits(num),
        fun_fact: funFact
    };
    res.status(200).json(results);
    } else { console.error('API Error:', response.status, response.statusText);
    res.status(response.status).json({ error: 'API request failed' });
    } 
} catch (error) {console.error('Request Error:', error);

    if (error.response) {
      res.status(error.response.status).json({ error: error.message || 'API request failed' });
    } else if (error.request) {
      res.status(500).json({ error: 'No response from API' });
    } else {
      res.status(500).json({ error: error.message || 'An unexpected error occurred' });
    }}
});


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
});