import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Education from '@/components/Education'

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

const education = () => {
  return (
    <>
        <Head>
            <title>Karen C. | About Page</title>
            <meta name='description' content='Developer, NUer'></meta>
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <Education />
                <Skills />
            </Layout>
        </main>
    </>
  )
}

export default education