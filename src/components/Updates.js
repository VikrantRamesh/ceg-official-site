import React from 'react';
import au from '../assets/images/au.jpg';

const Updates = () => {
    return (
        <div class="flex flex-col lg:flex-row items-stretch justify-center bg-gray-100">
            {/* Image and accreditation/statistics section */}
            <div class="w-full lg:w-2/3 relative">
                {/* Image with fade starting from the middle */}
                <div class="relative">
                    <img rel="preload" src={au} alt="Placeholder Image" class="w-full h-full object-cover" />
                    {/* Custom gradient starting from the middle */}
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-red-800" style={{ top: '35%' }}></div>
                </div>

                {/* Statistics section below the image on small screens */}
                <div class="w-full p-4 text-center text-white bg-red-800 lg:bg-transparent lg:absolute lg:bottom-2 lg:left-0">
                    <div class="flex justify-around text-lg font-medium">
                        <div>
                            <p class="lg:text-lg text-sm">Accreditation</p>
                            <h3 class="lg:text-2xl text-blue-300 font-extrabold tracking-wide lg:hover:text-3xl ease-in duration-300">NBA <span class="font-features text-sm lg:text-lg">&</span> NAAC</h3>
                        </div>
                        <div>
                            <p class="lg:text-lg text-sm">NIRF 2023</p>
                            <h3 class="lg:text-2xl text-blue-300 font-extrabold tracking-wide lg:hover:text-3xl ease-in duration-300">14<sup class="font-features sups font-semibold">th</sup> Rank</h3>
                        </div>
                        <div>
                            <p class="lg:text-lg text-sm">QS 2025</p>
                            <h3 class="lg:text-2xl text-blue-300 font-extrabold tracking-wide lg:hover:text-3xl ease-in duration-300">383<sup class="font-features sups font-semibold">rd</sup> Rank</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Updates section */}
            <div class="w-full lg:w-1/3 p-6 bg-gray-200 flex flex-col justify-center">
                <h2 class="text-2xl font-bold mb-4">UPDATES</h2>
                <p>Lorem Ipsum</p>
            </div>
        </div>
    );
};

export default Updates;

