import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CreateEmployee } from './pages/CreateEmployee'

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateEmployee />} />
      </Routes>
    </BrowserRouter>
  )
}