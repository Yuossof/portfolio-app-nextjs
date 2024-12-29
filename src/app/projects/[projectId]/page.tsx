import React from 'react'
import SingleProject from '@/components/projectsComponents/SingleProject'
import ProjectImages from '@/components/projectsComponents/ProjectImages';
import { Button } from '@/components/ui/button';
import { Github, Globe } from 'lucide-react';
const Page = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const projectId = (await params).projectId

    const response = await fetch(`https://portfolio-app-nextjs-brown.vercel.app/api/projects/${projectId}`, {
      next: {
        revalidate: 120
      },
      cache: "force-cache"
    });
    const data = await response.json();
    if (response.status !== 200) {
      return <div>Error: {data.message}</div>;
    }

    const projectData = data.project;

    return (
      <SingleProject>
        <div className='lg:w-3/5 xl:3/6 2xl:3/6 md:w-4/5 sm:w-[90%] w-[90%] mt-28'>
          <div className='flex w-full justify-between items-center'>
            <h1 className="text-3xl text-slate-50 font-semibold mb-6">{projectData.name}</h1>

            <div className=' flex items-center gap-2'>
              <Button className='w-3/4  text-slate-200 border-2 hover:border-gray-700 hover:bg-slate-900 border-gray-800' size="lg" variant="default" asChild>
                <a href={projectData.demoUrl || "#"} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Live Preview
                </a>
              </Button>
              <Button size="lg" className='w-1/4 bg-[#0b0f22] hover:bg-[#020617e1]  border-2 border-gray-800 text-white' asChild>
                <a href={projectData.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div>
            <ProjectImages projectsImages={projectData.projectsImages} />
          </div>
          <div className="mt-8">
            <p className="text-gray-300">{projectData.description}</p>
          </div>
        </div>
      </SingleProject>


    );

}

export default Page;