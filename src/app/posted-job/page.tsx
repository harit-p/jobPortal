import { Divider } from '@mantine/core'
import React from 'react'
import PostedJob from './PostedJob/PostedJob'
import PostedJobDesc from './PostedJob/PostedJobDesc'

const PostedJobPage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] px-4' >
            <Divider  size="xs" />            
            <div className='flex gap-5'>
                <PostedJob />
                <PostedJobDesc />
            </div>
        </div>
  )
}

export default PostedJobPage