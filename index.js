const  express = require('express');
const morgan = require('morgan');
const app = express();

const port = 3000;

// middleware

const loggerMiddleware = (req,res,next) =>{
    const start = Date.now();
    const timestamp = new Date().toISOString();
    const Name = "Puja";
    
    res.on('finish', () =>{
        const duration = Date.now() - start;
        console.log(`My Name is: ${Name}`);
        console.log(`Timestam:- ${timestamp}`);
        console.log(`duration:- ${duration}ms`);
        console.log(`Ip Address:- ${req.ip}`);
        console.log(`Methods:- ${req.method}`);
        console.log(`Original URl:- ${req.originalurl}`);
        console.log(`Status Code:- ${req.statusCode}`);
    });

    next();
};

// using middleware
app.use(loggerMiddleware);

app.get('/', (req, res) =>{
    res.send("Hello Puja, I am middleware!");
});

app.listen(port, () =>{
    console.log(`server is running on the ${port}`);
});
