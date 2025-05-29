import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import LayOut from '../../LayOut'
import Sigyung from './components/Sigyung'
import Paik from './components/Paik'
import Event from './components/Event'
import Map from './components/Map'
import Login from './components/login'
import MapBoxList from './components/MapBoxList'
import SigyungOne from './components/SigyungOne'
import SigyungTwo from './components/SigyungTwo'
import SigyungThree from './components/SigyungThree'
import SigyungFour from './components/SigyungFour'
import SigyungFive from './components/SigyungFive'
import SigyungSix from './components/SigyungSix'
import SigyungSeven from './components/SigyungSeven'
import SigyungEight from './components/SigyungEight'
import SigyungNine from './components/SigyungNine'
import PaikOne from './components/PaikOne'
import PaikTwo from './components/PaikTwo'
import PaikThree from './components/PaikThree'
import PaikFour from './components/PaikFour'
import PaikFive from './components/PaikFive'
import PaikSix from './components/PaikSix'
import PaikSeven from './components/PaikSeven'
import PaikEight from './components/PaikEight'
import PaikNine from './components/PaikNine'
import Sigyung_map_1 from './components/Sigyung_map_1'
import Sigyung_map_2 from './components/Sigyung_map_2'
import Sigyung_map_3 from './components/Sigyung_map_3'
import Sigyung_map_4 from './components/Sigyung_map_4'
import Sigyung_map_5 from './components/Sigyung_map_5'
import Sigyung_map_6 from './components/Sigyung_map_6'
import Sigyung_map_7 from './components/Sigyung_map_7'
import Sigyung_map_8 from './components/Sigyung_map_8'
import Sigyung_map_9 from './components/Sigyung_map_9'
import Paik_map_1 from './components/paik_map_1'
import Paik_map_2 from './components/paik_map_2'
import Paik_map_3 from './components/paik_map_3'
import Paik_map_4 from './components/paik_map_4'
import Paik_map_5 from './components/paik_map_5'
import Paik_map_6 from './components/paik_map_6'
import Paik_map_7 from './components/paik_map_7'
import Paik_map_8 from './components/paik_map_8'
import Paik_map_9 from './components/paik_map_9'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayOut/>}>
      <Route index element={<Home/>}/>
          <Route path='/sigyung' element={<Sigyung/>}>
              <Route index element={<SigyungOne/>}/>
          </Route>
          <Route path='/paik' element={<Paik/>}>
          </Route>
          <Route path='/event' element={<Event/>}>
             
          </Route>
          <Route path='/map' element={<Map/>}>
             
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/mapboxlist' element={<MapBoxList/>}></Route>
          <Route path='/sigyungone' element={<SigyungOne/>}></Route>
          <Route path='/sigyungtwo' element={<SigyungTwo/>}></Route>
          <Route path='/sigyungthree' element={<SigyungThree/>}></Route>
          <Route path='/sigyungfour' element={<SigyungFour/>}></Route>
          <Route path='/sigyungfive' element={<SigyungFive/>}></Route>
          <Route path='/sigyungsix' element={<SigyungSix/>}></Route>
          <Route path='/sigyungseven' element={<SigyungSeven/>}></Route>
          <Route path='/sigyungeight' element={<SigyungEight/>}></Route>
          <Route path='/sigyungnine' element={<SigyungNine/>}></Route>

          <Route path='/paikone' element={<PaikOne/>}></Route>
          <Route path='/paiktwo' element={<PaikTwo/>}></Route>
          <Route path='/paikthree' element={<PaikThree/>}></Route>
          <Route path='/paikfour' element={<PaikFour/>}></Route>
          <Route path='/paikfive' element={<PaikFive/>}></Route>
          <Route path='/paiksix' element={<PaikSix/>}></Route>
          <Route path='/paikseven' element={<PaikSeven/>}></Route>
          <Route path='/paikeight' element={<PaikEight/>}></Route>
          <Route path='/paiknine' element={<PaikNine/>}></Route>

          <Route path='/sigyungmap_1' element={<Sigyung_map_1/>}></Route>
          <Route path='/sigyungmap_2' element={<Sigyung_map_2/>}></Route>
          <Route path='/sigyungmap_3' element={<Sigyung_map_3/>}></Route>
          <Route path='/sigyungmap_4' element={<Sigyung_map_4/>}></Route>
          <Route path='/sigyungmap_5' element={<Sigyung_map_5/>}></Route>
          <Route path='/sigyungmap_6' element={<Sigyung_map_6/>}></Route>
          <Route path='/sigyungmap_7' element={<Sigyung_map_7/>}></Route>
          <Route path='/sigyungmap_8' element={<Sigyung_map_8/>}></Route>
          <Route path='/sigyungmap_9' element={<Sigyung_map_9/>}></Route>

          <Route path='/paikmap_1' element={<Paik_map_1/>}></Route>
          <Route path='/paikmap_2' element={<Paik_map_2/>}></Route>
          <Route path='/paikmap_3' element={<Paik_map_3/>}></Route>
          <Route path='/paikmap_4' element={<Paik_map_4/>}></Route>
          <Route path='/paikmap_5' element={<Paik_map_5/>}></Route>
          <Route path='/paikmap_6' element={<Paik_map_6/>}></Route>
          <Route path='/paikmap_7' element={<Paik_map_7/>}></Route>
          <Route path='/paikmap_8' element={<Paik_map_8/>}></Route>
          <Route path='/paikmap_9' element={<Paik_map_9/>}></Route>
       
          
  </Route>
  )  
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
