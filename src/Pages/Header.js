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
         {/* <div className='d-flex head_bg'>
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
         </div> */}
         <nav class="navbar navbar-expand-lg py-0">
  <div class="container px-0">
    <a class="navbar-brand" href="#"><img className='logo' src={Logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
      <i class="fa-solid fa-list-ul fa-fade wc"></i>
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav header_ul mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Market</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Earnings</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu dropdown-menu_header" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="">FAQ</a></li>
            <li><a class="dropdown-item" href="">Support</a></li>
            <li><a class="dropdown-item" href="#">Security</a></li>
            <li><a class="dropdown-item" href="#">Downloads</a></li>
          </ul>
        </li>
        
      </ul>
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
</nav>
      </div>
    </header>
    </>
  )
}

export default Header
