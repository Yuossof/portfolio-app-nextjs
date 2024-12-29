"use client"
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'

const LoadingSkeleton = () => {
    return (
        <Card className="overflow-hidden z-20 group rounded-lg border-2 border-gray-700 bg-slate-900 shadow-md h-full flex flex-col a">
            <CardContent className="p-0 flex-grow">
                <div className="relative animate-pulse bg-gray-700 rounded-md w-full overflow-hidden h-48">
                </div>
                <div className="p-4">
                    <div className='bg-gray-700 rounded-md h-5 w-[70%] animate-pulse'></div>
                    <div className='bg-gray-700 rounded-md h-5 w-[80%] mt-2 animate-pulse'></div>
                    <div className='bg-gray-700 rounded-md h-5 w-[80%] mt-2 animate-pulse'></div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <div className='bg-gray-700 h-5 w-11 rounded-md animate-pulse'></div>
                        <div className='bg-gray-700 h-5 w-12 rounded-md animate-pulse'></div>
                        <div className='bg-gray-700 h-5 w-11 rounded-md animate-pulse'></div>
                        <div className='bg-gray-700 h-5 w-14 rounded-md animate-pulse'></div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="mt-auto w-full">
                <div className='w-full flex items-center justify-between gap-4'>
                    <div className='w-3/4 animate-pulse  bg-gray-700 h-8 rounded-md'  >
                    </div>
                    <div className='w-1/4 animate-pulse bg-gray-700 h-8 rounded-md'>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default LoadingSkeleton