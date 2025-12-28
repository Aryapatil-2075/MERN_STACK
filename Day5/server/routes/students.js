const express = require('express');
const router = express.Router();//initialize express router
const mysql=require("../database/databasefile")
const send_result=require("../utils/results")

// Sample route to get all students
router.get('/', (req, res) => {
    let sql="select * from students"
    mysql.query(sql,(error,data)=>{
        res.send(send_result(error,data))
    })
});

router.post('/', (req, res) => {
    let {name,email,course}=req.body
    let sql="insert into students values(?,?,?)"
    mysql.query(sql,[name,email,course],(error,data)=>{
        res.send(send_result(error,data))

    })
});

router.put('/', (req, res) => {
    let{name,email}=req.body
   let sql=" update students set email=? where name=?"  
   mysql.query(sql,[email,name],(error,data)=>{
    res.send(send_result(error,data))
   })
});

router.delete('/', (req, res) => {
    let{email}=req.body
    let sql="delete from students where email=?"
    mysql.query(sql,[email],(error,data)=>{
        res.send(send_result(error,data))
    })
});
module.exports = router;