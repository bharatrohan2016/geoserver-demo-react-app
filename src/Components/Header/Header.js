// color- #00c8bf, #198d88
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import logo2 from "../../assets/img/bharatrohan-4.png";
import { NotificationManager } from "react-notifications";

function Header(props){
    const navigate = useNavigate();
   
    async function logout(){
      localStorage.clear();
      navigate('/login');
      NotificationManager.success('Logged Out Successfully.')
    } 
    
    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex bg-green">
        <div className="navbar-brand-wrapper d-flex justify-content-center">
          <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
            <a className="navbar-brand brand-logo" href="/#/farmers">
              <img src={logo2} alt="logo"/>
            </a>
            <a className="navbar-brand brand-logo-mini" href="/#/farmers"><img src={logo} alt="logo"/></a>
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-date dropdown">
            
          </li>
          <li className="nav-item dropdown mr-0">
            <a className="nav-link btn count-indicator dropdown-toggle d-flex align-items-center justify-content-center text-white" id="notificationDropdown" data-toggle="tooltip" data-placement="top" title="Logout" onClick={logout}>
              <i className="typcn typcn-power mx-0"></i>
            </a>
          </li>
        </ul>
        
      </div>
    </nav>
    );
}

export default Header;