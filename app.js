const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const alienRouter = require('./routes/aliens');

// MongoDB connection URL
const mongoUrl = "mongodb+srv://ridhurshanict:rkmrSiFKaKdphCOM@cluster0.i4mfxto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/aliens', alienRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const express = require("express");
// const mongoose = require("mongoose");
// const url = "mongodb+srv://ridhurshanict:rkmrSiFKaKdphCOM@cluster0.i4mfxto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const app = express();
// const cors = require("cors");

// mongoose.connect(url,{useNewUrlParser:true})
// const con = mongoose.connection
// con.on('open',()=>{
//     console.log("mongoose is connected");
// })

// app.use(express.json())
// app.use(cors())

// const alienRouter = require('./routes/aliens')
// app.use('/aliens',alienRouter)

// app.listen(5000, () => {
//     console.log("connected is 5000 is running");
// });



// // const express = require("express")
// // const mongoose = require("mongoose")
// // const http = require("http").Server(app)

// // const app = express()
// // // mongodb username = ridhurshanict  and password = rkmrSiFKaKdphCOM

// // mongoose.connect("mongodb+srv://ridhurshanict:rkmrSiFKaKdphCOM@cluster0.i4mfxto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// // http.listen(5000,()=>{
// //     console.log("connected is 5000 is running");
// // })

