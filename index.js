import express from "express";
import cors from "cors";
import * as property from "./numPropFunc.js";

const app = express();
const port = 3000;

app.use(cors());

app.get("/number/:num", (req, res) => {
    const num = req.params.num;

    if (isNaN(num)) {
        return res.status(400).json({
          number: "alphabet",
          error: true,
        })
    }

    const results = {
        number: num,
        is_prime: property.isPrime(num),
        is_perfect: property.isPerfect(num),
        properties: [property.isArmstrong(Number(num)), property.getParity(num)],
        digit_sum: property.sumOfDigits(num),
    };
    res.status(200).json(results);
});

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
});