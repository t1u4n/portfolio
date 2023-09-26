import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({degree, school, schoolLink, time, address, schoolColor}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:bt-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref} />
        
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{
            duration: 1,
            type: "spring"
        }}
        >
            <h3 className='font-bold text-medium'>{degree}&nbsp;</h3>
            <h3 className='font-bold text-2xl'><a href={`${schoolLink}`}
            target='_blank'
            className={`capitalize ${schoolColor ? schoolColor : 'text-primary'}`} 
            >@{school}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='my-48'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'></motion.div>

            <ul className='w-full flex flex-col items-start justify-between ml-2'>
                <Details 
                degree={'MS in Computer Science'}
                school={'Northeastern University'}
                schoolLink={'https://northeastern.edu/'}
                time={'Sep 2022 - Dec 2024 (Expected)'}
                address={'Bos, MA'}
                schoolColor={'text-neu'}
                />

                <Details 
                degree={'BE in Computer Science'}
                school={'Shandong University'}
                schoolLink={'https://www.sdu.edu.cn/'}
                time={'Sep 2017 - Jul 2021'}
                address={'Shandong, China'}
                schoolColor={'text-sdu'}
                />
            </ul>
        </div>
    </div>
  )
}

export default Education