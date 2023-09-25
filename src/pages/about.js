import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import huskyPic from '../../public/images/profile/husky.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

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
            <title>TAKEMiuL | About Page</title>
            <meta name='description' content='Developer, amazonian'></meta>
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text={"Talk is cheap, show me the code."} className='mb-16 font-semibold !text-6xl'></AnimatedText>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>About Me</h2>
                        <p className='my-4 font-medium'>
                        I’m currently pursuing my M.Eng in Electrical and Computer Engineering at the University of Illinois Urbana-Champaign (UIUC). My journey in the tech world has been fulfilling, with contributions to the Tovala Automated Test Engine in a significant capstone project with Tovala and internships as a Software Development Engineer (SDE) with both Yahoo Core Mail Backend Team and the AWS Amplify Hosting Team.
                        </p>

                        <p className='font-medium'>
                        Proficient in Go, Java, C, C++, JavaScript, and Python, I’m always eager to take on new challenges. I’m actively seeking full-time SDE opportunities for 2024 and would love to connect with professionals in the field. Let’s explore how we can collaborate!
                        </p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8
                    '>
                        <Image src={huskyPic} alt='TAKEMiuL' className='w-full h-auto rounded-2xl' />
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
                                B.S. Advanced Computing @
                            </span>
                            <h2 className='inline-block text-7xl font-bold'>ANU</h2>
                        </motion.div>

                        <motion.div className='flex flex-col items-end justify-center mb-4'
                        variants={singleStageGroup}
                        >
                            <span className='text-xl font-medium capitalize text-dark/75'>
                                M.Eng. ECE @
                            </span>
                            <h2 className='inline-block text-7xl font-bold'>UIUC</h2>
                        </motion.div>

                        <motion.div className='flex flex-col items-end justify-center mb-4'
                        variants={singleStageGroup}
                        >
                            <span className='text-xl font-medium capitalize text-dark/75'>
                                SDE Intern @
                            </span>
                            <h2 className='inline-block text-7xl font-bold'>AWS</h2>
                        </motion.div>
                    </motion.div>
                </div>

                <Skills />

                <Experience />
            </Layout>
        </main>
    </>
  )
}

export default about