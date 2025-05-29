import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";

    const navItems = [
        {id:'home', label:'홈', to:'/'},
        {id:'home', label:'기본 캘린더', to:'/'},
        {id:'home', label:'내 할 일', to:'/'},
        {id:'home', label:'페이스북 친구 생일', to:'/'},
        {id:'home', label:'목표 캘린더', to:'/'},
        
    ]

function Aside() {
   

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>              
        <button className="aside_menu" onClick={toggleMenu}> 
            <FaBars/>
        </button>   
    
            {/* Mobile Menu */}

                    <aside className={`
                    fixed top-0 left-0 w-64 h-full bg-gray-800 z-9999  text-white

                    ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }                    
                    `}>
                        <div className="flex justify-end p-4">
                            <button onClick={toggleMenu}>
                                <FaTimes className="w-6 h-6"/>
                            </button>
                        </div>

                        <nav className="flex flex-col space-y-4 p-4">
                    {navItems.map(item => (
                        <NavLink key={item.id} to={item.to} className=' hover:text-gray-300 '>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
                    </aside>
       
        
    </>
    );
}

export default Aside;