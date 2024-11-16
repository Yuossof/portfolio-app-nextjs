"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Trash } from 'lucide-react'
import axios from 'axios'


const Skills = ({ admin, id }: { admin: boolean, id: string }) => {
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
    }, [])

    const deleteSkill = async (skillId: string) => {
        try {
            setIsloading(true)
            await axios.delete(`http://localhost:3000/api/admin/skills/${skillId}`)
            setIsloading(false)
            window.location.reload()
        } catch (error) {
            setIsloading(false)
            console.log(error)
        } finally {
            setIsloading(false)
        }
    }

    return (
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
            <div className=" px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Skills</h2>
                {data.length <= 0 ? (
                    <span className="flex justify-center w-full text-md text-muted-foreground">
                        no skills yet!
                    </span>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                        {data.map((skill: { name: string, id: string }) => (
                            <Card style={{ opacity: activeItemId === skill.id && isLoading === true ? "0.6" : "" }}
                                onMouseOver={() => setActiveItemId(skill.id)}
                                onMouseLeave={() => setActiveItemId(isLoading === false ? "" : skill.id)}
                                key={skill.id} className="flex items-center justify-center p-4 h-24 relative">
                                {admin !== true || !admin || !id ? "" : activeItemId === skill.id && <Trash
                                    onClick={() => deleteSkill(skill.id)}
                                    className='absolute top-2 right-2 cursor-pointer hover:opacity-80' />
                                }
                                <CardContent className="text-center p-0">
                                    <p className="text-lg font-semibold">{skill.name}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                )}
            </div>

        </section>
    )
}

export default Skills