import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ isActive }) => {
    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 bg-black z-50"
                />
            )}
        </AnimatePresence>
    );
};

export default PageTransition;
