//npm - node package manager

const mysql=require("mysql2")
const pool=mysql.createPool({//Connection Object
    host:"localhost",
    user:"root",
    password:"root",
    database:"api_db"
})

module.exports=pool
