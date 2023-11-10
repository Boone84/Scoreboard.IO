const express = require("express");

const app = express();

const PORT = 3007;

app.get(`/`, (req, res) =>{
    res.send(`hello world`);
});

app.use("/api", require("./api"));



app.listen(PORT, (err) => {
    if(!err){
        console.log(`listening on port ${PORT}`);
    }
    else{
    console.log(`Server Error`);
    }
});
