import React from 'react';
import au from './au.jpg';

const Updates = () => {
    return (
        <div class="flex items-stretch justify-center p-1 bg-gray-100">
        <div class="w-2/3">
            <img src={au} alt="Placeholder Image" class="w-full h-full object-cover" />
        </div>

        <div class="w-1/3 p-6 bg-gray-200 flex flex-col justify-center">
            <h2 class="text-2xl font-bold mb-4">UPDATES</h2>
            <p>Lorem Ipsum</p>
        </div>
        </div>
    );
};

export default Updates;