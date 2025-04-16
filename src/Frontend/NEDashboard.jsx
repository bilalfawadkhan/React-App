import React from 'react'

const NEDashboard = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-gray-800 text-white p-4">
        <form className='flex items-center gap-x-4 grow ml-auto'>
          <input type="text" placeholder="Search..." className='w-96'/>
          <button >Search</button>
        </form>
        <div className="bg-red-400 flex items-center justify-self-end gap-x-5 p-2">
          <img src="home_13317522.png" className=""/>
          <img src="home_13317522.png" className=""/>
          <img src="home_13317522.png" className=""/>
          <p>Secure one</p>
      </div>
        </div>

      <div className='grid grid-cols-2 gap-4 p-4'>
      <div className=" bg-violet-300 h-20">1</div>
      <div className=" bg-red-300 h-20">2</div>

      <div className=" bg-blue-300 h-20">3</div>
      <div className=" col-start-1 bg-cyan-300 h-20">5</div>
      </div>
      
    </div>
  )
}

export default NEDashboard
