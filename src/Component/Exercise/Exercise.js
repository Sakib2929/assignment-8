import React from 'react';

const Exercise = ({exercise, handleAddToCard}) => {
    console.log(exercise);
    const {id, name, image, description, ForAge, TimeRequired } = exercise;
    
    return (

        <div>
            <div className="card bg-base-100 p-3 m-3 shadow-xl">
                <figure><img className='h-60' src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p><small>{ForAge}</small></p>
                    <p><small>{TimeRequired}</small></p>
                    <div className="card-actions justify-end">
                        
                        <button onClick={()=>handleAddToCard(id)} className="btn w-full btn-primary">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise;