import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/profile-pic-3.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.16
        }
    }
} 

const singleStageGroup = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        }
    }
} 

const about = () => {
  return (
    <>
        <Head>
            <title>Karen C. | Education & Skills Page</title>
            <meta name='description' content='Developer, amazonian'></meta>
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text={"A girl should be two things: who and what she wants."} className='mb-16 font-semibold !text-5xl'></AnimatedText>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                        <p className='my-4 font-medium'>
                        With studying in Computer Science from Northeastern University and a Bachelor degree from Shandong University, I have acquired a diverse skill set and profound knowledge in various programming languages and development tools.
                        </p>

                        <p className='my-4 font-medium'>
                        My extensive technical skills include proficiency in Java, Python, C, C++, JavaScript/TypeScript, and Go, with notable experience in web development frameworks such as Next.js and React.js. I have a solid understanding of various development tools and practices, including MongoDB, CI/CD, RESTful API, AWS, and Firebase. My approach to development is deeply rooted in clean code practices, comprehensive documentation, and robust testing.
                        </p>

                        <p className='font-medium'>
                        Driven by a fervor for technology and a commitment to excellence, I am eager to bring my analytical acumen, technical proficiency, and innovative thinking to solve complex problems and contribute to organizational success.
                        </p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-4
                    '>
                        <Image src={profilePic} alt='Karen C.' className='w-full h-auto rounded-2xl' />
                    </div>

                    <motion.div className='col-span-2 flex flex-col items-end justify-between'
                    variants={quote}
                    initial="initial"
                    animate="animate"
                    >
                        <motion.div className='flex flex-col items-end justify-center mb-4'
                        variants={singleStageGroup}
                        >
                            <span className='text-xl font-medium capitalize text-dark/75'>
                                B.E. Computer Science @
                            </span>
                            <h2 className='inline-block text-7xl font-bold'>SDU</h2>
                        </motion.div>

                        <motion.div className='flex flex-col items-end justify-center mb-4'
                        variants={singleStageGroup}
                        >
                            <span className='text-xl font-medium capitalize text-dark/75'>
                                M.S. Computer Science @
                            </span>
                            <h2 className='inline-block text-7xl font-bold'>NEU</h2>
                        </motion.div>

                        <motion.div className='flex flex-col items-end justify-center mb-4'
                        variants={singleStageGroup}
                        >
                            <h2 className='inline-block text-7xl font-bold'>Next?</h2>
                        </motion.div>
                    </motion.div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default about