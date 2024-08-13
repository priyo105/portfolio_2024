import React from 'react'
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Badge from './Badge';
import { FaRibbon, FaUniversity, FaCode, FaLinkedin, FaGithub, FaInstagram, FaCodeBranch, FaCoffee } from 'react-icons/fa'; // Example icon from react-icons library
import { FaLocationDot } from 'react-icons/fa6';
import { PiBracketsCurlyBold, PiCoffeeBold } from 'react-icons/pi';
import { BiBug } from 'react-icons/bi';
import { GiCoffeeMug, GiThink, GiWorld } from 'react-icons/gi';
import { TfiMobile } from 'react-icons/tfi';
import { TiWorld } from 'react-icons/ti';
import { MdDataset } from 'react-icons/md';

export default function Landing() {

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/cv_2024.pdf`; // Adjust this if the file is located elsewhere.
        link.download = 'cv_2024.pdf'; // The name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
    return (
        <div id='home' >
            <div className="flex flex-col lg:flex-row justify-center items-center text-[#D3D3D3] text-3xl lg:text-4xl font-customFont">
                <motion.img
                    src='./pic.png'
                    className='mt-20  lg:mr-20  w-8/12 lg:w-2/12 opacity-75  grayscale rounded-full border-r-8 border-x-yellow-500 '
                    initial={{ filter: 'blur(4px)' }}
                    animate={{ filter: 'blur(0px)', scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, loop: 10 }}
                />

                <div className='w-full text-center mt-20 md:mt-40 lg:text-start lg:w-2/5 flex flex-col items-center lg:items-start'>
                    <Typewriter
                        options={{
                            strings: ['Hello, I am Adnan', 'I am a Software Engineer', 'I specialize in Web and Mobile Apps Development'],
                            autoStart: true,
                            loop: true,
                            delay: 100
                        }}
                    />
                    <div className='flex gap-10'>
                        <button className='w-36 font-customFont text-sm h-12 border mt-10 border-yellow-500 hover:bg-yellow-600 hover:font-bold' onClick={downloadResume}>
                            Download Resume
                        </button>
                        <button className='w-36 font-customFont text-sm h-12 border mt-10 border-orange-700 hover:bg-orange-800 hover:font-bold'>
                            Contact Info
                        </button>
                    </div>
                    <div className='flex mt-24 lg:mt-10 gap-5'>

                        <a href="https://www.linkedin.com/in/md-adnan-kamal/">
                            <FaLinkedin href="https://www.linkedin.com/in/md-adnan-kamal/" className='text-yellow-500  text-4xl hover:text-green-700  hover:cursor-pointer' />
                        </a>

                        <a href="https://github.com/priyo105">
                            <FaGithub href='' className='text-orange-600  text-4xl hover:text-purple-400 hover:cursor-pointer' />
                        </a>

                        <a href="https://www.instagram.com/adnanpriyo07/">
                            <FaInstagram href='' className='text-orange-600  text-4xl hover:text-purple-400 hover:cursor-pointer' />
                        </a>
                        <div className=' hidden lg:ml-28 lg:flex p-10 lg:p-0'>
                            <img src='./coffee.gif' className='w-10  h-10' />
                            <p className='text-sm  mt-3 ml-5 font-customFont'>I turn Coffee into Quality code!</p>
                        </div>
                        <div className=' hidden lg:ml-20 lg:flex p-10 lg:p-0 mt-2'>
                            <img src='./build.gif' className='w-5  h-5' />
                            <p className='text-sm   ml-4 font-customFont'>Write Readable ,Maintainable and Scalable Code</p>
                        </div>
                    </div>

                    <div className=' lg:hidden  flex p-10 lg:p-0'>
                        <img src='./coffee.gif' className='w-20  h-20' />
                        <p className='  text-sm  mt-10 ml-5 font-customFont'>I turn Coffee into Quality code !</p>
                    </div>



                    <div className='mt-5 lg:mt-10 flex'>
                        <FaLocationDot className='text-cyan-700  text-2xl hover:text-purple-400 hover:cursor-pointer' />
                        <p className='text-sm ml-5 font-customFont '>London , United Kingdom</p>

                    </div>
                    <div className='mt-10 flex p-5 lg:p-0'>
                        <PiBracketsCurlyBold className='text-yellow-300  text-2xl hover:text-purple-400 hover:cursor-pointer' />
                        <p className='text-sm font-semibold ml-5 font-customFont'>Coder</p>

                        <BiBug className='text-red-700 ml-10  text-2xl hover:text-purple-400 hover:cursor-pointer' />
                        <p className='text-sm ml-5 font-mono font-semibold'>Bug Solver</p>

                        <FaCodeBranch className='text-green-700 ml-10  text-2xl hover:text-purple-400 hover:cursor-pointer' />
                        <p className='text-sm ml-5 font-mono font-semibold'>Team Player</p>

                    </div>


                    <div className='mt-10 flex justify-center items-center'>
                        <TfiMobile className='text-red-300  text-2xl hover:text-purple-400 hover:cursor-pointer' />
                        <p className='text-sm font-semibold ml-5 font-customFont'>Mobile App Developer</p>

                        <GiWorld className='text-sky-400 ml-10  text-2xl hover:text-purple-400 hover:cursor-pointer' />
                        <p className='text-sm ml-5 font-mono font-semibold'>Web Developer</p>
                    </div>

                </div>
            </div>



            <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-24 p-10'>
                <Badge Icon={FaRibbon} text='6 Years Experience' text2='Software Engineering' />
                <Badge Icon={FaUniversity} text='Education' color='#9a3412' text2='BSC in CSE, MS in Data Science' />
                <Badge Icon={FaCode} text='Speciality' color='darkorange' text2='Frontend Mobile And Web Dev' />
            </div>

            <h2 className='text-center text-yellow-500 mt-10 lg:mt-20 text-2xl font-semibold'> Summary About me</h2>

            <div className='lg:ml-20 ml-6 mr-6 lg:mr-20 '>
                <motion.p
                    className='text-balance text-center border-yellow-600 lg:p-20 border-4 rounded-3xl text-[#D3D3D3] mt-10 lg:pl-40 p-5  lg:pr-20 text-lg font-customFont'
                    animate={{ scale: [1, 1.05, 1] }} // Scale up and down
                    transition={{ duration: 25, ease: 'easeInOut', repeat: Infinity }} // Smooth looping animation
                >
                    As a software engineer with 5 years experience , I specialize in Web and Mobile App development. My expertise lies primarily in
                    JavaScript and its ecosystem, including frameworks such as React, React Native, TypeScript, Next.js, Node.js, and Express.js. I
                    am adept at building highly scalable, maintainable, and efficient applications, adhering strictly to industry standards and best
                    practices.
                </motion.p>

            </div>

        </div>
    )
}
