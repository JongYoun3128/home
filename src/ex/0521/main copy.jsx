import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut'
import Calender from './pages/Calender'
import CalenderAddPage from './pages/CalenderAddPage'
import CalenderDatePage from './pages/CalenderDatePage'
import Search from './pages/Search'

const  router = createBrowserRouter([

  {
    path:'/',
    element:<LayOut/>,
    children:[
      
      {path: '/', element:<Calender/>},
      {path: '/add', element:<CalenderAddPage/>},
      {path: '/calenderdate', element:<CalenderDatePage/>},
      {path: '/search', element:<Search/>},
    
    ]
  
  }

  

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)






