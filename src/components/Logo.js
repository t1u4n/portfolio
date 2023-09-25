import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>

        <MotionLink
        href="/"
        className='w-16 h-16 flex items-center justify-center font-bold bg-dark text-light rounded-full text-2xl'
        whileHover={{
            backgroundColor: ["#121212", "#97E3FE", "#F394F8", "#818DE0", "#9A53D0", "#2843AD", "#0F1546", "#121212"],
            transition: {
                duration: 1,
                repeat: Infinity,
            }
        }}
        >
            TiuL
        </MotionLink>
    </div>
  )
}

export default Logo