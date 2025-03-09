import React, { useId } from 'react'
import {Link} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
const ShowAllBlogsPage = () => {
  return (
    <>    
    <div className="container">

            <div className=" row ">
            {
              Array(10).fill(null).map((cur,i)=>{
                return  <Card key={i} />
              
              })
            }
            </div>
            </div>
    </>
  )
}

export default ShowAllBlogsPage


const Card = ()=>{
  const id = uuidv4();
  return <div className="p-2 col-sm-4">
  <div className="card shadow-sm"  >
<img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <Link to={"/blog/"+id} className="btn btn-primary">Go somewhere</Link>
</div>
</div>
</div>
}