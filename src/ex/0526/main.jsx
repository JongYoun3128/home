import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut'
import CleanMainPage from './pages/CleanMainPage'
import AddPlace from './pages/AddPlace'
import CleanPlace from './pages/CleanPlace'



const  router = createBrowserRouter([

  {
    path:'/',
    element:<LayOut/>,
    children:[
      
      {path: '/', element:<CleanMainPage/>},
      {path: '/add', element:<AddPlace/>},
      {path: '/cleanpage/:id', element:<CleanPlace/>},
      {path: '/cleanpage/finish/:id', element:<CleanPlace/>},
    
    ]
  
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)






