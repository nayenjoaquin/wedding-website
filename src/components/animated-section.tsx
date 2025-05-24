import React, { useEffect } from "react";
import { motion, useAnimation} from "motion/react";
import { useInView } from 'react-intersection-observer';

export enum SideEnum {
    LEFT = -1,
    RIGHT = 1,
};
  
export interface AnimatedSectionProps {
children: React.ReactNode;
side: SideEnum; // use the enum type here
};



export const AnimatedSection = ({children, side}: AnimatedSectionProps) =>{

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

    const variants = {
        hidden: { opacity: 0, x: side > 0 ? -200 : 200 },
        visible: { opacity: 1, x: 0 },
    }

    useEffect(() => {
        if (inView) {
            console.log('IN VIEW');
            controls.start('visible');
        }
      }, [controls, inView]);

    return(
        <motion.div
        ref={ref}
        variants={variants}
        initial='hidden' 
        animate={controls}
        transition={{ duration: 0.6, ease: 'easeOut' }}>
            {children}
        </motion.div>
    )

}
