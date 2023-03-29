import React from 'react';
import AddBreak from './AddBreak/AddBreak';
import Details from './Details/Details';
import ExerciseDetails from './ExerciseDetails/ExerciseDetails';

const ActivityCard = () => {
    return (
        <div>
            <Details></Details>
            <AddBreak></AddBreak>
            <ExerciseDetails></ExerciseDetails>
        </div>
    );
};

export default ActivityCard;