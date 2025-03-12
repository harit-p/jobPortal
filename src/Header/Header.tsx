 'use client'
 import { IconAnchor, IconBell, IconSettings } from '@tabler/icons-react'
 import { Avatar, Indicator } from '@mantine/core';
import  NavLinks  from './NavLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProfileMenu from './ProfileMenu';
 
  const Header = () => {
    const pathname = usePathname();

    const brightSun = [
        '#fffbeb',
         '#fff3c6',
         '#ffe588',
         '#ffd149',
         '#ffbd20',
         '#f99b07',
         '#dd7302',
        '#b75006',
        '#943c0c',
         '#7a330d',
         '#461902',
       ]

   return  pathname!="/signup" && pathname!="/login" &&
     <div className='w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center  font-["poppins"]'>

            <div className='flex gap-1 items-center text-bright-sun-400'>
                <IconAnchor className='h-8 w-8' stroke={2.5}/>
                <Link href="/">
                <div className='text-3xl font-semibold'>JobHook</div>
                </Link>
            </div>
            
           <NavLinks />

            <div className='flex gap-3 items-center'>
                
            <ProfileMenu />
                

                <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                    <IconSettings stroke={1.5}  />
                </div>

                <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                <Indicator processing color={`${brightSun[5]}`} >
                    <IconBell stroke={1.5}/>
                </Indicator>
                </div>
                
                
            </div>

     </div>
   
 }
  

 export default Header