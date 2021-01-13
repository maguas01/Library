import express from "express";


const app = express(); 
const port = 4545;


app.get('/',  (req, res) => {
    res.send('main endpoint'); 
})


app.listen(port, () => {
    console.log("express running on port:" + port );
});