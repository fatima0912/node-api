const mongoose =  require('mongoose');
const recruiterModel= mongoose.model('recruiter', {
      firstName: {
            type:String,
            required:[true, 'first name is required']
        },
    lastName: {
        type: String,
        require:[true, 'last name is required']
    },
    company:{   
        type:String
    },
    id:{
        type:String,
        require:[true, 'email is mandatory'],
        unique: true,
        validate: {
            validator: v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v),
            message: () => 'Invalid Email'
        }
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:Number,
        default:1
    },
    createdAt: Date,
    updatedAt: { type: Date, default: Date.now() }

});
module.exports = recruiterModel;
