import React from 'react';
import img from '../../../images/jogging.jpg'


const Details = () => {
    return (
        <div>
            <div className="avatar justify-center items-center">
                <div className="w-24 rounded-full">
                    <img src={img} />
                </div>
                <div className='pt-6 pl-3'>
                    <p>Sakib</p>
                    <small>Raozan, Chittagong.</small>
                </div>
            </div>
            <div className='flex p-5'>
                <div className='p-3'>
                    <h3>75<small>kg</small></h3>
                    <h3>Weight</h3>
                </div>
                <div className='p-3'>
                    <h3>6.5</h3>
                    <h3>Height</h3>
                </div>
                <div className='p-3'>
                    <h3>25<small>yrs</small></h3>
                    <h3>Age</h3>
                </div>
            </div>
        </div>
    );
};

export default Details;