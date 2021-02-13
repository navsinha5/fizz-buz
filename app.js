const express = require('express');
const bodyParser = require('body-parser');
const calFizzBuzz = require('./fizz-buzz');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/fizz-buzz', (req, res) => {
    const resBody = [];

    let start = parseInt(req.query.start);
    let stop = parseInt(req.query.stop);

    console.log('start ', start);
    console.log('stop ', stop);

    if(start == NaN && stop == NaN){
       return res.status(400).json({message: 'need start and stop integer'});
    }

    if(start < 0 || stop < 0){
        return res.status(400).json({message: 'integer cannot be less than 0'});
    }

    if(start > stop){
       return res.status(400).json({message: 'start integer cannot be greater than stop integer'});
    }

    for(let n = start; n <= stop; n++){
        resBody.push({in: n, result: calFizzBuzz(n)})
    }

    res.json(resBody);
});


app.listen(8080, () => {
    console.log(`listening on 8080`);
})