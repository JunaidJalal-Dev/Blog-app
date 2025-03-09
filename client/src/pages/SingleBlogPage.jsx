import React from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import MarkdownView from '../components/MarkdownView'
const SingleBlogPage = () => {

  const {id}  = useParams()

  return (
    <>    
          <div className="container">
            <div className="mb-3">
              <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" alt="" className='w-100 img img-fluid rounded shadow' />
            </div>
            <div className="mb-3">
              <h1>Ttitle of the blog</h1>
            </div>
              <div className='mb-3'>
                <small className='fw-bold'>Author Name</small>
                <p className="text-muted">Posted on {moment(new Date(1709966687327)).startOf('min').fromNow() }</p>
              </div>
              <div className="mb-3">
                <MarkdownView/>
              </div>
          </div>

    </>
  )
}

export default SingleBlogPage