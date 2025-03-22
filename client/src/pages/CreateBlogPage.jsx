import React, { useState } from 'react' 
import MarkdownEditorData from '../components/MarkdownEditorData'
import {Field, Formik} from 'formik'
import * as yup from 'yup'
const CreateBlogPage = () => {
  const initialValues = {
    title:'',
    desc:'',
    image:'',
    content:'',
   
  }

  const validationSchema = yup.object({
    title: yup.string().required('Title is required'),
    desc: yup.string().required('Description is required'),
    image: yup.string().required('Image is required'),
    content: yup.string().required('Content is required'),
  })



  const onSubmitHandler =(values,helpers)=>{
    try {
      
    } catch (error) {
      
    }
  }
 

  return (
    <>
    
          <div className="container">

            <Formik onSubmit={onSubmitHandler} initialValues={initialValues}> 

                { 
                    ({handleSubmit,values,setFieldValue})=>(
                      <form onSubmit={handleSubmit} className="card col-lg-10 mx-auto py-5">
                        {JSON.stringify(values)}
                      <div className="card-body">
                        <h2 className="text-center mb-4">Create a New Blog Post</h2>
                        <div className="form-group">
                          <label htmlFor="title">Title</label>
                          <input type="text" className="form-control" id="title" placeholder="Enter title" value={values.title} onChange={(e)=>setFieldValue('title',e.target.value)}  />
                    </div>
        
                    <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <Field name="desc" type="text" className="form-control" id="title" placeholder="Enter title"  />
                    </div>
                    <div className="form-group">
                          <label htmlFor="image">Image</label>
                          <Field name="image" type="text" className="form-control" id="title" placeholder="Enter Image"  />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="content">Content</label>
                        <MarkdownEditorData  default_value={values.content} setFieldValue={(val)=>setFieldValue('content',val)} />
                    </div>
                    <div className="mb-3">
                      <button className='w-full btn btn-primary '>Submit</button>
                    </div>
                    </div>
                    </form>
                    )
                }
      


                </Formik>


          </div>
    </>
  )
}

export default CreateBlogPage