'use client'
import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from '@mantine/core'
import { IconCheck, IconPaperclip } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const ApplyJobComp = () => {
    const [preview, setPreview] = useState(false);
    const [submit,setSubmit] = useState(false);
    const [sec,setSec] = useState(5);
    const router = useRouter();

    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({top:0, behavior:'smooth'})
    }
    const handleSubmit=()=>{
        setSubmit(true);
        let x=5;
        setInterval(() => {
            x--;
            setSec(x);
            if(x==0) router.push('/find-jobs');
        }, 1000);
    }
    return (<>
        <div className='w-2/3 mx-auto'>
        <LoadingOverlay className='!fixed'
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'brightSun.4', type: 'bars' }}
        />
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-3 bg-mine-shaft-800 rounded-xl'>
                        <img className='h-14' src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='font-semibold text-2xl'>Software Engineer III</div>
                        <div className='text-lg text-mine-shaft-300'>Google &bull; 3 days ago &bull; 48 Applicants</div>
                    </div>
                </div>
            </div>
            <Divider my="xl" />
            <div className='text-xl font-semibold mb-5'>Submit your Application</div>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-10 [&>*]:w-1/2'>
                    <TextInput withAsterisk
                        readOnly={preview}
                        variant={preview ? 'unstyled' : 'default'}
                        className={`${preview ? 'text-mine-shaft-300 font-semibold' : ''}`}
                        label="Full Name"
                        placeholder="Enter name"
                    />
                    <TextInput withAsterisk
                        readOnly={preview}
                        variant={preview ? 'unstyled' : 'default'}
                        className={`${preview ? 'text-mine-shaft-300 font-semibold' : ''}`}
                        label="Email"
                        placeholder="Enter email"
                    />
                </div>
                <div className='flex gap-10 [&>*]:w-1/2'>
                    <NumberInput withAsterisk hideControls
                        readOnly={preview}
                        variant={preview ? 'unstyled' : 'default'}
                        className={`${preview ? 'text-mine-shaft-300 font-semibold' : ''}`}
                        label="Phone Number"
                        placeholder="Enter phone number"
                        min={0}
                        max={9999999999}
                        clampBehavior='strict'
                    />
                    <TextInput withAsterisk
                        readOnly={preview}
                        variant={preview ? 'unstyled' : 'default'}
                        className={`${preview ? 'text-mine-shaft-300 font-semibold' : ''}`}
                        label="Personal Portfolio"
                        placeholder="Enter url"
                    />
                </div>
                <FileInput withAsterisk leftSection={<IconPaperclip stroke={1.5} />}
                    readOnly={preview}
                    variant={preview ? 'unstyled' : 'default'}
                    className={`${preview ? 'text-mine-shaft-300 font-semibold' : ''}`}
                    label="Attach Your CV"
                    placeholder="Your CV"
                    leftSectionPointerEvents='none'
                />
                <Textarea withAsterisk
                    readOnly={preview}
                    variant={preview ? 'unstyled' : 'default'}
                    className={`${preview ? 'text-mine-shaft-300 font-semibold' : ''}`}
                    placeholder="Say something about yourself..."
                    label="Cover Letter"
                    autosize
                    minRows={4}
                />
                {
                    !preview && <Button onClick={handlePreview} color='brightSun.4' variant="light" >Preview</Button>
                }
                {
                    preview && <div className='flex gap-10 [&>*]:w-1/2'>
                        <Button fullWidth onClick={handlePreview} color='brightSun.4' variant="outline" >Edit</Button>
                        <Button fullWidth onClick={handleSubmit} color='brightSun.4' variant="light" >Submit</Button>
                    </div>
                    
                }
            </div>
        </div>
        <Notification className={`!border-bright-sun-400 !fixed top-0 left-[35%] z-[1001]  transition duration-300 ease-in-out
            ${submit?'translate-y-0':'-translate-y-20'}`} icon={<IconCheck size={20} />} color="teal" title="Application Submitted" mt="md" withBorder withCloseButton={false}>
                Redirecting to Find Jobs in {sec} seconds... 
      </Notification>
      </>
    )
}

export default ApplyJobComp