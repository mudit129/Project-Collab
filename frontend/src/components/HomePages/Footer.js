import React from 'react'

const Footer = () => {
  return (
    <div style = {{background: "black", color: "white"}}>
        <br></br>
        <div className='text-center key mb-2'>
            <h2>Aeroplatform</h2>
        </div>
        {/* <br></br> */}
        <div className='d-grid gap-2 d-md-flex justify-content-md-center'>
            <p className='mx-4'>Home</p>
            <p className='mx-4'>Projects</p>
            <p className='mx-4'>About Us</p>
        </div>
        <br></br>
    </div>
  )
}

export default Footer
