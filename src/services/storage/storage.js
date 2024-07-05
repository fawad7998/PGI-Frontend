const getToken = ()=>{
    let token = JSON.parse(localStorage.getItem("token"))
    if(token){
        return token
    }else{
        token = JSON.parse(localStorage.getItem("profileToken"))
        return token
    }
}
export {getToken}