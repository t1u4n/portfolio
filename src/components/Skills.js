import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute '
        whileHover={{scale:1.05}}
        initial={{x: 0, y: 0}}
        whileInView={{x: x, y: y}}
        transition={{duration: 1.5}}
        viewport={{once: true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer'
            whileHover={{scale:1.05}}
            >
                Skills
            </motion.div>
            <Skill name='Java' x="-20vw" y="-2vw" />
            <Skill name='GoLang' x="-5vw" y="-10vw" />
            <Skill name='Python' x="5vw" y="-10vw" />
            <Skill name='JavaScript/TypeScript' x="5vw" y="12vw" />
            <Skill name='C/C++' x="-5vw" y="8vw" />
            <Skill name='Rust' x="-20vw" y="20vw" />
            <Skill name='Kafka' x="20vw" y="-9vw" />
            <Skill name='AWS' x="11vw" y="5vw" />
            <Skill name='GCP' x="-21vw" y="-13vw" />
            <Skill name='OpenTelemetry' x="-5vw" y="-5vw" />
            <Skill name='Kubernetes' x="-8vw" y="-14vw" />
            <Skill name='Docker' x="8vw" y="19vw" />
            <Skill name='SpringBoot' x="25vw" y="7vw" />
            <Skill name='Guice' x="-25vw" y="10vw" />
            <Skill name='Flask' x="15vw" y="-20vw" />
            <Skill name='SQL' x="-15vw" y="13vw" />
            <Skill name='HTML' x="-5vw" y="25vw" />
            <Skill name='CSS' x="25vw" y="20vw" />
            <Skill name='Node.js' x="15vw" y="10vw" />
            <Skill name='React.js' x="-5vw" y="-22vw" />
            <Skill name='Next.js' x="-35vw" y="-5vw" />
            <Skill name='MongoDB' x="33vw" y="-10vw" />
            <Skill name='MySQL' x="28vw" y="-3vw" />
            <Skill name='Linux' x="-25vw" y="-10vw" />
            <Skill name='Tailwind CSS' x="-35vw" y="15vw" />

        </div>
    </>
  )
}

export default Skills