import { useState  } from 'react';
import Logo from '../Img/logo.png'
import Sun from '../Img/sun.png'
import Moon from '../Img/moon.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const handleToggle = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle('dark-theme');
      };
  return (
    <>
    <header>
      <div className='container'>
         <div className='d-flex head_bg'>
            <div className='alin_c'>
              <a><img className='logo' src={Logo} /></a>
            </div>
            <div className='alin_c'>
              <ul className='navbar_list_h d-flex'>
                  <li className='list_h_item'><a className='active'>Home</a></li>
                  <li className='list_h_item'><a>Dashboard</a></li>
                  <li className='list_h_item'><a>Market</a></li>
                  <li className='list_h_item'><a>Earnings</a></li>
                  <li className='list_h_item'><a>More</a></li>
              </ul>
            </div>

            <div className='alin_c'>
              <span className='wc user'><i class="fa-solid fa-user me-2"></i> user</span>
              <img
              className='dark_li'
        src={isDarkTheme ? Sun : Moon}
        alt="Toggle Theme"
        onClick={handleToggle}
        style={{ cursor: 'pointer' }}
      />
            </div>
         </div>
      </div>
    </header>
    </>
  )
}

export default Header
