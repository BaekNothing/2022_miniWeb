const express = require('express');
const router = express.Router();
const fs = require('fs');
const csvParser = require('csv-parser');
const validator = require("validator");
const result = [];

// router.post('/GetSelectData', async (req, res) => {
//     if(result.length === 0){
//             result.length = 0;
//         await fs.createReadStream("./Router/data/data.csv")
//         .pipe(csvParser())
//         .on("data", (data) => {
//             result.push(data);
//         })
//         .on("end", () => {
//             res.send(result);
//         });
//     }
//     else
//         res.send(result);
// });

// router.post('/GetResultData', async (req, res) => {
    
// })

router.post('/SetResultData', async (req, res) => {
    var email = req.query.email;
    var name = req.query.name;
    var answer = req.query.answer;
    var pages = req.query.pages;

    var result = ["email :", email, " name :",name, " answer :", answer, " pages :", pages];

    console.log(result);

    if(validator.isEmail(email))
        await WriteResultData(result);
});

async function WriteResultData(result) {
    const file = "./Router/data/result.csv";
    result;
    
    await fs.open(file,'a',function(err,fd){
        if (err) throw err;
         console.log(fd,'file open complete');}
    );

    await fs.appendFile(
        "./Router/data/result.csv", 
        `${result}\n`,
        function(err, fd){
            if (err) throw err;
            console.log(fd, 'file append complete');
        }
    )
};

module.exports = router;