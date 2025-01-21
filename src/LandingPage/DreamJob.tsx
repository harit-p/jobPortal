import React from 'react'
import { TextInput,Avatar } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react' 

const DreamJob = () => {
    return (
        <div className='flex items-center px-16'>
            <div className='flex flex-col w-[45%]'>
                <div className='text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400'>Find your
                    <span> Dream Job </span>with us</div>
                <div className='text-lg text-mine-shaft-200'>Good life begins with a good company. Start exploring thousands of job in one place.</div>
                <div className='flex gap-3 mt-5'>
                    <TextInput
                        variant="unstyled"
                        label="Job Title"
                        placeholder="Software Engineer"
                        className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100'
                    />
                    <TextInput
                        variant="unstyled"
                        label="Job Type"
                        placeholder="Fulltime"
                        className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:text-mine-shaft-100'
                    />
                    <div className='flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2
                    hover:bg-bright-sun-500 cursor-pointer'>
                        <IconSearch className='h-[85%] w-[85%]' />
                    </div>
                </div>
            </div>

            <div className='w-[55%] flex items-center justify-center'>

                <div className='w-[30rem] relative'>

                    <img src='Boy.png' alt='boy' />

                    <div className='absolute -right-10 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md'>
                        <div className='text-center mb-1 text-sm text-mine-shaft-100'>10K+ got jobs</div>
                        <Avatar.Group>
                            <Avatar src="avatar.png" />
                            <Avatar src="avatar1.png" />
                            <Avatar src="avatar2.png" />
                            <Avatar>+5</Avatar>
                        </Avatar.Group>
                    </div>

                    <div className='absolute -left-5 w-fit top-[26%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md 
                    flex flex-col'>
                        <div className='flex gap-2 items-center mb-3'>
                            <div className='w-12 h-12 p-1 bg-mine-shaft-900 rounded-lg'>
                                <img src='Google.png' alt='google' />
                            </div>
                            <div className='text-sm text-mine-shaft-100'>
                                <div>Software Enginner</div>
                                <div className='text-mine-shaft-200 text-xs'>New York</div>
                            </div>
                        </div>
                        <div className='flex gap-2 text-mine-shaft-200 text-xs justify-around'>
                            <span>1 Day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DreamJob