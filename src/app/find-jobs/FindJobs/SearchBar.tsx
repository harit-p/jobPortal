'use client'
import { Divider, RangeSlider } from "@mantine/core"
import { dropdownData } from "../../../../public/Data/JobsData"
import MultiInput from "./MultiInput"
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex px-5 py-8">
      {
        dropdownData.map((item, index) => (
          <>
          <div  className="w-1/5">
            <MultiInput 
              key={index}
              icon={item.icon}
              title={item.title} 
              options={item.options}
            />
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
          </>
        ))
      }
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
      <div className="flex text-sm justify-between !text-mine-shaft-300">
        <div >Salary</div>
        <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
      </div>
      <RangeSlider color='#ffbd20' size="xs" value={value} onChange={setValue} 
      labelTransitionProps={{
        transition:'skew-down',
        duration:150,
        timingFunction:'linear'
      }}  />
      </div>
    </div>
  )
}

export default SearchBar