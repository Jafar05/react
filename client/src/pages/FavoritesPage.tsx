import React from 'react';
import {useAppSelector} from "../hooks/redux";

const FavoritePage = () => {
    const {favorite} = useAppSelector(state => state.github)

    if(favorite.length === 0) return <p className='text-center'>No items</p>
    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
            <ul className='list-none'>
                {favorite.map(el => (
                    <li key={el}>
                        <a href={el} target='_blank'>{el}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavoritePage;
