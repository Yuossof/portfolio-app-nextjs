import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { X } from 'lucide-react'

const SkillsItems = ({skillsFetch2, setSkillsFetch2}: {skillsFetch2: boolean, setSkillsFetch2: any}) => {
    const [data, setData] = useState([])
    const [activeItemId, setActiveItemId] = useState("")
    const [isLoading, setIsloading] = useState<boolean>(false)
    useEffect(() => {
        const getSkills = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/admin/skills")
                const skills = res.data
                setData(skills)
                console.log(skills)
            } catch (error) {
                console.log(error)
            }
        }

        getSkills()
    }, [skillsFetch2])

    const deleteSkill = async (skillId: string) => {
        try {
            setIsloading(true)
            await axios.delete(`http://localhost:3000/api/admin/skills/${skillId}`)
            setSkillsFetch2(prev => !prev)
        } catch (error) {
            setIsloading(false)
            console.log(error)
        } finally {
            setIsloading(false)
        }
    }
  return (
    <div className='flex items-center gap-2'>
        {data.map((skill: {id: string, name: string})=> (
            <div style={{opacity: activeItemId === skill.id && isLoading === true ? "0.6" : ""}} className='bg-emerald-50 border-[1px] border-gray-300 rounded-xl px-3 py-1 w-[110px] flex items-center justify-between gap-2' key={skill.id}>
                <span className='text-sm text-gray-600'>{skill.name}</span>
                <span>
                 <X className='w-[17px] cursor-pointer hover:opacity-80 text-gray-600' onClick={()=> {
                    deleteSkill(skill.id)
                    setActiveItemId(skill.id)
                 }}/>
                </span>
            </div>
        ))}
    </div>
  )
}

export default SkillsItems