import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

// ASSETS
import './Header.css'
import Logo from '../../assets/Logo.svg'

// COMPONENTS
import Button from '../button/Button'

// CONTEXT 
import { AppContext } from '../../Contexts/AppContext'



function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    const appContext = useContext(AppContext)


    return (
        <div className="container">
            <div className="al-center d-flex jc-space-between">
                <Link to="/"> <img src={Logo} /></Link>
                <div className="mobile-menu">
                    <Button buttonStyle="secondary" onClick={() => setIsOpen(!isOpen)}>
                        Menu
                    </Button>
                </div>
                <nav className={`${isOpen ? 'open' : ''} `}>
                    <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>
                        X
                    </Button>
                    <ul className='d-flex jc'>
                        <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                        <li><Link to="/About">{appContext.languages[appContext.language].menu.about}</Link></li>
                        <li><Link to="/Project">{appContext.languages[appContext.language].menu.projects}</Link></li>
                        <li><Link to="/Contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header