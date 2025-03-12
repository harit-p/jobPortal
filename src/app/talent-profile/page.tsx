import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { profile } from '../../../public/Data/TalentData'
import ProfilePage from './TalentProfile/ProfilePage'
import RecommendTalent from './TalentProfile/RecommendTalent'




const TalentProfilePage = () => {
    return (
        <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] p-4' >
            <Divider mx="md" size="xs" />
            <Link href='/find-talent' className='m-7 inline-block'>
                <Button leftSection={<IconArrowLeft size={20} />} color='brightSun.4' variant="light" >Back</Button>
            </Link>
            
            <div className='flex gap-5'>
                <ProfilePage {...profile}/>
                <RecommendTalent />
            </div>
        </div>
    )
}

export default TalentProfilePage