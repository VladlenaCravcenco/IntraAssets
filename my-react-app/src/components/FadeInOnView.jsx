import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInOnView = ({ children, delay = 0, x = 0, y = 30, duration = 0.8 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration, delay },
      });
    }
  }, [inView, controls, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnView;