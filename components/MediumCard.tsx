import Image from 'next/image';
import React from 'react'


export default function MediumCard({img, title} : CardData) {
  return (
    <div className='cursor-pointer hover:scale-105 
    trasform transition duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image src={img} layout='fill' className='rounded-xl'/>
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export type CardData = { img: string; title:string }

