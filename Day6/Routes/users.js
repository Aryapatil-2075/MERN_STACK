const express=require("express")
const router=express.Router()
const pool=require("./database_users/dbUser")//import database
const cryptoPsd=require("crypto-js")//import crypto-js 



router.post("/signup",(req,res)=>{//to signup users
    const {name,email,password,mobile}=req.body//to get data from frontend
    const hashPassword=cryptoPsd.SHA256(password).toString()
    //console.log(cryptoPsd.SHA256(password))//how psd is hashed my plain text to hash so use tostring to covert in string
    let sql="insert into users (name,email,password,mobile)values(?,?,?,?)"
    pool.query(sql,[name,email,hashPassword,mobile],(error,data)=>{// to create or excecute query
        res.send(data)//to return data 
 
    })
})
router.post("/signin",(req,res)=>{
    const{email,password}=req.body//not seen in url
    let sql="select * from users where email=? and password=?"
    pool.query(sql,[email,password],(error,data)=>{
        if(error)
        {
            res.send(error)
        }
        else if(data.length=0){
            res.send("Invalid Email or Password")
        }
        
      
        res.send(data)
    })


})

router.get("/",(req,res)=>{
    let {email}=req.query//to get query paramaters//seen in url
    let sql="select * from users where email=?"
    pool.query(sql,[email],(error,data)=>{
        res.send(data)
    })

})

router.delete("/:uid",(req,res)=>{//value is passed not root 
    let uid=req.params.uid//value from path/url
    let sql="delete from users where uid=?"
    pool.query(sql,[uid],(error,data)=>{
        res.send(data)
    })


})

module.exports=router