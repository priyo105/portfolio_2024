import React, { useState } from 'react'
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import mp3 from '../sounds/hov.mp3'
import PageTransition from './TransitionPageAnimationComponent';
import MobileNavigation from './projects/MobileNav';


export default function Header() {
    const [play, onLoad] = useSound(mp3);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleClick = (id) => {
        setIsTransitioning(true);
        setTimeout(() => {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            setIsTransitioning(false);
        }, 1200); // Ensure this timeout is longer than the transition duration
    };

    return (

        <div>
              <MobileNavigation handleClick={handleClick} />

              <header className='hidden lg:flex fixed top-0.1 w-full bg-black text-gray-300 z-50 mb-36 '>
            <PageTransition isActive={isTransitioning} />

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0.1, 0.4, 0.5, 1], scale: [1, 1.5, 1], rotate: [-180, 0] }}
                transition={{ duration: 3 }}
                className='flex'
                onMouseEnter={play}
            >
                <p className='text-[#D3D3D3] pt-20 pl-20 text-xl font-customFont'>Adnan Kamal</p>
            </motion.div>

            <nav className="items-center font-bold flex flex-row text-[#D3D3D3] justify-center mx-auto gap-10 pt-20 font-customFont">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='flex'
                    onMouseEnter={play}
                >

                    <a onClick={() => handleClick('home')}>
                        <p className='hover:text-yellow-500 font-bold hover:text-2xl hover:cursor-pointer'>Home</p>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .7 }}
                    className='flex'
                    onMouseEnter={play}
                >
                    <a onClick={() => handleClick('skills')}>
                        <p className='hover:text-yellow-500 font-bold hover:text-2xl hover:cursor-pointer'>Skills</p>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .9 }}
                    className='flex'
                    onMouseEnter={play}
                >
                    <a onClick={() => handleClick('exp')}>
                        <p className='hover:text-yellow-500 font-bold hover:text-2xl hover:cursor-pointer'>Experience</p>
                    </a>                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className='flex'
                    onMouseEnter={play}
                >

                    <a onClick={() => handleClick('project')}>
                        <p className='hover:text-yellow-500 hover:text-2xl hover:cursor-pointer'>Projects</p>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.4 }}
                    className='flex'
                    onMouseEnter={play}
                >
                    <a onClick={() => handleClick('education')}>
                        <p className='hover:text-yellow-500 hover:text-2xl hover:cursor-pointer'>Education</p>
                    </a>                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.6 }}
                    className='flex'
                    onMouseEnter={play}
                >  
   <a onClick={() => handleClick('ach')}>
                        <p className='hover:text-yellow-500 hover:text-2xl hover:cursor-pointer'>Achievements</p>
                    </a>                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.6 }}
                    className='flex'

                    onMouseEnter={play}
                >
                    <p className='hover:text-yellow-500 hover:text-2xl hover:cursor-pointer'>Hobby</p>
                </motion.div>

            </nav>
        </header>
        </div>
        
    )
}
