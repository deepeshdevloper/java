// Converted from .jsx to .js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimatedSection({ children, className = '' }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return React.createElement(
    motion.div,
    {
      ref: ref,
      initial: { opacity: 0, y: 20 },
      animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
      transition: { duration: 0.6 },
      className: className
    },
    children
  );
}

export default AnimatedSection;