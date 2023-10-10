import React, { useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const validate = (values) => {
    let errors = {}
    if(!values.name) {
      errors.name = "Name is required"
    }else if(values.name.length < 3) {
      errors.name = "Name must be more than 3"
    }else if (values.name.length > 15) {
      errors.name = "Name must be less than 16"
    }

    if(!values.email) {
      errors.email = "Email must be required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "please enter a valid Email"
    }

    if(!values.password) {
      errors.password = "Password is required"
    }else if (!/^[A-Z][a-z0-9]{3,8}$/i.test(values.password)) {
      errors.password = "Password is not match"
    }

    if(!values.rePassword) {
      errors.rePassword = "Confirm password is required"
    }else if (values.password != values.rePassword) {
      errors.rePassword = "Confirm password does not match Password"
    }

    if(!values.age) {
      errors.age = "Age is required"
    }else if (values.age < 10) {
      errors.age = "Age must be more than 10 years"
    }else if (values.age > 60) {
      errors.age = "Age must be less than 60 years"
    }

    return errors;
  }

  let navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  function register(values) {
    setIsLoading(true);
       axios.post('https://sara7aiti.onrender.com/api/v1/user', values).then((data) => {
      console.log(data);
      if(data.data.message == "Added") {
        setIsLoading(false)
        navigate('/login')
      }
    }).catch((err) => {
      setApiError(err.response.data.error);
      setIsLoading(false)
    });
    
  }
  const formik = useFormik({
    initialValues: {
      name:"",
      email:"",
      password:"",
      rePassword:"",
      age:0
  
    }, validate,
    onSubmit: (values) => {
      register(values)
    }
  })
  return (
    <div className='w-50 mx-auto my-5'>
      <h1 className=''>Register</h1>
      {apiError? <div className='alert alert-danger'>{apiError}</div>: ""}
      <form onSubmit={formik.handleSubmit}>
        <div className='form-group mb-3'>
          <input className='form-control' onBlur={formik.handleBlur} placeholder='User name' name='name' value={formik.values.name} onChange={formik.handleChange} />
          {formik.errors.name && formik.touched.name? <div className='alert alert-danger'> {formik.errors.name}</div> : ""}
        </div>
        <div className='form-group mb-3'>
          <input className='form-control' onBlur={formik.handleBlur} placeholder='Email' name='email' value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email? <div className='alert alert-danger'> {formik.errors.email}</div> : ""}
        </div>
        <div className='form-group mb-3'>
          <input className='form-control' onBlur={formik.handleBlur} placeholder='Password' name='password' value={formik.values.password} onChange={formik.handleChange} type='password'/>
          {formik.errors.password && formik.touched.password? <div className='alert alert-danger'> {formik.errors.password}</div> : ""}
        </div>
        <div className='form-group mb-3'>
          <input className='form-control' onBlur={formik.handleBlur} placeholder='Confirm password' name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} type='password' />
          {formik.errors.rePassword && formik.touched.rePassword? <div className='alert alert-danger'> {formik.errors.rePassword}</div> : ""}
        </div>
        <div className='form-group mb-3'>
          <input className='form-control' onBlur={formik.handleBlur} placeholder='Age' name='age' value={formik.values.age} onChange={formik.handleChange} />
          {formik.errors.age && formik.touched.age? <div className='alert alert-danger'> {formik.errors.age}</div> : ""}
        </div>
        <button type='submit' className='btn btn-dark'>
        Register
        </button>
      </form>
    </div>
  )
}
