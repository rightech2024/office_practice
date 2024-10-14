import React from 'react';
import { motion } from "framer-motion";

const Tile = () => {
    return (
        <motion.div className='aspect-square bg-neutral-950 border-neutral-900' whileHover={{
            zIndex: 1,
            backgroundColor: "#7c3aed",
        }}
        transition={{
            duration: 5,
            ease: "easeOut",
        }}
        />
    );
};

export default Tile;