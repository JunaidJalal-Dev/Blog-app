import React, { useState } from 'react' 
import MarkdownEditorData from '../components/MarkdownEditorData'
const CreateBlogPage = () => {
 

  return (
    <>
    
          <div className="container">
            <form action="" className="card col-lg-10 mx-auto py-5">
              <div className="card-body">
                <h2 className="text-center mb-4">Create a New Blog Post</h2>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" id="title" placeholder="Enter title"  />
            </div>

            <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input type="text" className="form-control" id="title" placeholder="Enter title"  />
            </div>
            <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input type="text" className="form-control" id="title" placeholder="Enter Image"  />
            </div>
            <div className="mb-3">
              <label htmlFor="content">Content</label>
                <MarkdownEditorData  />
            </div>
            <div className="mb-3">
              <button className='w-full btn btn-primary '>Submit</button>
            </div>
            </div>
            </form>
          </div>
    </>
  )
}

export default CreateBlogPage