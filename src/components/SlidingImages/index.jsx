import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#e3e5e7",
        src: "java_basic certificate_page-0001.jpg"
    },
    {
        color: "#d6d7dc",
        src: "Certificate (1)_page-0001.jpg"
    },
    {
        color: "#e3e3e3",
        src: "Certificate (1)_page-0002.jpg"
    },
    {
        color: "#21242b",
        src: "python_basic certificate_page-0001.jpg"
    }
]

const slider2 = [
    {
        color: "#d4e3ec",
        src: "python_basic certificate_page-0001.jpg"
    },
    {
        color: "#e5e0e1",
        src: "LCIEducation 110.2x Certificate _ edX_page-0001.jpg"
    },
    {
        color: "#d7d4cf",
        src: "Simplilearn Certificate_page-0001.jpg"
    },
    {
        color: "#e1dad6",
        src: "UCDavis WEB1091 Certificate _ edX_page-0001.jpg"
    }
]

export default function index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 130])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -130])
    const height = useTransform(scrollYProgress, [0, 0.9], [40, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/images/${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}
