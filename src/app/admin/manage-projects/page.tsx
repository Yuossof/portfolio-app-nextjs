
import ManageProjects from '@/components/projectsComponents/ManageProjects'
import React from 'react'
import SidebarV2 from '@/components/AdminComponents/SidebarV2'

const page = () => {
  return (
    <div className='flex gap-36'>
      <SidebarV2 />
      <ManageProjects />
    </div>
  )
}

export default page