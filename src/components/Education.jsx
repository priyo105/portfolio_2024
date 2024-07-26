import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
    return (
        <div id="education" className='pb-20 lg:pb-40'>
            <div>
                <h1 className='text-yellow-500 text-2xl text-center mt-20 pb-5 font-bold font-customFont'>
                    My Educational Qualifications
                </h1>
                <hr className=' w-2/4 lg:w-2/12 mt-2 text-center mx-auto  opacity-30'></hr>

                <div className='mt-10 lg:mt-28  lg:flex lg:justify-center lg:items-center text-center lg:text-left'>

                 <div>
                    
                 </div>
                    <div className='flex justify-center lg:justify-start lg:w-1/12'>
                        <motion.img
                            src='./lsbu.png'
                            alt='London South Bank University'
                            className='  mr-5 mt-5 w-40'
                        />

                    </div>
                    <div className='ml-0 mt-5 lg:ml-5 lg:mt-0'>
                        <h2 className='text-yellow-500 text-lg lg:text-left font-bold font-customFont'>
                            London South Bank University
                        </h2>
                        <h3 className='text-slate-400 text-sm lg:text-left font-bold font-customFont'>
                            London, United Kingdom
                        </h3>
                        <h4 className='text-amber-50 text-sm lg:text-left font-bold'>
                            Msc. in Data Science
                        </h4>

                        <h4 className='text-amber-50 text-sm lg:text-left font-bold'>
                            Achieved Distinction (1:1)
                        </h4>
                     
                    </div>


                </div> 



                <div className='mt-10 lg:mt-40  lg:flex lg:justify-center lg:items-center text-center lg:text-left '>
       

                    <div className='flex justify-center lg:justify-start lg:w-1/12 lg:ml-32'>
                        <motion.img
                            src='./mist.png'
                            alt='London South Bank University'
                            className='  mr-5 mt-5 w-40'
                        />

                    </div>
                    <div className='ml-0 mt-5 lg:ml-5 lg:mt-0'>
                        <h2 className='text-yellow-500 text-lg lg:text-left font-bold font-customFont'>
                            Military Institute of Science And Technology
                        </h2>
                        <h3 className='text-slate-400 text-sm lg:text-left font-bold font-customFont'>
                            Dhaka, Bangladesh
                        </h3>
                        <h4 className='text-slate-200 text-sm lg:text-left font-bold font-customFont'>
                            Bsc. In Computer Science and Engineering 
                        </h4>
                        <h4 className='text-blue-200 text-xs lg:text-left font-bold font-customFont'>
                            Achieved GPA  ( 3.12 out of 4 )
                        </h4>
                    </div>
                </div>


            </div>
        </div>
    )
}
