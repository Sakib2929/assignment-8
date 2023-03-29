import React, { useState } from 'react';
import jym from '../images/jym pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg'
import football from '../images/football.jpg'
import jogging from '../images/jogging.jpg'
import coding from '../images/coading.jpg'
import test from '../images/test.jpg'
import cricket from '../images/cricket.jpg'
import Exercise from './Exercise/Exercise';
import ExerciseDetails from './ActiviyCard/ExerciseDetails/ExerciseDetails';

const AllExercise = () => {
    const ExerciseDatas=[
        {
            id: '1',
            name: 'GYM',
            image:jym,
            description: 'In the realm of fitness, three-month workout programs dominate the landscape. You’ve even seen plenty of them in our magazine over the years. Are they effective? Absolutely. But we’re going to let you in on an interesting secret: It doesn’t necessarily take 8 or 12 weeks to get your feet wet in the gym.',
            ForAge: '20-25',
            TimeRequired: 50

        },
        {
            id: '2',
            name: 'Cricket',
            image: cricket,
            description: 'In the realm of fitness, three-month workout programs dominate the landscape. You’ve even seen plenty of them in our magazine over the years. Are they effective? Absolutely. But we’re going to let you in on an interesting secret: It doesn’t necessarily take 8 or 12 weeks to get your feet wet in the gym.',
            ForAge: '20-25',
            TimeRequired: 40

        },
        {
            id: '3',
            name: 'Football',
            image: football,
            description: 'In the realm of fitness, three-month workout programs dominate the landscape. You’ve even seen plenty of them in our magazine over the years. Are they effective? Absolutely. But we’re going to let you in on an interesting secret: It doesn’t necessarily take 8 or 12 weeks to get your feet wet in the gym.',
            ForAge: '20-25',
            TimeRequired: 60

        },
        {
            id: '4',
            name: 'Jogging',
            image: jogging,
            description: 'In the realm of fitness, three-month workout programs dominate the landscape. You’ve even seen plenty of them in our magazine over the years. Are they effective? Absolutely. But we’re going to let you in on an interesting secret: It doesn’t necessarily take 8 or 12 weeks to get your feet wet in the gym.',
            ForAge: '20-25',
            TimeRequired: 30

        },
        {
            id: '5',
            name: 'Test',
            image: test,
            description: 'In the realm of fitness, three-month workout programs dominate the landscape. You’ve even seen plenty of them in our magazine over the years. Are they effective? Absolutely. But we’re going to let you in on an interesting secret: It doesn’t necessarily take 8 or 12 weeks to get your feet wet in the gym.',
            ForAge: '20-25',
            TimeRequired: 80

        },
        {
            id: '6',
            name: 'Coding',
            image: coding,
            description: 'In the realm of fitness, three-month workout programs dominate the landscape. You’ve even seen plenty of them in our magazine over the years. Are they effective? Absolutely. But we’re going to let you in on an interesting secret: It doesn’t necessarily take 8 or 12 weeks to get your feet wet in the gym.',
            ForAge: '20-25',
            TimeRequired: 90

        }
    ]
    
    const handleAddToCard =(id)=>{
        console.log('clicked', id)
    }

    return (
        <div>
            <h2 className="text-3xl">Select Today's Exercise</h2>
            <div className='grid mt-8 m-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                ExerciseDatas.map(ExerciseData=> <Exercise
                    key={ExerciseData.id}
                    exercise={ExerciseData}
                    handleAddToCard={handleAddToCard}
                ></Exercise>)
            }
            </div>
           
        </div>
    );
};

export default AllExercise;