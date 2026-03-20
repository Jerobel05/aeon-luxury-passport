import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function AnimatedReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: AnimatedRevealProps) {
  
  const getVariants = () => {
    const distance = 40;
    switch(direction) {
      case 'up': return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
      case 'down': return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
      case 'left': return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
      case 'right': return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
      case 'none': return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.9, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Custom editorial ease
      }}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
}
