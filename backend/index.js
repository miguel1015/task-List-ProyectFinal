const express = require("express")
const mongoose = require ("mongoose");
const app = express()
require("dotenv").config();
const userRoutes = require("./routes/user") 
const cors = require("cors");
const usuario = require("./routes/usuario");

//midleware
app.use(express.json())
app.use(cors({origin:"*", credentials:true}))
app.use("/api", userRoutes)
app.use("/user", usuario)

app.get("/", (req, res) => {
        res.send("wenas")
})
//conexion

mongoose.set('strictQuery', true);
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("connected to Mogno Db"))
.catch((error) => console.error(error))

app.listen(9000, () =>{
        console.log("server listening port", 9000);
})      