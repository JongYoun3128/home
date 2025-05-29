import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import './styles/style.css'

const navItems = [
   {id : 'home', label :'로켓배송', to: ''},
   {id : 'about', label :'로켓프레쉬', to: 'about'},
   {id : 'contact', label :'쿠팡이츠', to: 'contact'},
   {id : 'contact', label :'다시구매', to: 'contact'},
   {id : 'contact', label :'쿠팡비즈', to: 'contact'},
   {id : 'contact', label :'로켓직구', to: 'contact'},
   {id : 'contact', label :'골드박스', to: 'contact'}

]

   // 반응형 만들기
function Header() {
   const [isMenuOpen, setIsMenuOpen] =useState(false);


   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
   return (
      <div>
         <header className="bg-sky-900 text-white px-4">
            <div className="container mx-auto flex justify-between h-14 items-center">
               <div>
                  <Link to="/" className="text-xl font-bold">
                  COU<span className="red">P</span><span className="yellow">A</span><span className="green">N</span><span className="blue">G</span>
                  </Link>
               
               </div>
               <nav className="hidden md:flex space-x-20 ">
               {navItems.map(item => (
                  <NavLink key={item.id} to={item.to} className='hover:text-gray-300 text-white'>
                  {item.label}
                  </NavLink>
               ))}
               </nav>
               <button  className="md:hidden" onClick={toggleMenu}>
                  <FaBars/>
               </button>
               <button className="hidden md:block bg-blue-500 hover:bg-blue-600 font-bold py-1.5
               px-4 rounded-2xl ">
                  LOGIN
               </button>
            </div>

            {/* Mobile Menu */}

            <aside className={`
            
            fixed top-0 left-0 w-64 h-full bg-gray-800 z-99999
            md:hidden

            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}         
            >
               <div className="flex justify-end p-4">
               <button onClick={toggleMenu}>
                  <FaTimes className="w-6 h-6"/>
               </button>
               </div>
               <nav className="flex flex-col space-y-4 p-4">
               {navItems.map(item => (
                  <NavLink key={item.id} to={item.to} className='hover:text-gray-300'>
                  {item.label}
                  </NavLink>
               ))}
               </nav>
            </aside>
         </header>
      </div>
   );
}

export default Header;