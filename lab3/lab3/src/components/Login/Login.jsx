import React, { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { tokenContext } from '../../context/tokenContext';

export default function Login() {
  let navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  let {setToken} = useContext(tokenContext)


  function login(values) {
    setIsLoading(true);
       axios.post('https://sara7aiti.onrender.com/api/v1/user/signin', values).then((data) => {
      console.log(data);
      if(data.data.message == "welcome") {
        setIsLoading(false);
        navigate('/profile');
        localStorage.setItem("userToken", data.data.token);
        setToken(data.data.token)

      }
    }).catch((err) => {
      setApiError(err.response.data.error);
      setIsLoading(false)
    });
    
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email required"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "Password is not match").required("Password is required")
  })

  let formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: (values) => {
      login(values)
    }
  })
  return (
    <>
      <div className='w-50 mx-auto my-5'>
        <h1>Login</h1>
        {apiError? <div className='alert alert-danger'>{apiError}</div>: ""}
        <form onSubmit={formik.handleSubmit}>
          <div className='form-group mb-3'>
            <input className='form-control' type='email' placeholder='Email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.errors.email && formik.touched.email? <div className='alert alert-danger'> {formik.errors.email}</div> : ""}
          </div>
          <div className='form-group mb-3'>
            <input className='form-control' type='password' placeholder='Password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.errors.password && formik.touched.password? <div className='alert alert-danger'> {formik.errors.password}</div> : ""}
          </div>
          <button type='submit' className='btn btn-dark'>Login</button>
        </form>
      </div>
    </>
  )
}
