

const expenseSchema = require("../model/expense")
const {categoryWiseExpenses} = require('../services/expenseServices');
const  addExpense = async (req,res)=>{
const {amount,category,description} = req.body;
const userId = req.user.id
const expense = await expenseSchema.create({
userId:userId,
amount:amount,
category:category,
description:description
})
if(!expense){
    return res.status(500).json({message : "something went wrong"})
}
res.status(201).json({msg:"expense added succesfully",expense:expense})
}

const getExpenses = async(req,res)=>{
    const userId = req.user.id;

    const expenses = await expenseSchema.find({
        userId:userId
    })
    res.json({
        expenses : expenses
    })
}
const deleteExpense = async(req,res)=>{
    const expenseId = req.params.id;
    const user = req.user.id;
    const deleteExpense = await expenseSchema.findByIdAndDelete({
        expenseId:expenseId,
        userId:user
    });
    if(!deleteExpense){
        return res.status(404).json({message : "expense not found"})
    }
    return res.status(200).json({message:"expense deleted successfully"})
}

const updateExpense = async(req,res)=>{
    const expenseId = req.params.id;
    const userId = req.user.id;
    const {amount,category,description} = req.body;
    const updateExpense = await expenseSchema.findByIdAndUpdate({_id:expenseId,userId:userId},{
        amount:amount,
        category:category,
        description:description
        
    },{new:true});
    if(!updateExpense){
        return res.status(404).json({message : "expense not found"})
    }
    return res.status(200).json({message:"expense updated successfully",expense:updateExpense})
}
const categoryWiseExpensesController = async(req,res)=>{
   try {
    const userId = req.user.id;
    const expenses = await categoryWiseExpenses(userId);   
    res.status(200).json({expenses:expenses}) 
   } catch (error) {
    res.status(500).json({message:error.message})
   }

}
module.exports={addExpense,getExpenses,deleteExpense,updateExpense,categoryWiseExpensesController}