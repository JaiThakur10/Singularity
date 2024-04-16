"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SignupPage() {

  const router = useRouter()

  const [user,setUser] =useState({
    email: "",
    password: "",
    username: ""
  })

  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading,setLoading] = useState(false)

  const onSignup = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup",user)

      console.log("Signup Success", response.data);
      router.push('/login')




    } catch (error: any) {
      console.log("Signup failed");
      toast.error(error.message)
    }
  }

  useEffect (() => {
    if(user.email.length > 0 && user.password.length>0 && user.username.length >0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  },[user])

  return (
    <div className=' flex flex-col items-center justify-center min-h-screen py-2 bg-[]'>
      <div className='  h-[400px] w-[300px] flex flex-col items-center justify-center border-2 border-black shadow-md shadow-[#60A5FA]'>
      <h1 className=' mb-10 bg-[#60A5FA] p-1 rounded-md shadow-md shadow-black'>{loading? "Processing": "Signup"}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
      className=' bg-black text-white h-10 shadow-blue-600 shadow-md'
      id='username'
      value={user.username}
      onChange={(e) => setUser({...user, username: e.target.value})}
      placeholder='             username'
      type="text" />

    
      <hr />
      <label htmlFor="username">Email</label>
      <input
      className=' bg-black text-white h-10 shadow-blue-600 shadow-md'
      id='username'
      value={user.email}
      onChange={(e) => setUser({...user, email: e.target.value})}
      placeholder='             email'
      type="text" />



      <hr />
      <label htmlFor="username">Password</label>
      <input
      className=' bg-black text-white h-10 shadow-blue-600 shadow-md'
      id='username'
      value={user.password}
      onChange={(e) => setUser({...user, password: e.target.value})}
      placeholder='             password'
      type="text" />

<Button className=' mt-8' 
onClick={onSignup}>
        {buttonDisabled ? "Please fill the form" : "Signup"}
      </Button>
      <Link href="/login"> If already a user login here! </Link>
      </div>
      
    </div>
  )
}


