import React from 'react'
import Login from './Login'
import Signup from './Signup'

const Authentication = () => {
    return (
        <div className=''>
            <div className="row text-center container-fluid p-5 mt-5">
                <div className="col-md-7 p-3">
                    <h1 className='mt-3 p-2 text-start text-primary fw-bold'>
                        socialDudde
                    </h1>
                    <h5 className='mt-3 p-2 text-start'>
                    socialDudde helps you connect and share with the people in your life.
                    </h5>
                </div>
                <div className="col-md-5">
                    {/* <Login /> */}
                    <Signup />
                </div>
            </div>
        </div>
    )
}

export default Authentication