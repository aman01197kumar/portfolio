import React from 'react'

function ContactMe() {
  return (
    <div className="p-3 mt-5">
      <div className="border border-success p-5 ">
        <div className="h3 text-white text-decoration-underline">Contact Me</div>
        <div className='d-flex'>
            <div>
                <div className='fs-5 text-secondary'>Contact me on</div>
                <div className='d-flex justify-content-between'>
                <i className="bi bi-linkedin text-primary-emphasis fs-3"></i>
                <i className="bi bi-instagram text-primary fs-3"></i>
                <i className="bi bi-facebook text-primary fs-3"></i>
                <i className="bi bi-whatsapp text-primary fs-3"></i>
                <i className="bi bi-envelope-at text-primary fs-3"></i>

                </div>
            </div>
        </div>
       
      </div>
    </div>
  )
}

export default ContactMe