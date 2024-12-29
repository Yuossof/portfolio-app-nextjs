'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface ProjectImagesProps {
    projectsImages: [
      {
        imageUrl: string
      }
    ]
}

export default function ProjectImages({ projectsImages }: ProjectImagesProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-full lg:h-[450px] xl:h-[500px] 2xl:h-[550px] md:h-[360px] sm:h-[200px] h-[200px]"
    >
      {projectsImages.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full relative shadow-md ">
            <Image
              src={image.imageUrl}
              alt={`Project image ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              className=' border-2 border-gray-500 rounded-md'

            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

