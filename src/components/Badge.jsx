import React from 'react';
import { motion } from 'framer-motion';

function Badge({ Icon, text = 'text', text2 = '', color = '#eab308' }) {
    return (
        <div
            className='w-80 h-40 text-center border flex border-x-2 border-y-2 rounded-3xl' 
            style={{ borderColor: color }}
        >
            {Icon && (
                <motion.div
                    className='text-left ml-5 h-12 w-12 mt-14'
                    style={{ color }}
                    animate={{ scale: [.7, 1.2, .7] }} // Scale up and down
                    transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }} // Smooth looping animation
                >
                    <Icon className='h-full w-full' style={{ color }} />
                </motion.div>
            )}
            <div>
                <div className='text-[#D3D3D3] text-center mt-14 ml-8 font-customFont text-xl font-semibold'>
                    {text}
                </div>
                <div className='text-[#D3D3D3] text-center ml-10 p-2 font-customFont text-sm font-light'>
                    {text2}
                </div>
            </div>
        </div>
    );
}

export default Badge;
