import React from 'react'
import MyPost from './MyPost'

function Profile() {
    return (
        <div className='container mt-3'>
            {/* banner */}
            <div className=''>
                <img src="https://images.unsplash.com/photo-1632734683089-21a07f3d2646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWN0b3IlMjB3YWxscGFwZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='img-fluid rounded' style={{width:"100%",height:'35vh'}}/>
            </div>
            {/* Profile Image  */}
            <div className='mt-3 container'>
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='img-fluid rounded-circle' style={{ width: '150px',height: '150px' }}/>
                <span className='fs-3 mx-3 fw-bold'>Vishal Kumar Chaubey</span>
                <div className='text-center'>
                    <button className='btn btn-danger px-5'>Edit Profile</button>
                </div>

                {/* Post Section  */}
                <div className='my-3 p-3' style={{backgroundColor:"#FFFFFF"}}>
                    <h3>My Posts.</h3>

                    <div className="row my-4 container text-center">
                        <MyPost />
                        <MyPost />
                        <MyPost />
                        <MyPost />
                        <MyPost />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile