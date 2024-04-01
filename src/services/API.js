import request from "./Request"

export const login = async (em,pass) =>{
 try{
    const res = await request({url:'http://localhost:8080/register',method:"POST",data:{email:em,password:pass},auth:false},true);
    return res;
 }  catch (e){
    console.log(e);
 } 
}