const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const path = require("path");
const colors=require('colors')
const dotenv=require('dotenv')
const connectDb = require('./config/connectDb')
//congig dot env file
dotenv.config();
//database call
connectDb();

//rest object 
const app=express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
//user routes
app.use('/api/v1/users',require('./routes/userRoute'))
//tranctaion routes
app.use('/api/v1/transections',require('./routes/transectionRoutes'))

//static files
app.use(express.static(path.join(__dirname, "./front/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./front/build/index.html"));
});
//static files
app.use(express.static(path.join(__dirname, "./front/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./front/build/index.html"));
});

//port
const PORT=5000 || process.env.PORT;

//listen server
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});


