const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb+srv://ridhurshanict:rkmrSiFKaKdphCOM@cluster0.i4mfxto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const app = express();

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection
con.on('open',()=>{
    console.log("mongoose is connected");
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(5000, () => {
    console.log("connected is 5000 is running");
});



// const express = require("express")
// const mongoose = require("mongoose")
// const http = require("http").Server(app)

// const app = express()
// // mongodb username = ridhurshanict  and password = rkmrSiFKaKdphCOM

// mongoose.connect("mongodb+srv://ridhurshanict:rkmrSiFKaKdphCOM@cluster0.i4mfxto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// http.listen(5000,()=>{
//     console.log("connected is 5000 is running");
// })

