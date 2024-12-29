'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { LogOut } from 'lucide-react'
import { X } from 'lucide-react'
import SkillsItems from './skillsItems'
import { useRouter } from 'next/navigation'
import Sidebar from './Sidebar'
import AddProductBox from './AddProductBox'
type Route = 'home' | 'projects' | 'skills'

export default function AdminPage() {
  const router = useRouter()
  const [currentRoute, setCurrentRoute] = useState<Route>('skills')
  const [skillsData, setSkillsData] = useState({
    name: "",
    description: "",
  })

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [logoutText ,setLogoutText] = useState<string>("")
  const [logoutTextInpValue ,setLogoutTextInpValue] = useState<string>("")
  const [showBox, setShowBox] = useState<boolean>(false)
  const [skillsFetch2, setSkillsFetch2] = useState<boolean>(false)
  const [logoutLouding, setLogoutLoading] = useState<boolean>(false)

  const handleSkillSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await axios.post(`${process.env.NEXT_BASE_URL}/api/admin/skills`, {
      name: skillsData.name,
      description: skillsData.description,
    })
    setSkillsFetch2(prev => !prev)
    setSkillsData({name:'', description: ""})
    setIsLoading(false)
  }



  const logout = async() => {
      setLogoutLoading(true)
      await axios.get(`${process.env.NEXT_BASE_URL}/api/admin/user/logout`)
      router.push("/")
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
              <SkillsItems setSkillsFetch2={setSkillsFetch2} skillsFetch2={skillsFetch2}/>
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
                      value={skillsData.name}
                      onChange={(e) => setSkillsData({
                        ...skillsData,
                        name: e.target.value
                      })}
                      placeholder="Enter skill name"
                      required
                    />
                  </div>
 
                  <div className="space-y-2">
                    <Label htmlFor="description">Skill Name</Label>
                    <Input
                      id="description"
                      value={skillsData.description}
                      onChange={(e) => setSkillsData({
                        ...skillsData,
                        description: e.target.value
                      })}
                      placeholder="Enter Description"
                      required
                    />
                  </div>
                  <Button disabled={isLoading} type="submit">
                    {isLoading ? "wait..." : "Create Skill"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        )}

        {currentRoute === 'projects' && (
          <AddProductBox />
        )}
      </main>
    </div>
  )
}