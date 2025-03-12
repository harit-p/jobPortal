import React from 'react'
import Sort from './Sort'
import JobCard from './JobCard'
import { jobList } from '../../../../public/Data/JobsData'

const Jobs = () => {
    return (
        <div className='p-5'>
            <div className='flex justify-between'>
                <div className='text-2xl font-semibold'>
                    Recommended Jobs
                </div>
                <Sort />
            </div>
            <div className='mt-10 flex justify-evenly  flex-wrap gap-10'>
                {
                    jobList.map((job, index) => <JobCard key={index}
                        // jobTitle={job.jobTitle}
                        // company={job.company}
                        // applicants={job.applicants}
                        // experience={job.experience}
                        // jobType={job.jobType}
                        // location={job.location}
                        // packages={job.package}
                        // postedDaysAgo={job.postedDaysAgo}
                        // description={job.description}
                        {...job} />)
                }
            </div>
        </div>
    )
}

export default Jobs