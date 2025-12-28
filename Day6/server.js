const express=require("express")
const app=express()
const userRouter=require("./Routes/users")//import router user

app.use((req,res,next)=>{//to check the url and allow for routing
    if (req.url=="/users/signin" || req.url=="/users/signup")
    {
        next()
    }
    else{
        res.send("You first need to authorized ")
    }
})
app.use(express.json())//to convert string to json object
app.use("/users",userRouter)//use middleware to access the user route

app.listen(4000,()=>{
    console.log("Server started on 4000....")
})


//jwt -> authentication
//create thejwt token
//inside the payload store the data that needs to be encrypted into the token
//sign() encrypt payload + secret = token 
//headers->token to pass, token to authenticate for every request of valid users
// verify(token,config.secret) 


//Authorization 