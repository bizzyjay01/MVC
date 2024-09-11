const express = require("express")
const connectDB = require("./db")
const authRouter = require("./routes/authRoutes")
const dotenv = require("dotenv").config()


const app = express()

app.use(express.json())


connectDB()

const PORT = process.env.PORT || 7000

app.listen(PORT, ()=>{
    console.log(`Server started running on Port ${PORT}`)
})

app.get("/", (req,res)=>{
    return res.status(200).json({message:"Welcome to our server"})
})

app.use("/api", authRouter)