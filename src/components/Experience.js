import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, workContents, companyColor}) => {
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
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={`${companyLink}`}
            target='_blank'
            className={`capitalize ${companyColor ? companyColor : 'text-primary'}`} 
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <ul>
                {workContents.map((work, _) => {
                    return <li className='mt-2'>{work}</li>
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
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'></motion.div>

            <ul className='w-full flex flex-col items-start justify-between ml-2'>
                <Details 
                position={'Software Dev Engineer Intern'}
                company={'AWS'}
                companyLink={'https://aws.amazon.com/'}
                time={'Aug 2023 - Nov 2023'}
                address={'Seattle, WA'}
                workContents={['Leading the enhancement of Access Log experience for AWS Amplify Hosting using Java and TypeScript, targeting issues of log retrieval latency and timeouts for Apps deployed on Amazon CloudFront\n',
                'Implementing real-time Access Log streaming using Amazon Kinesis Data Stream and developing a Amazon Kinesis Data Stream Consumer that runs on AWS Fargate, designed to parse real-time Access Log and push them to Amazon CloudWatch for advanced log filtering, analysis, and querying in real-time\n',
                'Achieving seamless integration among Amazon CloudFront, Amazon S3, Amazon Kinesis, AWS Fargate, and Amazon CloudWatch to provide an end-to-end real-time Access Log solution\n']}
                companyColor={'text-aws'}
                />
                
                <Details 
                position={'Software Engineering Intern'}
                company={'Yahoo'}
                companyLink={'https://www.yahooinc.com/'}
                time={'May 2023 - Aug 2023'}
                address={'Champaign, IL (Remote)'}
                workContents={['Built the Telemetry Dispatcher middleware for Yahoo Mail backend using OpenTelemetry Collector , streamlining telemetry data routing to downstream vendors including Splunk Data Platform and YAMAS',
                'Automated build and test processes with Screwdriver.cd, reducing lead time and recovery time by 33%',
                'Deployed on Google Kubernetes Engine, projected to handle 75M metrics/min and 750 TiB logs daily',
                'Contributed a Go-based metrics processor to the CNCF-incubated OpenTelemetry open-source project',
                'Developed an asynchronous Access Log Java Library for Jetty, improving throughput by 47%']}
                companyColor={'text-yahoo'}
                />
                
                <Details 
                position={'Industry-Collaborative Capstone Project'}
                company={'Tovala'}
                companyLink={'https://www.tovala.com/'}
                time={'Feb 2023 - May 2023'}
                address={'Champaign, IL'}
                workContents={['Led the Python-based Tovala Automated Test Engine (TATE) project, saving 0.8 FTE continuously',
                'Provided RESTful APIs to control TATE using Flask and employed gRPC for internal communication',
                'Boosted system efficiency by 40% and reduced message latency by 31% using Kafka as the message broker']}
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience