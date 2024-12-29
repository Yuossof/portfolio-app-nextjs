"use client"
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const SkillsLoadingSkeleton = () => {
    return (
        <Card className="h-full hover:shadow-md transition-shadow duration-300 shadow-lg bg-slate-800 border-2 border-gray-700 ">
            <CardContent className="p-6">
                <div className="flex items-center mb-3 ">
                   <div className='w-[65%] h-5 bg-gray-700 rounded-md animate-pulse'></div>
                </div>
                <div className='bg-gray-700 rounded-md w-[80%] h-5 animate-pulse'></div>
            </CardContent>
        </Card>
    )
}

export default SkillsLoadingSkeleton