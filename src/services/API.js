import request from "./Request"

export const login = async (em,pass) =>{
 try{
    const res = await request({url:'http://localhost:8080/register',method:"POST",data:{email:em,password:pass},auth:false},true);
    return res;
 }  catch (e){
    console.log(e);
 } 
}

export const addtodb = async (jsonEntry) =>{
      try{
         const res = await request({url:'http://localhost:8080/add',method:"POST",data:jsonEntry,auth:true},true);
         return res;
      }catch(e){
         console.log(e);
      }
   }