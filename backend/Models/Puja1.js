import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Puja1Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    number:{
        type:String,
        required:false
    }
}, {
    timestamps: true, 
});

const Puja1 = mongoose.model('Puja1', Puja1Schema);

export default Puja1;
