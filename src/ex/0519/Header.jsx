import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { useNavigate } from "react-router-dom";

    const navItems = [
        {id:'home', label:'홈', to:'/'},
        {id:'sigyung', label:'성시경', to:'/Sigyung'},
        {id:'paik', label:'백종원', to:'/paik'},
        {id:'event', label:'이벤트', to:'/event'}
    ]

function Header() {

      const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
    <>
        <header className="bg-cyan-50 text-black px-4 py-3">
            <div className="container mx-auto flex justify-between h-14 items-center">
                <div>
                    <Link to='/'  className="flex">
                    <img src="img/mukbang-logo.webp" alt="" className="w-10 h-10"/>
                    <h1 className="font-bold text-3xl mx-3">먹방로드</h1>
                    </Link>
                </div>
                
                <button className="aside_menu md:hidden" onClick={toggleMenu}> 
                    <FaBars/>
                </button>
                
                <div className="menu_button_hidden_box hidden md:block">
                    <div className="menu_button_box flex">
                        <button className="menu_button   hover:bg-amber-100 font-bold py-1 px-3 rounded-xl" onClick={()=>navigate('/MapBoxList')} >
                            <img src="img/mukbang_header_map_icon_01.png" alt="" />
                            <p  className="menu_button_text m-2.5">지도로 보기</p>
                        </button>
                        <button className="menu_button   hover:bg-amber-100 font-bold py-1 px-3 rounded-xl" onClick={()=>navigate('/login')} >
                            <img src="img/header_menu_icon3.png" alt="" />
                            <p  className="menu_button_text m-2.5">메뉴 추천기</p>
                        </button>
                    </div>
                </div>
               
            </div>

            {/* Mobile Menu */}

                    <aside className={`
                    fixed top-0 left-0 w-64 h-full bg-gray-800 z-9999 md:hidden text-white

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
                        <NavLink key={item.id} to={item.to} className=' hover:text-gray-300'>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
                    </aside>
        </header>
        <section className="menu">
                <nav className=" hidden lg:flex space-x-5 justify-center my-8">
                    {navItems.map(item => (
                        <NavLink key={item.id} to={item.to} className='top_menu_list hover:text-gray-300'>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
        </section>
    </>
    );
}

export default Header;