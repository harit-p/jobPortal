'use client'
import { Anchor, Button, Checkbox, Group, PasswordInput, Radio, TextInput } from '@mantine/core'
import { IconAt, IconCheck, IconLock, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { registerUser } from '@/services/UserService'
import React, { useState } from 'react'
import { sign } from 'crypto'
import { signupValidation } from '@/services/FormValidation'
import { notifications } from '@mantine/notifications'
import { useRouter } from 'next/navigation'

const form={
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'APPLICANT'
}

const Signup = () => {
  const [data, setData] = useState<{[key:string]:string}>(form);
  const [formError, setFormError] = useState<{[key:string]:string}>(form);
  const router = useRouter();

  const handleChange = (event:any) => {
    if(typeof (event) === 'string') {
      setData({ ...data, accountType: event});
      return; 
    }
    let name = event.target.name;
    let value = event.target.value;
    setData({ ...data,[name]:value });
    setFormError({ ...formError, [name]: signupValidation(name, value) });

    if(name === 'password' && data.confirmPassword !== "" ) {
      let err = "";
      if(data.confirmPassword !== value) err='Passwords do not match' ;
      setFormError({ ...formError, [name]: signupValidation(name, value), confirmPassword: err });
    }

    if(name === 'confirmPassword' && value !== data.password) {
      setFormError({ ...formError, [name]: 'Passwords do not match' });
    }

  };
  const handleSubmit = () => {
    let valid=true, newFormError:{[key:string]:string}={};
    
    for(let key in data){
      if(key=== 'accountType') continue;
      if(key!== 'confirmPassword') newFormError[key]=signupValidation(key, data[key]);
      else if(data[key] !== data["password"]) newFormError[key]='Passwords do not match';
      if(newFormError[key]) valid=false;
    
    }
    setFormError(newFormError);
    
    if(valid===true){
        registerUser(data).then((response) => { 
          console.log(response);
          setData(form);
          notifications.show({
            title: 'Registered Successfully',
            message: 'Redirecting to login page',
            withCloseButton: true,
            icon:<IconCheck style={{width:"90%", height:"90%"}} />,
            color: 'teal',
            withBorder: true,
            className:"!border-green-500"
          })
          setTimeout(() => {
            router.push('/login');
          }, 4000);
        }).catch((error) => {
          console.log(error);
          notifications.show({
            title: 'Registration Failed',
            message: error.response.data.errorMessage,
            withCloseButton: true,
            icon:<IconX style={{width:"90%", height:"90%"}} />,
            color: 'red',
            withBorder: true,
            className:"!border-red-500"
          })
        });

    }
  };
  return (
    <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
      <div className='text-2xl font-semibold'>Create Account</div>
      <TextInput value={data.name} name='name' error={formError.name} onChange={handleChange} withAsterisk label="Full Name" placeholder="Your Name" />
      <TextInput value={data.email} name='email' error={formError.email} onChange={handleChange} withAsterisk leftSection={<IconAt size={16} />} label="Email" placeholder="Your email" />
      <PasswordInput value={data.password} name='password' error={formError.password} onChange={handleChange} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Create Password" />
      <PasswordInput value={data.confirmPassword} name='confirmPassword' error={formError.confirmPassword} onChange={handleChange} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Confirm Password" placeholder="Confirm Password" />
      <Radio.Group
        value={data.accountType}
        onChange={handleChange}
        label="You are ? "
        withAsterisk
      >
        <Group mt="xs">
          <Radio className='py-4 px-6 hover:bg-mine-shaft-900 border has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg' autoContrast value="APPLICANT" label="Applicant" />
          <Radio className='py-4 px-6 hover:bg-mine-shaft-900 border has-[:checked]:bg-bright-sun-400/5 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg' autoContrast value="EMPLOYER" label="Employer" />
        </Group>
      </Radio.Group>
      <Checkbox autoContrast label={<>I accept{' '}<Anchor>terms & conditions</Anchor></>} />
      <Button onClick={handleSubmit} autoContrast variant="filled">Sign up</Button>
      <div className='mx-auto'>Already have an account? <span onClick={()=>{router.push('/login'); setFormError(form); setData(form)}} className='text-bright-sun-400 hover:underline cursor-pointer'>Login</span></div>
    </div>
  )
}

export default Signup;