const express = require('express');
const router = express.Router();
const fs = require('fs');
const csvParser = require('csv-parser');
const result = [];

router.get('/selectData', async (req, res) => {
    if(result.length === 0){
            result.length = 0;
        await fs.createReadStream("./Router/data/data.csv")
        .pipe(csvParser())
        .on("data", (data) => {
            result.push(data);
        })
        .on("end", () => {
            res.send(result);
        });
    }
    else
        res.send(result);
});

router.get('/resultData', async (req, res) => {
    if (result.length === 0) {
        result.length = 0;
        await fs.createReadStream("./Router/data/data.csv")
            .pipe(csvParser())
            .on("data", (data) => {
                result.push(data);
            })
            .on("end", () => {
                res.send(result);
            });
    }
    else
        res.send(result);
});

module.exports = router;