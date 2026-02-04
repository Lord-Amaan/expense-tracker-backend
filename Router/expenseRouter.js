const express = require('express');
const {addExpense,getExpenses,deleteExpense,updateExpense,categoryWiseExpensesController}= require('../Contoller/expenseController');
const expenseRouter = express.Router();


expenseRouter.get('/getExpenses',getExpenses);
expenseRouter.post('/addExpense',addExpense);
expenseRouter.delete('/deleteExpense/:id',deleteExpense);
expenseRouter.put('/updateExpense/:id',updateExpense);
expenseRouter.get('/categoryWiseExpenses',categoryWiseExpensesController);
module.exports = expenseRouter;