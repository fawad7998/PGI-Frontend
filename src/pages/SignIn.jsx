import React, { useState } from "react";
import styles from ".././styles/pages/SignIn.module.css"

import { placeholders } from "../styles/placeholders/placeholders";
import SignInLogo from ".././image/Group 13116.png"
import { Link, useNavigate } from "react-router-dom";
import { API } from "../services/api";
import { LoginValidatoin } from "../schemas/loginValidationSchema";
import { toast } from "react-toastify";
function SignIn() {
  const [formData, setFormData] = useState({

    businessEmail: "",
    password:""

  })
  const [responseData, setResponseData] = useState({})
  console.log(responseData)
  const navigate = useNavigate()
  const handleChange = (e)=>{
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }
  const handleSubmit =async(e)=>{
    e.preventDefault()


    try {
      const validateData = LoginValidatoin.parse({
        businessEmail: formData.businessEmail,
        password:formData.password
      })
      if(validateData){
        await API.Login(formData).then((data)=>{
          console.log(data)
          if(data?.status == 200){
              setResponseData(data?.data?.data)
            console.log(data?.data?.data)

          }
        }).catch((error)=>console.log(error.message))
      }
   
      if(responseData!={}){
        toast.success("User Login Successfully")
        
        console.log(responseData)
        if(responseData?.token){
          await localStorage.setItem("token",JSON.stringify(responseData?.token))
          
          navigate("/dashboard")}
      }


    } catch (error) {
     console.log(error)

    }
    
 
  }


  return (
   <>
    <div className={styles.signInGrid} >
      {/* LEFT */}
      <div className={styles.login}>
      <div className={styles.loginHeader}>
      <h4>PGI Security System</h4>
      </div>
      <form className={styles.loginBody}>
        <h5 className={styles.loginBodyHeader}>Login</h5>
        <div className={styles.loginBodyContent}>
          <label htmlFor="">Email</label>
          <input type="email" name="businessEmail"  className="border" placeholder={placeholders.signIn.email} value={formData.businessEmail} onChange={handleChange} />
          <label htmlFor="">Password</label>
          <input type="password" name="password"  className="border" placeholder={placeholders.signUp.password} value={formData.password} onChange={handleChange} />

          <Link to={"/forget-password"}>Forget Password?</Link>
          <button className={styles.loginBodyContentButton} onClick={handleSubmit}>Login</button>
          <div className={styles.loginFooter}>
          <Link to={"/need-help"} className={styles.needHelpContent}>Need Help?</Link>
          <Link to={"/sign-up"} >Register</Link>
          </div>
        </div>
      </form>
      </div>
      {/* RIGHT */}
      <div className={styles.logo}>
      <img src={SignInLogo} alt="logo"  />
      </div>
    </div>
   </>
  );
}

export default SignIn;
