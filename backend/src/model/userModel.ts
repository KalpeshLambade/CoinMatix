import mongoose,{Schema} from "mongoose";

const user = new Schema({
    username:{
        type:String,
        required:true,
        validate:{
            validator:(value:string)=>{
                if(value.length <5)  throw new Error("UserName should have at least 5 characters");
                if(/\s/.test(value)) throw new Error("UserName should not have any black spaces");
                if(/[^!@#$%^&*]/.test(value)) throw new Error("Special characters are not allowed");
            }
        }
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

export default mongoose.model("User",user)