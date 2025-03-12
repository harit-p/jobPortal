import React from 'react'
import { talents } from '../../../../public/Data/TalentData'
import TalentCard from '@/app/find-talent/FindTalent/TalentCard'

const CompanyEmployees = () => {
  return (
    <div>
      <div className='mt-10 flex flex-wrap gap-10'>
        {
          talents.map((talent, index) => index < 6 && <TalentCard key={index}
            {...talent}
          />)
        }
      </div>
    </div>
  )
}

export default CompanyEmployees