import React from 'react'

const NEDashboard = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-gray-800 text-white p-4">
        <form className='flex mx-auto'>
          <input type="text" placeholder="Search..."/>
          <button >Search</button>
        </form>
        <div className="bg-red-400 flex items-center ml-auto gap-x-5 p-2">
          <img src="home_13317522.png" className=""/>
          <img src="home_13317522.png" className=""/>
          <img src="home_13317522.png" className=""/>
          <p>Secure one</p>
      </div>
        </div>

      <div className='grid grid-cols-2 gap-4 p-4'>
      <div className="nbox1"></div>
      <div className="nbox2"></div>
      <div className="nbox3"></div>
      <div className="nbox4"></div>
      <div className="nbox5"></div>
      </div>
      
    </div>
  )
}

export default NEDashboard
