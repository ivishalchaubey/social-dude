import React from 'react'

function Posts() {
    return (
        <div className='p-3'>
            <div className="card mb-3">
                <div class="card-header">
                    <div className="row">
                        <div className="col-6">
                            <img src="https://images.unsplash.com/photo-1580518337843-f959e992563b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" className='img-fluid rounded-circle' style={{ width: '40px', height: '40px' }} />
                            <span className='p-3'>ivishalchaubey</span>
                        </div>
                        <div className="col-6">
                            <p className='text-end'>...</p>
                        </div>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1580518337843-f959e992563b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className="card-img-top img-fluid" alt="..." />
                <div className="card-footer text-muted">
                    <div className="row">
                        <div className="col-6">
                            Like Comment Share
                        </div>
                        <div className="col-6">
                            <p className='text-end'>Save</p>
                        </div>
                    </div>
                </div>


                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    )
}

export default Posts