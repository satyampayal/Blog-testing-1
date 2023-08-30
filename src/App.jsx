
import './App.css'
import Home from './Components/Home'
import AllPost from './Components/AllPost'
import CreatePost from './Components/CreatePost'
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react'

function App() {
  
  return (
    <>
        <Home/>
        <Routes>
           <Route path='/allpost'  element={<AllPost  />} />
           <Route  path='/createpost'  element={<CreatePost/>}/>

        </Routes>
    </>
  )
}

export default App
