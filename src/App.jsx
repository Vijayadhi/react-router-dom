import React from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardContent from './components/DashboardContent'
import AIContnet from './components/AIContnet'
import UI_UX_Contnet from './components/UI_UX_Contnet'
import BlockChain from './components/BlockChain'
import CyberSecurity from './components/CyberSecurity'
import CloudComputing from './components/CloudComputing'
import Development from './components/Development'

function App() {
  return (
    <>
      <div class="d-flex" id="wrapper">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path='/development' element={<Development />}/>
            <Route path='/ai_content' element={<AIContnet />}/>
            <Route path='/ui_ux' element={<UI_UX_Contnet />}/>
            <Route path='/dashboard' element={<DashboardContent />}/>
            <Route path='/blockChain' element={<BlockChain />}/>
            <Route path='/cyber_security' element={<CyberSecurity />}/>
            <Route path='/cloud_computing' element={<CloudComputing />}/>
          </Routes>

        </BrowserRouter>

      </div>

    </>
  )
}

export default App