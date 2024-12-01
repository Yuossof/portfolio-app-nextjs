"use client"
import React from 'react'
import { Trash } from 'lucide-react'
import { Edit } from 'lucide-react'

const ManageProjects = () => {

    return (
        <div className='w-2/3 mt-10'>


            <div className="relative overflow-x-auto rounded-md border-[1px] border-slate-200 sm:r-lg w-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase  bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Project Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Project title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Github Link
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4 flex gap-4 items-center">
                               <Trash className='w-[22px] h-[22px]'/>
                               <Edit className='w-[22px] h-[22px]'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ManageProjects