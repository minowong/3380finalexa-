const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookRouter = require('./routes/bookRouter')

const port = process.env.PORT || 3001;
const URI = "mongodb+srv://test:test@csis3380.hnvszgt.mongodb.net/BookList"

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(URI)
.then(()=>{
    console.log("connected to DB")
})
.catch((err)=>{
    console.log("ERROR: " + err);
})

app.use('/', bookRouter);


app.listen(port, ()=>{
    console.log(`server is starting at port ${port}`)
} );