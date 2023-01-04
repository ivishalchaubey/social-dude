import React from 'react'
import HomeProfile from './HomeProfile'
import Posts from './Posts'

const Home = () => {
    return (
        <div className='mt-3'>
            <div className="row container-fluid">
                <div className="col-md-4">
                    <HomeProfile />

                </div>
                <div className="col-md-8 shadow-lg" style={{ backgroundColor: 'white' }}>
                    <Posts />
                </div>
            </div>
        </div>
    )
}

export default Home