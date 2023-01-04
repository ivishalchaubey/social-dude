import React from 'react'

const Login = () => {
    return (
        <div>
            <form className='container p-4 rounded shadow-lg' style={{ backgroundColor: "#FFFFFF" }}>
                <input type="text" placeholder='Username' className='form-control my-3 p-2' />
                <input type="password" placeholder='Password' className='form-control my-3 p-2' />
                <div className="d-grid gap-2 my-3">
                    <button className="btn btn-primary" type="button">LogIn</button>
                </div>
                <div className='text-center'>
                    <a href="#" >Forgotten password?</a>
                </div>
                <hr />
                <div className='text-center'>
                    <button className='btn btn-success'>Create New Account</button>
                </div>
            </form>
        </div>
    )
}

export default Login