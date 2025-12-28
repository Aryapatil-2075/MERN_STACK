function send_result(error,data)
{
    const result={}
    if(data)
    {
        result.status="success",
        result.data=data
    }
    else{
        result.status="failure",
        result.error=error
    }
}
module.exports=send_result