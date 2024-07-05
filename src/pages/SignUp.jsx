import React, { useState } from 'react'
import { placeholders } from "../styles/placeholders/placeholders";
import signUpLogo from ".././image/Group 13116.png"
import styles from "../styles/pages/SignUp.module.css"
import { Link, useNavigate } from 'react-router-dom';
import {API} from "../services/api"
import { registerValidation } from '../schemas/registerValidationSchema';
import { toast } from 'react-toastify';
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessEmail: "",
    phoneNumber: "",
    companyName:""

  })
  const [errors, setErrors] = useState("")
  const [responseData, setResponseData] = useState({})

  const [disable, setDisable] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e)=>{
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }
  const handleSubmit =async(e)=>{
    e.preventDefault()
    setDisable(true)

    try {
      const validateData = registerValidation.parse({
        name: formData.name,
        businessEmail: formData.businessEmail,
        phoneNumber: formData.phoneNumber,
        companyName: formData.companyName
      })
      if(validateData){
       await API.Register(formData).then((data)=>{
          console.log(data)
          if(data?.status == 201){
              setResponseData(data?.data?.data)
            console.log(data?.data?.data)

          }
        }).catch((error)=>console.log(error.message))
      }
      setErrors({})



    } catch (error) {
     console.log(error)
      setErrors( error.message)
    }
    console.log(responseData)
    if(responseData){
      toast.success("User Registered Successfully: Check Mail")
      setDisable(false)
      navigate("/")
    }

  }
  return (
    <>
      <div className={styles.signUpGrid} >
        {/* LEFT */}
        <div className={styles.register}>
          <div className={styles.registerHeader}>
            <h4>PGI Security System</h4>
          </div>
          <form  className={styles.registerBody} >
            {/* <h5 className={styles.registerBodyHeader}>Register</h5> */}
            <div className={styles.registerBodyContent}>
              <p>But men are men,the best sometimes forget.
              </p>
              {/* name, businessEmail, companyName, phoneNumber  */}
              <p> -William Shakespeare</p>
              <label htmlFor="">Name</label>
              <input type="text" name="name"  className="border" placeholder={placeholders.signUp.name} value={formData.name} onChange={handleChange}/>
              <label htmlFor="">Email</label>
              <input type="email" name="businessEmail"  className="border" placeholder={placeholders.signUp.email} value={formData.businessEmail} onChange={handleChange} />
              <label htmlFor="">Company Name</label>
              <input type="text" name="companyName"  className="border" placeholder={placeholders.signUp.companyName}  value={formData.companyName} onChange={handleChange}/>
              <label htmlFor="">Phone Number</label>
              <input type="text" name="phoneNumber"  className="border" placeholder={placeholders.signUp.phone} value={formData.phoneNumber} onChange={handleChange} />


              <button className={`${styles.registerBodyContentButton} ${disable==true? styles.disableButton:""}`} onClick={handleSubmit}disabled={disable}>Register</button>
              <div className={styles.registerFooter}>
                <Link to={"/"}>Already have account? SignIn</Link>

              </div>
              <div className={styles.registerFooterContent}>
                <p>By signing up, you agree to our <span>Terms of Service</span></p>
              </div>
            </div>
          </form>
        </div>
        {/* RIGHT */}
        <div className={styles.logo}>
          <img src={signUpLogo} alt="logo" />
        </div>
      </div>
    </>
  )
}

export default SignUp