import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import TourLayout from './components/TourLayout'
import TourAddPage from './pages/TourAddPage'
import TourPlanPage from './pages/TourPlanPage'
import HomePage from './pages/HomePage'

const router = createBrowserRouter([
  
  {
      path:'/',
      element:<TourLayout/>,
      children:[
      {path:'/', element:<HomePage/>},
      {path:'/add', element:<TourAddPage/>},
      {path:'/plan/:id', element:<TourPlanPage/>},
      {path:'/plan/completed/:id', element:<TourPlanPage/>},
      
    ],
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

