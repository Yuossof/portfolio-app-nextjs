"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { Button } from './ui/button'
import { Input } from './ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const LoginForm = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [resErr, setResErr] = useState("")
    const handleSubmit = async (eo: React.FormEvent) => {
        eo.preventDefault()
        try {
            setIsLoading(true)
            await axios.post("http://localhost:3000/api/admin/user/login", {
                email: email,
                password: password
            })
            setIsLoading(false)
            router.push("/admin")
        } catch (error) {
            setIsLoading(false)

            // console.log(error.response.data.message)
            setResErr(error.response.data.message)
        }
    }

    return (
        <div className='bg-white shadow-lg px-5 pt-6 pb-7 border-2 rounded-md w-[400px] mt-40'>
            <h1 className='text-center text-4xl'>🔐 Auth</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 mt-10'>
                <div className='flex flex-col gap-3'>
                    <Input onChange={(eo) => setEmail(eo.target.value)} type="email" value={email} placeholder='email' />
                    <Input onChange={(eo) => setPassword(eo.target.value)} type="password" value={password} placeholder='password' />
                </div>
                <div className='flex flex-col gap-2 mt-3'>
                    {resErr !== "" && <span className='text-[13px] text-red-400'>* {resErr}</span>}
                    <Link className='text-muted-foreground hover:underline text-[13px] ml-2' href="/admin/login/reset">
                      forget password?
                    </Link>
                    <Button disabled={isLoading} type='submit'>
                        {isLoading ? "wait..." : "Login"}
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default LoginForm