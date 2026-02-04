const expenseModel = require('../model/expense');
const mongoose = require('mongoose');
const categoryWiseExpenses = async (userId) => {
 
    return await expenseModel.aggregate([
        { $match : {userId: new mongoose.Types.ObjectId(userId)} },
        {
            $group:{
                _id: "$category",
                totalAmount : { $sum : "$amount"}
            }
        },
        {
            $project:{
                category :"$_id",
                totalAmount:1,
                _id:0
            }
        }
    ])
    
}
module.exports = {categoryWiseExpenses};