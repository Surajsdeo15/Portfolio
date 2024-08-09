import React from 'react'

function TheoryNavBar({ onTopicSelect }) {

 
  return (
   <>
   <div className='z-20 fixed w-full h-8 md:h-12 text-sm md:text-2xl font-bold text-black md:text-green-500  rounded-xl shadow-xl shadow-cyan-700 bg-gradient-to-tl from-slate-200 via-gray-300 to-slate-200 flex justify-between p-2'>
   <h3 className='hover:underline cursor-pointer' onClick={() => onTopicSelect('C Language')}>C Language</h3>
      <h3 className='hover:underline cursor-pointer' onClick={() => onTopicSelect('C++')}>C++</h3>
      <h3 className='hover:underline cursor-pointer' onClick={() => onTopicSelect('HTML')}>HTML</h3>
      <h3 className='hover:underline cursor-pointer' onClick={() => onTopicSelect('CSS')}>CSS</h3>
      <h3 className='hover:underline cursor-pointer' onClick={() => onTopicSelect('JavaScript')}>JavaScript</h3>
      <h3 className='hover:underline cursor-pointer' onClick={() => onTopicSelect('React')}>React</h3>
      <h3 className='hover:underline cursor-pointer' onClick={() => onTopicSelect('Tailwind')}>Tailwind</h3>
     

   </div>

   
   </>
  )
}

export default TheoryNavBar