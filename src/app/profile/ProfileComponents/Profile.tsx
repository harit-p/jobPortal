'use client'
import { ActionIcon, Button, Divider, TagsInput, Textarea } from '@mantine/core'
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from '@tabler/icons-react'
import React, { useState } from 'react'
import ExpCard from './ExpCard'
import CertiCard from './CertiCard'
import { profile } from '../../../../public/Data/TalentData'
import SelectInput from './SelectInput'
import fields from '../../../../public/Data/Profile'
import ExpInput from './ExpInput'
import CertiInput from './CertiInput'

function Profile(props: any) {
    const select = fields;
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [about, setAbout] = useState(profile.about);
    const [skills, setSkills] = useState(profile.skills);
    const [addExp, setAddExp] = useState(false);
    const [addCerti, setAddCerti] = useState(false);
    function handleEdit(index: any) {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index];
        setEdit(newEdit);
    }
    return (
        <div className='w-4/5 mx-auto '>
            <div className='relative'>
                <img className='rounded-t-2xl' src="/Profile/banner.jpg" alt="banner img" />
                <img className='w-48 h-48 rounded-full -bottom-1/3 absolute left-3
             border-mine-shaft-950 border-8 mb-3' src="/avatar.png" alt="avatar" />
            </div>
            <div className='px-3 mt-16'>
                <div className='text-3xl font-semibold flex justify-between'>{profile.name}
                    <ActionIcon onClick={() => handleEdit(0)} color='brightSun.4' size="lg" variant="subtle" >
                        {edit[0] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
                    </ActionIcon>
                </div>
                {
                    edit[0] ? <>
                        <div className='flex gap-10 [&>*]:w-1/2'>
                            <SelectInput {...select[0]} />
                            <SelectInput {...select[1]} />
                        </div>
                        <SelectInput {...select[2]} /></> : <>
                        <div className='text-xl flex gap-1 items-center'> <IconBriefcase className='h-5 w-5' stroke={1.5} />
                            {profile.role} &bull; {profile.company}</div>
                        <div className='text-lg flex gap-1 items-center text-mine-shaft-300'>
                            <IconMapPin className='h-5 w-5' stroke={1.5} /> {profile.location}
                        </div></>
                }

            </div>
            <Divider mx="xs" my="xl" />
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-3 flex justify-between'>About
                    <ActionIcon onClick={() => handleEdit(1)} color='brightSun.4' size="lg" variant="subtle" >
                        {edit[1] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
                    </ActionIcon>
                </div>
                {
                    edit[1] ? <Textarea autosize minRows={3} placeholder='Enter about yourself'
                        value={about}
                        onChange={(event) => setAbout(event.currentTarget.value)}
                    /> : <div className='text-sm text-mine-shaft-300 text-justify'>
                        {about}
                    </div>
                }

            </div>
            <Divider mx="xs" my="xl" />
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-3 flex justify-between'>Skills
                    <ActionIcon onClick={() => handleEdit(2)} color='brightSun.4' size="lg" variant="subtle" >
                        {edit[2] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
                    </ActionIcon>
                </div>
                {
                    edit[2] ? <TagsInput value={skills} onChange={setSkills} placeholder="Add Skill" splitChars={[',', ' ', '|']} />
                        : <div className='flex flex-wrap gap-2'>
                            {skills.map((skill: any, index: any) => (
                                <div
                                    key={index}
                                    className='bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-xl text-bright-sun-400 px-3 py-1'>
                                    {skill}
                                </div>
                            ))}
                        </div>
                }

            </div>
            <Divider mx="xs" my="xl" />
            <div className='px-3 '>
                <div className='text-2xl font-semibold mb-5 flex justify-between'>Experience
                    <div className='flex gap-2'>
                    <ActionIcon onClick={() => setAddExp(true)} color='brightSun.4' size="lg" variant="subtle" >
                        <IconPlus className='h-4/5 w-4/5' />
                    </ActionIcon>
                    <ActionIcon onClick={() => handleEdit(3)} color='brightSun.4' size="lg" variant="subtle" >
                        {edit[3] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
                    </ActionIcon>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    {profile.experience.map((exp: any, index: any) => (
                        <ExpCard key={index} {...exp} edit={edit[3]}/>
                    ))}
                    {addExp && <ExpInput add setEdit={setAddExp}/>}
                </div>
            </div>
            <Divider mx="xs" my="xl" />
            <div className='px-3'>
                <div className='text-2xl font-semibold mb-5 flex justify-between'>Certifications
                <div className='flex gap-2'>
                    <ActionIcon onClick={() => setAddCerti(true)} color='brightSun.4' size="lg" variant="subtle" >
                        <IconPlus className='h-4/5 w-4/5' />
                    </ActionIcon>
                    <ActionIcon onClick={() => handleEdit(4)} color='brightSun.4' size="lg" variant="subtle" >
                        {edit[4] ? <IconDeviceFloppy className='h-4/5 w-4/5' /> : <IconPencil className='h-4/5 w-4/5' />}
                    </ActionIcon>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    {profile.certifications.map((certi: any, index: any) => (
                        <CertiCard key={index} {...certi} edit={edit[4]} />
                    ))}
                    {
                       addCerti && <CertiInput setEdit={setAddCerti}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile