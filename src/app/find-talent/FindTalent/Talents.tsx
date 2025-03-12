import Sort from '@/app/find-jobs/FindJobs/Sort'
import React from 'react'
import { talents } from '../../../../public/Data/TalentData'
import TalentCard from './TalentCard'


const Talents = () => {
    return (
        <div className='p-5'>
            <div className='flex justify-between'>
                <div className='text-2xl font-semibold'>
                    Talents
                </div>
                <Sort />
            </div>
            <div className='mt-10 flex justify-evenly  flex-wrap gap-10'>
                {
                    talents.map((talent, index) => <TalentCard key={index}
                        {...talent}
                        />)
                }
            </div>
        </div>
    )
}

export default Talents