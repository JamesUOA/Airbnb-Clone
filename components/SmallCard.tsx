import React from 'react'
import Image from 'next/image'


export default function SmallCard({img, location, distance}:Explore ) {
  return (
    <div className='flex items-center m-5 space-x-4 rounded-xl cursor-pointer 
                hover:bg-gray-100 transform duration-200 ease-out'>
        <div className='relative h-16 w-16'>
            <Image src={img} 
                    layout='fill'
                    objectFit='contain' 
                    objectPosition='left'
                    className='rounded-lg'
            />
        </div>
        <div className=''>
            <h2 className='font-bold'>{location}</h2>
            <h3 className='text-gray-500'>{distance}</h3>
        </div>
    </div>
  )
}

export type Explore = { img: string; location: string; distance:string }