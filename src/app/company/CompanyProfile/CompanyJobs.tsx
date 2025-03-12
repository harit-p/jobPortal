import React from 'react'
import { jobList } from '../../../../public/Data/JobsData'
import JobCard from '@/app/find-jobs/FindJobs/JobCard'

const CompanyJobs = () => {
  return (
    <div>
        <div className='mt-10 flex flex-wrap gap-20'>
                {
                    jobList.map((job, index) => <JobCard key={index}
                        {...job} />)
                }
            </div>
    </div>
  )
}

export default CompanyJobs