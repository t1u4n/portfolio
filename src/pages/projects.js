import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Experience from '@/components/Experience'

const projects = () => {
  return (
    <>
        <Head>
            <title>Karen C. | Projects Page</title>
            <meta name='description' content='Developer, NUer'></meta>
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-0'>
                <Experience />
            </Layout>
        </main>
    </>
    
  )
}

export default projects