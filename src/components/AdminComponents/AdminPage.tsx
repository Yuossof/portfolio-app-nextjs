'use client'
import { useState } from 'react'
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import axios from "axios"
import Link from 'next/link'
import { LogOut } from 'lucide-react'
import { X } from 'lucide-react'
import { Settings } from 'lucide-react'
import SkillsItems from './skillsItems'
import { useRouter } from 'next/navigation'
import Sidebar from './Sidebar'
type Route = 'home' | 'projects' | 'skills'

export default function AdminPage() {
  const router = useRouter()
  const [currentRoute, setCurrentRoute] = useState<Route>('skills')
  const [skillName, setSkillName] = useState('')
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectStatus, setProjectStatus] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingForProjects, setIsLoadingForProjects] = useState<boolean>(false)
  const [logoutText ,setLogoutText] = useState<string>("")
  const [logoutTextInpValue ,setLogoutTextInpValue] = useState<string>("")
  const [showBox, setShowBox] = useState<boolean>(false)
  const [skillsFetch2, setSkillsFetch2] = useState<boolean>(false)
  const [logoutLouding, setLogoutLoading] = useState<boolean>(false)

  const handleSkillSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await axios.post("http://localhost:3000/api/admin/skills", {
      name: skillName
    })
    setSkillName('')
    setIsLoading(false)
  }

  const handleProjectsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsLoadingForProjects(true)
      await axios.post("http://localhost:3000/api/admin/projects", {
        name: projectName,
        description: projectDescription
      })
      setProjectName('')
      setProjectDescription('')
    } catch (error) {
      setIsLoadingForProjects(false)
      console.log(error)
    } finally {
      setIsLoadingForProjects(false)
    }
  }

  const logout = async() => {
    try {
      setLogoutLoading(true)
      await axios.get("http://localhost:3000/api/admin/user/logout")
      router.push("/")
    } catch (error) {
      setLogoutLoading(false)
      console.log(error.response.data.message)
    }finally{
      setLogoutLoading(false)
    }
  }


  function generateRandomWord(length = 15) {
    setShowBox(true)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    setLogoutText(result);
}

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar setCurrentRoute={setCurrentRoute} currentRoute={currentRoute} />

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div onClick={()=> setShowBox(false)} className={`fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 z-50 ${showBox ? "flex" : "hidden"} justify-center items-start`}>
          <div onClick={(eo)=> eo.stopPropagation()} className='w-[500px] h-auto bg-white p-5 border-2 rounded-md flex flex-col gap-4 items-center mt-12 relative'>
            <X onClick={()=> setShowBox(false)} className='absolute top-2 right-3 cursor-pointer text-gray-600 hover:opacity-75'/>
            <h1 className='text-2xl'>{logoutText || "thisKey1222"}</h1>
            <div className='w-full flex flex-col gap-2 items-center'>
              <Input value={logoutTextInpValue} onChange={(eo)=> setLogoutTextInpValue(eo.target.value)} type='text' placeholder='enter the text'/>
              <Button disabled={logoutLouding} onClick={()=> {
                if(logoutTextInpValue === logoutText){
                  logout()
                }else{
                  console.log("not valid")
                }
              }} className='w-full'>Submit</Button>
            </div>
          </div>
        </div>

        {currentRoute === 'home' && (
          <>
            <Card className='relative'>
              <CardHeader>
                <CardTitle>Welcome to the Admin Dashboard</CardTitle>
                <CardDescription>Manage your projects and skills from here.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Select a section from the sidebar to get started.</p>
              </CardContent>
              <Button onClick={()=> generateRandomWord()} className='absolute top-2 right-3' variant="destructive">Logout <LogOut className=' rotate-180'/></Button>
            </Card>
          </>
        )}

        {currentRoute === 'skills' && (
          <section className="space-y-6">

            <h2 className="text-2xl font-semibold">Skills Management</h2>
            <Card className='relative'>
            <div className=' absolute top-2 right-3'>
              <SkillsItems skillsFetch2={skillsFetch2}/>
            </div>
              <CardHeader>
                <CardTitle>Create New Skill</CardTitle>
                <CardDescription>Add a new skill to the system</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSkillSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="skillName">Skill Name</Label>
                    <Input
                      id="skillName"
                      value={skillName}
                      onChange={(e) => setSkillName(e.target.value)}
                      placeholder="Enter skill name"
                      required
                    />
                  </div>
                  <Button onClick={()=> setSkillsFetch2(prev => !prev)} disabled={isLoading} type="submit">
                    {isLoading ? "wait..." : "Create Skill"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        )}

        {currentRoute === 'projects' && (
          <section className="space-y-6 relative">
            <Link href="/admin/manage-projects" className={buttonVariants({
              className: "absolute right-3 top-0 border-2",
            })}>Manage Projects <Settings /></Link>
            <h2 className="text-2xl font-semibold">Project Management</h2>
            <Card>
              <CardHeader>
                <CardTitle>Create New Project</CardTitle>
                <CardDescription>Add a new project to the system</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProjectsSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectName">Project Name</Label>
                    <Input
                      id="projectName"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="Enter project name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectDescription">Project Description</Label>
                    <Textarea
                      id="projectDescription"
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder="Enter project description"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectStatus">Project Status</Label>
                    <Input
                      id="projectStatus"
                      value={projectStatus}
                      onChange={(e) => setProjectStatus(e.target.value)}
                      placeholder="Enter project status"
                      required
                    />
                  </div>
                  <Button disabled={isLoadingForProjects} type="submit">
                    {isLoadingForProjects ? "waite..." : "Create Project"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        )}
      </main>
    </div>
  )
}