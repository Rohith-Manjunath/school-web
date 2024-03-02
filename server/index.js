const express=require("express");
const app=express();
require("dotenv").config({path:"./config/config.env"})
const cors=require("cors");
const cookieParser=require("cookie-parser");
const bodyParser=require("body-parser");
const { dbConnection } = require("./config/dbConnections");

const corsOptions={
    origin:"*",
    credentials:true
}

const {URI,PORT}=process.env;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser)


dbConnection(URI);

const server=app.listen(PORT,()=>{

    console.log(`Server is listening to port ${PORT}`);

})
process.on('unhandledRejection',(e)=>{
    console.log(`Error: ${e,message}`);
    console.log(`Shutting down server due to unhandled rejection exception`);
    server.close(()=>{
        process.exit(1)
    })
})


process.on('uncaughtException',(e)=>{
    console.log(`Error: ${e,message}`);
    console.log(`Shutting down server due to uncaught exception`);
    server.close(()=>{
        process.exit(1)
    })
})





