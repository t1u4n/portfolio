import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg
    '>
        <Layout className='py-5 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
            Built by&nbsp;<Link href={'/'} className='underline underline-offset-2'>TAKEMiuL</Link>
            </div>
            <Link href={"/"}>Greetings!</Link>
        </Layout>
    </footer>
  )
}

export default Footer