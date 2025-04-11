const  express = require('express');
const morgan = require('morgan');
const app = express();

const port = 3000;

app.get('/', (req, res) =>{
    res.send("Hello Puja, I am middleware");
});

app.listen('port', () =>{
    console.log(`server is running on the ${port}`);
});
