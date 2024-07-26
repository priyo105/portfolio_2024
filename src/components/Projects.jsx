import React from 'react'
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Wise from './projects/Wise';
import Picktik from './projects/PickTik';
import Verofy from './projects/Verofy';
import EkkBaz from './projects/EkkBaz';
import WellBeing from './projects/Wellbeing';

function Projects() {

    const images = [
        "./wisetracker.png",
        "./git.png"
        // Add more image paths here
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div id="project" className='p-4 xl:p-40'>
            <h1 className='text-center text-yellow-500 font-customFont font-semibold text-2xl'>Explore My Projects</h1>
            <hr className='border-slate-700 w-2/5 text-center align-middle mx-auto mt-20'></hr>

            <Wise />
            <hr className='border-slate-700 w-4/5 text-center align-middle mx-auto mt-20'></hr>

            <Picktik />
            <hr className='border-slate-700 w-4/5 text-center align-middle mx-auto mt-20'></hr>

            <Verofy />
            <hr className='border-slate-700 w-4/5 text-center align-middle mx-auto mt-20'></hr>

            <EkkBaz />
            <hr className='border-slate-700 w-4/5 text-center align-middle mx-auto mt-20'></hr>

            <WellBeing />
            <hr className='border-slate-700 w-4/5 shadow-2xl border-s-sky-700  text-center align-middle mx-auto mt-20'></hr>

        
        </div>
    )
}

export default Projects