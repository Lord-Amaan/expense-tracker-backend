const express = require('express');
const authRouter = require('./Router/authRouter');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const expensesRouter = require('./Router/expenseRouter');
const authMiddleware = require('./middleware/auth');
dotenv.config();
const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());
connectDB()
app.get('/',(req,res)=>{
    res.send("API is running....")
})
app.use('/auth',authRouter)
app.use('/expense',authMiddleware,expensesRouter)
app.get('/calc',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a+b;
    res.send(sum);   
    console.log(sum)
})
app.listen(port,()=>{
    console.log("server is running on port ",port)
})