import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const navItems = [
   {id : 'home', label :'HOME', to: ''},
   {id : 'about', label :'ABOUT', to: 'about'},
   {id : 'contact', label :'CONTACT', to: 'contact'}
]

   // 반응형 만들기
function Header() {
   const [isMenuOpen, setIsMenuOpen] =useState(false);


   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
   return (
      <div>
         <header className="bg-gray-800 text-white px-4">
            <div className="container mx-auto flex justify-between h-14 items-center">
               <div>
                  <Link to="/" className="text-xl font-bold">
                  FRONTAND
                  </Link>
               
               </div>
               <nav className="hidden md:flex space-x-4">
               {navItems.map(item => (
                  <NavLink key={item.id} to={item.to} className='hover:text-gray-300'>
                  {item.label}
                  </NavLink>
               ))}
               </nav>
               <button  className="md:hidden" onClick={toggleMenu}>
                  <FaBars/>
               </button>
               <button className="hidden md:block bg-blue-500 hover:bg-blue-600 font-bold py-1.5
               px-4 rounded-2xl ">
                  REACT
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