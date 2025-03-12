import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import JobDesc from './JobDescription/JobDesc'
import RecommendedJob from './JobDescription/RecommendedJob'

const JobDescriptionPage = () => {
    return (
        <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] p-4' >
            <Divider mx="md" size="xs" />
            <Link href='/find-jobs' className='m-7 inline-block'>
                <Button leftSection={<IconArrowLeft size={20} />} color='brightSun.4' variant="light" >Back</Button>
            </Link>
            <div className='flex gap-5 justify-around'>
                <JobDesc />
                <RecommendedJob />
            </div>
            
        </div>
    )
}

export default JobDescriptionPage