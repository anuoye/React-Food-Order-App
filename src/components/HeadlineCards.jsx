import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
  {/* Overlay */}

  <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
    <p className='px-2'>Through 8/26</p>
    <button className='border-white rounded-full p-2 bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
  </div>
<img
className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
src='https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'
alt='/'
/>
        </div>


        {/* Card */}
        <div className='rounded-xl relative'>
  {/* Overlay */}

  <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
    <p className='px-2'>Added daily</p>
    <button className='border-white rounded-full p-2 bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
  </div>
<img
className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
src='https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D'
alt='/'
/>
        </div>

        {/* Card */}
        <div className='rounded-xl relative'>
  {/* Overlay */}

  <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
    <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts</p>
    <p className='px-2'>Home Delivery</p>
    <button className='border-white rounded-full p-2 bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
  </div>
<img
className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
src='https://plus.unsplash.com/premium_photo-1683121324022-d039da524194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fHww'
alt='/'
/>
        </div>
        
    </div>
  )
}

export default HeadlineCards