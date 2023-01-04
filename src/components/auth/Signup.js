import React from 'react'

const Signup = () => {
    return (
        <div className='container p-4 rounded shadow-lg' style={{ backgroundColor: "#FFFFFF" }}>
            <div className='text-start'>
                <h1 className='fw-bold text-primary'>Sign Up</h1>
                <p>It's quick and easy.</p>
            </div>

            <div>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" placeholder='First Name' className='form-control my-2' />
                        </div>
                        <div className="col-md-6">
                        <input type="text" placeholder='Surname' className='form-control my-2' />
                        </div>
                        <div className="col-md-12">
                        <input type="email" placeholder='Email Address' className='form-control my-2' />
                        </div>
                        <div className="col-md-12">
                        <input type="text" placeholder='Mobile Number' className='form-control my-2' />
                        </div>
                        <div className="col-md-12">
                        <input type="password" placeholder='New Password' className='form-control my-2' />
                        </div>
                        <div className="col-md-12 mt-2">
                            <button className='btn btn-success px-4 p-2'>Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup