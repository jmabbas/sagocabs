import React from 'react'

const Choose = () => {
  return (
    <div
      class="bg-white shadow-sm border border-gray-200 p-2 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
      <div class="aspect-[3/2]">
        <img src="https://readymadeui.com/cardImg.webp" class="w-full h-full object-cover rounded-lg" />
      </div>
      <div class="p-4 text-center">
        <h3 class="text-xl font-bold">Heading</h3>
        <p class="mt-3 text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu,
          at fermentum dui. Maecenas</p>
        <button type="button"
          class="mt-6 px-4 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-medium border-none outline-none bg-blue-600 hover:bg-blue-700 cursor-pointer">View</button>
      </div>
    </div>
  )
}

export default Choose