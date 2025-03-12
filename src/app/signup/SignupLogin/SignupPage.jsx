'use client'
import { IconAnchor, IconArrowLeft } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import Signup from './Signup'
import Login from  './Login'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@mantine/core'

const SignupPage = () => {
    const pathname = usePathname();
    const router = useRouter();
    return (
      <div className='min-h-[90vh] bg-mine-shaft-950 font-["poppins"] overflow-hidden relative'>
        <Button my="md" className='!absolute left-5 z-10' onClick={()=>router.push("/")} leftSection={<IconArrowLeft size={20} />} color='brightSun.4' variant="light" >Home</Button>
        <div 
          className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transform transition-all ease-in-out duration-1000
          ${pathname === '/signup' ? '-translate-x-1/2' : 'translate-x-0'}`}
        >
          <Login />
          <div 
            className={`w-1/2 h-full transition-all ease-in-out duration-1000
            ${pathname === "/signup" 
              ? "rounded-r-[200px]"
              : "rounded-l-[200px]"
            } bg-mine-shaft-900 flex items-center gap-5 justify-center flex-col`}
          >
            <div className='flex gap-1 items-center text-bright-sun-400'>
              <IconAnchor className='h-16 w-16' stroke={2.5} />
              <div className='text-6xl font-semibold'>JobHook</div>
            </div>
            <div className='text-2xl text-mine-shaft-200 font-semibold'>
              Find the Job made for you
            </div>
          </div>
          <Signup />
        </div>
      </div>
    );
  }

export default SignupPage