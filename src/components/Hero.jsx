import React from 'react'

const Hero = () => {
  return (
    <div class="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black/80 before:z-10">
        <img src="src/assets/images/svg_palace.webp" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

        <div class="min-h-[380px] relative z-50 h-full max-w-5xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 class="text-white sm:text-4xl text-3xl font-semibold leading-tight mb-6">
            Showcase Your Product or Service in Style
          </h2>
          <p class="text-base text-center text-slate-200 leading-relaxed">
            Highlight what makes your brand unique with a bold, modern banner design.
            Perfect for product launches, service promotions, or portfolio features,
            this layout helps you connect with your audience and inspire them to take action.
            Make your first impression unforgettable.
          </p>
          <button type="button"
            class="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-medium outline-none bg-blue-600 hover:bg-blue-700 border-2 border-blue-600 transition-all duration-300 cursor-pointer">
            Getting started now
          </button>
        </div>
      </div>
  )
}

export default Hero