const recruiterModel = require('../models/recruiterModel');

const addRecruiter = (data)=>{
    const recruiter= new recruiterModel(data);
    return recruiter.save();
}

const update = (email, data)=>{
const {firstName, lastName, email, company} = data;
return recruiterModel.updateOne({email}, {
    $set: {
        firstName, 
        lastName,
        email,
        company,
        updatedAt: Date.now()
    }
 } );
};

const getRecruiter = (email)=>{
    const filter = {email};
    const projection = { password:1, role:1,email:1 };
    return recruiterModel.findOne(filter, projection);
};

const recruiterCount = ()=>{
    return recruiterModel.count();
} 

module.exports = {getRecruiter, addRecruiter, update};