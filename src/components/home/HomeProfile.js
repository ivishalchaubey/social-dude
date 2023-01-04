import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeProfile() {
    return (
        <>
            <div className="row container sticky-top">
                <div className='p-5'></div>
                <div className="col-12">
                    <div className='text-center'>
                        <img src="http://ivishalchaubey.tech/static/images/banner1.jpg" alt="" className='img-fluid rounded-circle' style={{ width: '50%', height: '50%' }} />
                        <h5 className='my-3'>Vishal Kumar Chaubay</h5>
                    </div>
                </div>
                <hr />
                <div className="col-12 text-center">
                    <div className="row container-fluid">
                        <div className="col-6">
                            <div className="d-grid gap-2">
                                <NavLink to='/profile' className="btn btn-outline-success">Profile</NavLink>

                            </div>

                        </div>
                        <div className="col-6">
                            <div className="d-grid gap-2">
                                <NavLink to='/editprofile' className="btn btn-outline-danger">
                                    Edit Profile
                                </NavLink>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className='mt-3' />

                <div className="col-12">
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Upload Your Image</label>
                        <input className="form-control" type="file" id="formFile" />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" className="btn btn-outline-primary">Post</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeProfile