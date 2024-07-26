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
    return (

        <div  id='home' >
            <div className="flex flex-col lg:flex-row justify-center items-center text-[#D3D3D3] text-3xl lg:text-4xl font-customFont">
                <motion.img
                    src='./adnan.png'
                    className='mt-20  lg:mr-20  w-8/12 lg:w-2/12 opacity-65  grayscale rounded-full border-r-8 border-x-yellow-500'
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
                        <button className='w-36 font-customFont text-sm h-12 border mt-10 border-yellow-500 hover:bg-yellow-600 hover:font-bold'>
                            Download Resume
                        </button>
                        <button className='w-36 font-customFont text-sm h-12 border mt-10 border-orange-700 hover:bg-orange-800 hover:font-bold'>
                            Contact Info
                        </button>
                    </div>
                    <div className='flex mt-24 lg:mt-10 gap-5'>
                        <FaLinkedin className='text-yellow-500  text-4xl hover:text-green-700  hover:cursor-pointer' />
                        <FaGithub className='text-orange-600  text-4xl hover:text-purple-400 hover:cursor-pointer' />
                        <FaInstagram className='text-orange-400  text-4xl hover:text-sky-400 hover:cursor-pointer' />
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
                    <div className='mt-10 flex p-10 lg:p-0'>
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
                className='text-balance border-yellow-600 lg:p-20 border-4 rounded-3xl text-[#D3D3D3] mt-10 lg:pl-40 p-5  lg:pr-20 text-lg font-customFont'
                animate={{ scale: [1, 1.05, 1] }} // Scale up and down
                transition={{ duration: 25, ease: 'easeInOut', repeat: Infinity }} // Smooth looping animation
            >
                Throughout my 6-year career as a software engineer, I've played a pivotal role in Mobile Application Development, specializing in React Native for 4 of those years. My contributions consistently yielded exceptional results, driving success in numerous cross-platform projects.

                With extensive experience in Mobile App Development across three companies, my achievements were underscored by earning the prestigious Employee of the Month award at EkkBaz, a recognition I received three times for my outstanding contributions.

                In addition to my expertise in React Native and Android app development with Java, I bring valuable full-stack proficiency to the table. I am a skilled MERN stack developer, proficient in MongoDB, Express.js, React, and Node.js. This enables me to create holistic, end-to-end solutions that seamlessly integrate front-end and back-end components.

                Recently, I expanded my skill set into Flutter, completing a comprehensive Udemy boot camp and showcasing my competence in this versatile framework through personal projects. My adaptable nature allows me to confidently tackle complex industry-level software projects, whether they involve native, cross-platform, or full-stack development.
            </motion.p>

           </div>
     
        </div>
    )
}
