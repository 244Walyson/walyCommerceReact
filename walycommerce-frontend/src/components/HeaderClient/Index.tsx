import { Link } from 'react-router-dom'
import './styles.css'
import CartIcon from '../CartIcon'
import iconAdmin from '../../assets/admin.svg'
import { hasAnyRoles } from '../../services/auth-service'
import { useContext } from 'react'
import { ContextToken } from '../../utils/context-token'

const HeaderClient = () => {

  const {contextTokenPayload} = useContext(ContextToken)


  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <Link to={"/"}><h1>DSCommerce</h1></Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            {
              contextTokenPayload &&
              hasAnyRoles(["ROLE_ADMIN"]) && 
              <Link to={"/admin"}>
              <div className="dsc-menu-item">
                <img src={iconAdmin} alt="admin" />
              </div>
            </Link>
            }
            <div className="dsc-menu-item">
              <Link to={"/cart"}><CartIcon></CartIcon></Link>
            </div>
          </div>
          <Link to={"/login"}>Entrar</Link>
        </div>
      </nav>
    </header>
  )
}

export default HeaderClient