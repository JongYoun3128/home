import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut'
import MainPage from './pages/MainPage'
import TodoAddPage from './pages/TodoAddPage'
import TodoDetailPage from './pages/TodoDetailPage'

const  router = createBrowserRouter([

  {
    path:'/',
    element:<LayOut/>,
    children:[
      
      {path: '/', element:<MainPage/>},
      {path: '/add', element:<TodoAddPage/>},
      {path: '/detail', element:<TodoDetailPage/>},
    
    ]
  
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)






