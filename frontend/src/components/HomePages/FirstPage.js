import React from 'react'
import { Link, useNavigate} from "react-router-dom";


const FirstPage = () => {

  const navigate = useNavigate();

  return (
    <div style = {{background: "antiquewhite"}}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className='text-center key'>Welcome to the Aerospace Project</h1>
      <h1 className='text-center key mb-4'>Collabration Platform</h1>
      <br></br>
      <br></br>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <button type="button" className="btn btn-outline-success mx-4 my-4" onClick={()=>navigate('/allProjects')}>Explore Projects</button>
        <button type="button" className="btn btn-outline-info mx-4 my-4">Learn More &rarr;</button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default FirstPage
