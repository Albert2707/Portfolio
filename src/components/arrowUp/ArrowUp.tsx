import './ArrowUp.scss'
import { useScroll, useTransform, motion } from "framer-motion";
import { useCallback, useRef } from "react";
const ArrowUp = () => {

    const up = useCallback(()=>{
        window.scrollTo(0,0);
    },[])
    const refArrow = useRef(null);
    const { scrollYProgress } = useScroll({
        target: refArrow,
        offset: ["100% 100%", "0% 0%"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["200%", "0%"]);
    return (
        <motion.button aria-label="Scroll to top" className="downUp" ref={refArrow} style={{ y }} onClick={up}>
            <motion.span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </motion.span>
        </motion.button>
    )
}

export default ArrowUp