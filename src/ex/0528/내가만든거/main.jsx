import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ErrorPage from './pages/ErrorPage'
import CanvasDetail from './pages/CanvasDetail'

const router = createBrowserRouter(
  [
    {
      path:'',
      element: <App />,
      children:[
        {
          path: '/',
          element:<Home />,
        },
        {
          path:'about',
          element:<About />,
        },
        {
          path:'contact',
          element:<Contact />,
        },
        {
          path:'canvases/:id',
          element:<CanvasDetail/>,
        },
      ],
      errorElement:<ErrorPage/>,
    }
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)