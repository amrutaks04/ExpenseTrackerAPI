const mongoose=require ('mongoose')
const expenseTrackerSchema=new mongoose.Schema({
    amount:{
        type:Number
    },
    category:{
        type:String
    },
    date:{
        type:String
    }
})

//model - with this i can access db
const Expense=mongoose.model('expensedetails',expenseTrackerSchema) //first para-'expensedetails' is the name of the collection name,second para-schema name
//exporting model
module.exports={Expense}