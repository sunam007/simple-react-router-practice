import React from 'react';
import './Meals.css'

const Meals = () => {
    const searchFood = e => console.log(e.target.value);
    return (
        <div className='searchMeal'>
            <input onChange={searchFood} placeholder='Search Food' />
            <button>Search</button>
        </div>
    );
};

export default Meals;