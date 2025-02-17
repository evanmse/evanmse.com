import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      {/* Spotlights */}
      <div className="absolute inset-0 pointer-events-none">
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
        <Spotlight className='h-[80vh] w-[50vw] top-10 left-full' fill='purple'/>
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='purple'/>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.2] top-0 left-0 flex items-center justify-center" />

      {/* Mask Effect */}
      <div className="absolute inset-0 pointer-events-none dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className='relative flex justify-center'>
        <div className='max-w-[89vw] z-10'>
          <h2 className='uppercase tracking-widest text-xs text-center'>
            Dynamic Web with Next.js
          </h2>
          <TextGenerateEffect className="text-center text-4xl md:text-5xl lg:text-6xl" words="Découvrez comment nous pouvons transformer votre vision." />
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Salut c’est Evan, Co-Fondateur de Hasfy et développeur situé en France.</p>

          <a href="#about" className='block w-fit md:w-60 mx-auto'>
            <MagicButton title="Mes réalisations" icon={<FaLocationArrow />} possition='right'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default hero