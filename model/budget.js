const mongoose = require('mongoose');
const budgetSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    totalBudget:{
        type: Number,
        required:true
        
    }

})