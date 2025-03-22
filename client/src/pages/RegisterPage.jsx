import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
const RegisterPage = () => {
  const [re_enter,set_re_enter] = useState(true)


  const validationSchema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
    confirm_password: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    name: yup.string().required('Name is required'),
  })
  const initialValues= {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  }

  const onSubmitHandler = (values,helpers)=>{}

  return (
    <>
   <section className="vh-100" style={{backgroundColor: '#eee'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: 25}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</p>
                <Formik onSubmit={onSubmitHandler} initialValues={initialValues} validationSchema={validationSchema}>
                <Form className="mx-1 mx-md-4">
                <div className="d-flex flex-row align-items-center mb-4">
                 <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                 <div className="form-outline flex-fill mb-0">
                   <Field name="name" type="text" id="form3Example3c" className="form-control" placeholder="Enter Name" />
                 
                   <ErrorMessage name='name' className='text-xs text-danger' component={'p'} />
                 </div>
               </div>
               <div className="d-flex flex-row align-items-center mb-4">
                 <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                 <div className="form-outline flex-fill mb-0">
                   <Field name="email" type="email" id="form3Example3c" className="form-control" placeholder="Enter Email" />
                 
                   <ErrorMessage name='email' className='text-xs text-danger' component={'p'} />
                 </div>
               </div>
               <div className="d-flex flex-row align-items-center mb-4">
                 <i className="fas fa-lock fa-lg me-3 fa-fw" />
                 <div className="form-outline flex-fill mb-0">
                   <Field name="password" type="password" id="form3Example4c" className="form-control" placeholder="Enter Password" />
                  
                   <ErrorMessage name='password' className='text-xs text-danger' component={'p'} />

                 </div>
               </div>
               <div className="d-flex flex-row align-items-center mb-4">
                 <i className="fas fa-lock fa-lg me-3 fa-fw" />
                 <div className="form-outline flex-fill mb-0">
                 <div className="input-group">
                 <Field name="confirm_password" type={re_enter?"password":"text"} id="form3Example4c" className="form-control" placeholder="Re-Enter Password" />
                <button type='button' onClick={()=>set_re_enter(!re_enter)} className='input-group-text'>
                  {
                    re_enter?   <FaEye  />:
                       <FaEyeSlash/>
                  }    
              
                </button>
                 </div>
                  
                   <ErrorMessage name='confirm_password' className='text-xs text-danger' component={'p'} />

                 </div>
               </div>
             
               <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                 <button type="button" style={{width:'100%'}} className="btn btn-primary btn-lg">Register</button>
               </div>
               <div className="mb-3 text-end">
                 <p className="small text-center text-muted mb-4">Already have an account? <Link  to="/login">Login</Link></p>
               </div>
             </Form>
                </Formik>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sample image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default RegisterPage