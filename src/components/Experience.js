import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, time, workContents}) => {
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
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;</h3>
            <span className='capitalize font-medium text-dark/75'>
                {time}
            </span>
            <ul>
                {workContents.map((work, index) => {
                    return <li className='mt-2' key={index}>{work}</li>
                })}
            </ul>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full  text-center'>
            Projects
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'></motion.div>

            <ul className='w-full flex flex-col items-start justify-between ml-2'>
                <Details 
                position={'Lyft Back-End Engineering Virtual Internship Program with Forage'}
                company={'Forage'}
                companyLink={'https://aws.amazon.com/'}
                time={'May 2023 - Aug 2023'}
                address={''}
                workContents={['Redesigned and refactored the existing back-end architecture of Lyft’s car maintenance notification system for batteries and engines using Python, enhancing maintainability and extensibility',
                'Created a robust testing suite with unittest framework to validate the functionality and reliability of the refactored car maintenance system, achieving 100% code coverage for core components',
                'Leveraged Test-Driven Development (TDD) to add advanced features to extend the maintenance cycle of Spindler batteries and introduce specific maintenance criteria for tires based on wear sensor data',
                'Prioritized clean code practices and comprehensive documentation to facilitate easier onboarding'
                ]}
                companyColor={'text-aws'}
                />
                
                <Details 
                position={'NextAmplify Blog Platform'}
                time={'Feb 2023 - May 2023'}
                workContents={['Developed a high-performance blog platform using Next.js, leveraging its Server-Side Rendering (SSR) capabilities for optimal performance and SEO-friendliness, integrated AWS Amplify for backend services',
                'Constructed a GraphQL API via AWS AppSync, offering an flexible way to query and manipulate data',
                'Employed Amazon DynamoDB as the NoSQL database for storing blog content and user information',
                'Set up CI/CD pipeline using AWS Amplify Hosting, ensuring automatic build and deployment']}
                companyColor={'text-yahoo'}
                />
                
                <Details 
                position={'Tuiter: A Full-Stack Social Platform Web App'}
                time={'Nov 2022 - Jan 2023'}
                workContents={['Collaborated with a team of 3 developers to build a full-stack social media application using React.js, Node.js, and MongoDB; deployed the application to Heroku and integrated the Netlify platform for continuous integration and continuous deployment (CI/CD) of the React front-end',
                'Designed and built the front-end UI utilizing React.js and Bootstrap, and created reusable components',
                'Reduced rendering time by 18% by centralizing the app’s state and avoiding prop drilling and unnecessary re-renders leveraging Redux to manage the state of the React-based web interface',
                'Developed RESTful APIs for handling user and post resources, which included creating, reading, updating, and deleting data via HTTP verbs, with Node.js as the primary backend technology',
                'Established a MongoDB database for storing user and post data, reduced search time by 30% through indexing, and used the Mongoose library to interact with the database from the Node.js server']}
                />

                <Details 
                position={'GeoChat: A Location-Aware Messaging App with Sticker'}
                time={'Aug 2022 - Oct 2022'}
                workContents={['Led the development of an Android messaging app using Java with sticker and location functionalities',
                'Utilized Firebase Realtime Database of Google Cloud Platform (GCP) to store information about stickers and user information, providing a cloud-based solution for efficient retrieval of information',
                'Leveraged Geofencing to support location-based service and reduced the average image loading time by 27% by implementing an image caching mechanism by Glide']}  
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience