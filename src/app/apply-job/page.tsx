import { Button, Divider } from '@mantine/core'
import React from 'react'
import PostJob from '../post-job/PostJob/PostJob'
import Link from 'next/link'
import { IconArrowLeft } from '@tabler/icons-react'
import ApplyJobComp from './ApplyJob/ApplyJobComp'

const ApplyJobPage = () => {
    return (
        <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] p-4' >
           <Divider mx="md" size="xs" />
            <Link href='/job-description' className='m-7 inline-block'>
                <Button leftSection={<IconArrowLeft size={20} />} color='brightSun.4' variant="light" >Back</Button>
            </Link>
            <ApplyJobComp />
        </div>
    )
}

export default ApplyJobPage