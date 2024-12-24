"use client"
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { ImageIcon, Plus, Settings, Upload, X } from 'lucide-react';
import Image from 'next/image';
import { Button, buttonVariants } from '../ui/button';
import { useRef } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardDescription, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
interface CloudinaryResponse {
    url: string;
}

const AddProductBox = () => {
    const [uploadedImages, setUploadedImages] = useState<Array<{ file: File; preview: string }>>([]);
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [projectTag, setProjectTag] = useState<string>('')
    const [isLoadingForProjects, setIsLoadingForProjects] = useState<boolean>(false)
    const [tags, setTags] = useState<string[]>([])
    const [demoUrl, setDemoUrl] = useState("")
    const [githubUrl, setGithubUrl] = useState("")

    const pushTags = () => {
        if (projectTag !== "") {
            setProjectTag("")
            setTags((prevTags) => [...prevTags, projectTag]);
        }
    };

    const removeTag = (tagToRemove: string) => {
        setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
    };

    const handleFileChange = (files: FileList | null) => {
        if (files) {
            const newFiles = Array.from(files);
            const imagePreviews = newFiles.map(file => ({
                file,
                preview: URL.createObjectURL(file)
            }));
            setUploadedImages((prevImages) => [...prevImages, ...imagePreviews]);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    const handleRemoveImage = (index: number) => {
        setUploadedImages(prevImages => prevImages.filter((_, i) => i !== index))
    }


    const uploadImages = async (): Promise<string[]> => {
        try {
            const uploadPromises = uploadedImages.map(async (image) => {
                const form = new FormData();
                form.append("file", image.file); 
                form.append("upload_preset", process.env.NEXT_PUBLIC_PRESET_NAME as string);

                const res = await axios.post<CloudinaryResponse>(
                    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/upload`,
                    form
                );

                return res.data.url;
            });

            const urls = await Promise.all(uploadPromises);
            console.log(urls);
            return urls;
        } catch (error) {
            console.error("Error uploading images:", error);
            return [];
        }
    };

    const handleProjectsSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoadingForProjects(true)
        const imageUrl = await uploadImages()
        try {
            await axios.post("http://localhost:3000/api/admin/projects", {
                name: projectName,
                description: projectDescription,
                ProjectsImages: imageUrl,
                tags: tags,
                demoUrl: "no yet",
                githubUrl: "no yet"
            })
            setProjectName('')
            setProjectDescription('')
            setProjectTag('')
            setTags([])
            setDemoUrl("")
            setGithubUrl("")
            setUploadedImages([])

        } catch (error) {
            setIsLoadingForProjects(false)
            console.log(error)
        } finally {
            setIsLoadingForProjects(false)
        }
    }

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragging(false)
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragging(false)
        const files = e.dataTransfer.files
        handleFileChange(files)
    }
    return (
        <div>
            <section className="space-y-6 relative">
                <Link href="/admin/manage-projects" className={buttonVariants({
                    className: "absolute right-3 top-0 border-2",
                })}>Manage Projects <Settings /></Link>
                <h2 className="text-2xl font-semibold">Project Management</h2>
                <Card className='relative '>
                    <div
                        className='absolute top-2 right-2 flex flex-wrap gap-2 max-w-[40%]'
                    >
                        {tags.map((tag, i) => (
                            <div key={i} className='bg-emerald-50 rounded-xl px-3 py-1 flex items-center gap-2 border-[1px] border-gray-200'>
                                <span className='text-gray-700' >
                                    {tag}
                                </span>
                                <X onClick={() => removeTag(tag)} className='w-4 h-4 opacity-80 hover:opacity-75 hover:scale-110 hover:rotate-90 transition cursor-pointer' />
                            </div>

                        ))}
                    </div>
                    <CardHeader>
                        <CardTitle>Create New Project</CardTitle>
                        <CardDescription>Add a new project to the system</CardDescription>

                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="">
                                <Label className='text-gray-600' htmlFor="projectName">Project Name</Label>
                                <Input
                                    id="projectName"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                    placeholder="Enter project name"
                                    required
                                />
                            </div>
                            <div className='flex items-center w-full gap-3'>
                                <div className="w-[50%]">
                                    <Label className='text-gray-600' htmlFor="demourl">Demo Url</Label>
                                    <Input
                                        id="demourl"
                                        value={demoUrl}
                                        onChange={(e) => setDemoUrl(e.target.value)}
                                        placeholder="Enter demo url"
                                        required
                                    />
                                </div>
                                <div className="w-[50%]">
                                    <Label className='text-gray-600' htmlFor="githuburl">Github Url</Label>
                                    <Input
                                        id="githuburl"
                                        value={githubUrl}
                                        onChange={(e) => setGithubUrl(e.target.value)}
                                        placeholder="Enter github url"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <Label className='text-gray-600'>Tags</Label>
                                <div className="flex items-center gap-3 w-1/4">
                                    <Input
                                        className='w-5/6'
                                        id="projectStatus"
                                        value={projectTag}
                                        onChange={(e) => setProjectTag(e.target.value)}
                                        placeholder="Tags"
                                        required
                                    />
                                    <Button className='w-1/6' onClick={() => pushTags()}><Plus /></Button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className='text-gray-600' htmlFor="projectDescription">Project Description</Label>
                                <Textarea
                                    id="projectDescription"
                                    value={projectDescription}
                                    onChange={(e) => setProjectDescription(e.target.value)}
                                    placeholder="Enter project description"
                                    required
                                />
                            </div>

                        </form>

                        <div>
                            <div className="space-y-2">
                                {/* <Label>Product Images</Label> */}
                                <div
                                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? 'border-primary bg-primary/10' : 'border-gray-300'
                                        }`}
                                    onDragEnter={handleDragEnter}
                                    onDragLeave={handleDragLeave}
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                >
                                    <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                                    <h3 className="text-xl font-semibold mb-2">Drag and drop your images here</h3>
                                    <p className="text-sm text-gray-500 mb-6">or</p>
                                    <Button
                                        onClick={handleUploadClick}
                                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-6 rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 shadow-lg"
                                    >
                                        <Upload className="w-5 h-5 mr-2" />
                                        Select Files
                                    </Button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={(e) => handleFileChange(e.target.files)}
                                        hidden
                                        multiple
                                        accept="image/*"
                                    />
                                </div>
                            </div>
                            {uploadedImages.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-5">
                                    {uploadedImages.map((image, index) => (
                                        <div key={index} className="relative group">
                                            <Image
                                                src={image.preview}
                                                alt={`Uploaded image ${index + 1}`}
                                                width={200}
                                                height={200}
                                                className="rounded-lg object-cover w-full h-40 shadow-md transition-transform duration-200 ease-in-out group-hover:scale-105"
                                            />
                                            <button
                                                onClick={() => handleRemoveImage(index)}
                                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                                aria-label="Remove image"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                    </CardContent>
                    <CardFooter className='w-full flex justify-end'>
                        <Button disabled={isLoadingForProjects} onClick={handleProjectsSubmit}>Create</Button>
                    </CardFooter>
                </Card>
            </section>
        </div>
    )
}

export default AddProductBox