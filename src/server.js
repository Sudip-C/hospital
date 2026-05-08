require("dotenv").config();

const app = require('./app')
const connectDB = require('./config/db.js')

const PORT = process.env.PORT || 5000;


connectDB().then(()=>{
    app.get('/', (req, res) => {
  res.send("Hospital Management API Running...");
});
    app.listen(PORT,()=>{
        console.log('server is running in port '+ PORT)
    })
}).catch((err)=>{
    console.error("Failed to connect to MongoDB:", err.message);
})
