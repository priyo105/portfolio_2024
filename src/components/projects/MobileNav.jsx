import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNavigation({ handleClick }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { id: 'home', label: 'Home' },
        { id: 'skills', label: 'Skills' },
        { id: 'exp', label: 'Experience' },
        { id: 'project', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'ach', label: 'Achievements' },
        { id: 'hobby', label: 'Hobby' },
    ];

    return (
        <div className="lg:hidden">
            <button 
                onClick={toggleMenu} 
                className="fixed top-4 right-4 z-50 w-10 h-10 text-gray-300 focus:outline-none"
            >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6 mx-auto">
                    <span 
                        className={`absolute h-0.5 w-6 bg-gray-300 transform transition duration-300 ease-in-out ${
                            isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-1.5'
                        }`}
                    />
                    <span 
                        className={`absolute h-0.5 w-6 bg-gray-300 transform transition duration-300 ease-in-out ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <span 
                        className={`absolute h-0.5 w-6 bg-gray-300 transform transition duration-300 ease-in-out ${
                            isOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-1.5'
                        }`}
                    />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center"
                    >
                        {menuItems.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="my-2"
                            >
                                <a
                                    onClick={() => {
                                        handleClick(item.id);
                                        toggleMenu();
                                    }}
                                    className="text-[#D3D3D3] hover:text-yellow-500 font-bold text-2xl cursor-pointer"
                                >
                                    {item.label}
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}