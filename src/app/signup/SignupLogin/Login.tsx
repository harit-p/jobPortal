import { loginValidation } from '@/services/FormValidation'
import { loginUser } from '@/services/UserService'
import { Button, PasswordInput, TextInput } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { IconAt, IconCheck, IconLock, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const form={
  email: '',
  password: ''
}

const Login = () => {
  const [data, setData] = useState<{[key:string]:string}>(form);
  const [formError, setFormError] = useState<{[key:string]:string}>(form);
  const router = useRouter();

  const handleChange = (event:any) => {
    setFormError({ ...formError, [event.target.name]: "" });
    setData({ ...data,[event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    let valid=true, newFormError:{[key:string]:string}={};
    
    for(let key in data){
      newFormError[key]=loginValidation(key, data[key]);
      if(newFormError[key]) valid=false;
    }
    setFormError(newFormError);
    if(valid===true){
      loginUser(data).then((response) => { 
        console.log(response);
        notifications.show({
          title: 'Login Successful',
          message: 'Redirecting to home page',
          withCloseButton: true,
          icon:<IconCheck style={{width:"90%", height:"90%"}} />,
          color: 'teal',
          withBorder: true,
          className:"!border-green-500"
        })
        setTimeout(() => {
          router.push('/');
        }, 4000);
      }).catch((error) => {
        console.log(error.response.data);
        notifications.show({
          title: 'Login Failed',
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
        <div className='text-2xl font-semibold'>Login to your Account</div>
        <TextInput value={data.email} name='email' error={formError.email}  onChange={handleChange} withAsterisk leftSection={<IconAt size={16} />} label="Email" placeholder="Your email" />
        <PasswordInput value={data.password} name='password' error={formError.password}  onChange={handleChange} withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} label="Password" placeholder="Enter Password" />
        <Button onClick={handleSubmit} autoContrast variant="filled">Login</Button>
        <div className='mx-auto'>Don't have an account? <span onClick={()=>{router.push('/signup'); setFormError(form); setData(form)}} className='text-bright-sun-400 hover:underline cursor-pointer'>SignUp</span></div>
    </div>
  )
}

export default Login