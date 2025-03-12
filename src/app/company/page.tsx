'use client'
import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
//@ts-ignore
import Company from './CompanyProfile/Company'
import SimilarCompanies from './CompanyProfile/SimilarCompanies'

const CompanyPage = () => {
    const router = useRouter();

  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] p-4' >
            <Divider  size="xs" />
            
                <Button my="md" onClick={()=>router.back()} leftSection={<IconArrowLeft size={20} />} color='brightSun.4' variant="light" >Back</Button>
            
            <div className='flex gap-5 justify-between'>
                <Company />
                <SimilarCompanies />
            </div>
        </div>
  )
}

export default CompanyPage;