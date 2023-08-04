import { useContext } from 'react'
import './App.css'
import logo2 from './images/logo2.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext'
import {FiShoppingCart} from 'react-icons/fi'

function Header() {
  const { user, logout } = useContext(UserContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/Login');
  }

  return (
    <header>
      <nav className='nav'>
        <img src={logo2} className="logo" alt="sorry the image can't be loaded" width="40px" />
        <Link to='/' className='website-name'><h2 >Universal Shopping</h2></Link>
        <ul className='List'>
          {user ? <li><Link to='/Cart'><FiShoppingCart/></Link></li>: null}
          {user ? <li><Link to='/Shop'>Products</Link></li> : null}
          <li><Link to='/About'>About</Link></li>
          {user ? <li onClick={handleLogout}>Logout</li> : <li><Link to='/Register'>Sign Up</Link></li>}
        </ul>
      </nav>
    </header>
  )
}
export default Header