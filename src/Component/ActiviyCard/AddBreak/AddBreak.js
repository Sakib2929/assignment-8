import React from 'react';

const AddBreak = () => {
    return (
        <div>
            <h1 className='text-2xl'>Add A Break</h1>
            <div className='pt-4 grid grid-cols-5 gap-4'>
                <h3>10m</h3>
                <h3>20m</h3>
                <h3>30m</h3>
                <h3>40m</h3>
                <h3>50m</h3>
            </div>
        </div>
    );
};

export default AddBreak;