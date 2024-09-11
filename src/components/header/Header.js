import './Header.css'
import NavMenu from '../navMenu/NavMenu';
import { useEffect, useState } from 'react';

function Header(){
    const [isVisible, setIsVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(()=>{
      const handleResize = () =>{
        if (window.innerWidth <= 768) {
          setIsVisible(false);
          setMenuOpen(false);
        }else{
          setIsVisible(true);
        }
      };

      handleResize();

      window.addEventListener('resize', handleResize)

      return()=>{
        window.removeEventListener('resize', handleResize);
      };
    },[]);

    const handleClickMenu = () => setMenuOpen(!menuOpen);

    return(
        <header className='header'>
          <div className='logo'>
            <h1>logoMarca</h1>
          </div>

          <nav className='navBar'>
            {isVisible ?  (<NavMenu className="navMenuDesktop"/>
            ) : (
              <>
                <i onClick={handleClickMenu} className={`menuMobileIcon fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                <div className={`menuMobileContainer ${menuOpen ? 'open' : 'closed'}`}><NavMenu className="navMenuMobile"/></div>
              </>
            )}
          </nav>
        </header>
    );
};

export default Header