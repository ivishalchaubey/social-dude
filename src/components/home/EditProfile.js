import React from 'react'

const EditProfile = () => {
    return (
        <div className='container'>
            <h2 className='mt-3 bg-primary text-light p-3 rounded'>Edit Profile</h2>
            <form className='container'>
                <div className="row container p-3 mt-3">
                    <div className='col-md-6'>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Edit Mobile No.</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Edit Profile Photo</label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Edit Cover Image</label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>
                    </div>

                    <div className='text-center'>
                        <button className='btn btn-success btn-lg px-5'>Edit</button>
                    </div>
                </div>



            </form>
        </div>
    )
}

export default EditProfile;