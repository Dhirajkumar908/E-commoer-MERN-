const bcrypt=require('bcrypt')

exports.Compare_password= async (password, user_password)=>{
    try{
        const isMatch= await bcrypt.compare(password, user_password);
        return isMatch;
    }catch(e){
        return ({"message":"Error while camparing password"})
    }
}