import React from 'react'

const NEDashboard = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-gray-800 text-white p-4">
        <form className='flex mx-auto'>
          <input type="text" placeholder="Search..."/>
          <button >Search</button>
        </form>
        <div className="bg-red-400 flex items-center ml-auto gap-x-4 p-2">
          <img src="home_13317522.png" className=""/>
          <img src="home_13317522.png" className=""/>
          <img src="home_13317522.png" className=""/>
          <p>Secure one</p>
      </div>
        </div>

      <div className='grid grid-cols-2 gap-4 p-4'>
      <div className="nbox1 bg-violet-300 h-20">1</div>
      <div className="nbox2 bg-red-300 h-20">2</div>

      <div className="nbox3 bg-blue-300 h-20">3</div>
      <div className="nbox4 bg-green-300 h-20">4</div>
      <div className="nbox5 bg-cyan-300 h-20">5</div>
      </div>
      
    </div>
  )
}

export default NEDashboard
