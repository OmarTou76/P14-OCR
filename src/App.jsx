import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CreateEmployee } from './pages/CreateEmployee'
import { ViewEmployees } from './pages/ViewEmployees'

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateEmployee />} />
        <Route path='/employees' element={<ViewEmployees />} />
      </Routes>
    </BrowserRouter>
  )
}