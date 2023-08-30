import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='bg-blue-300 h-[12vh] grid grid-cols-2 justify-center items-center text-white  '>
         <h1 className='italic text-[1.2rem] cursor-pointer  ml-10'>Satya-Blog</h1>
        <nav>
           
            <ul className='flex justify-end gap-3 pr-10 italic '>
               <Link to='/allpost'> <li >Home</li></Link>
               <Link to='/createpost'> <li>Create</li></Link>
               <Link  to='/myprofile'> <li>Profile</li></Link>
              
            </ul>
        </nav>

    </div>
  )
}

export default Home