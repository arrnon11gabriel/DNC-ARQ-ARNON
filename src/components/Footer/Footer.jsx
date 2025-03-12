import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

// ASSETS

import brazilIcon from '../../assets/brazil_9906449 1.svg'
import usaIcon from '../../assets/usa_4628635 1.svg'
import facebookIcon from '../../assets/facebook.svg'
import linkedinIcon from '../../assets/in.svg'
import xIcon from '../../assets/x.svg'
import instaIcon from '../../assets/insta.svg'
import Logo from '../../assets/Logo.svg'

// COMPONENT
import Button from '../button/Button'

// CONTEXT 
import { AppContext } from '../../Contexts/AppContext'


function Footer() {

    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }

    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col ">
                        <Link to="/"> <img src={Logo} className="footer-logo" /></Link>
                        <p className="grey-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className='d-flex social-links'>
                            <a href="https://facebook.com" target="_blank">
                                <img src={facebookIcon} />
                            </a>
                            <a href="https://twitter.com" target="_blank">
                                <img src={xIcon} />
                            </a>
                            <a href="https://linkedin.com" target="_blank">
                                <img src={linkedinIcon} />
                            </a>
                            <a href="https://instagram.com" target="_blank">
                                <img src={instaIcon} />
                            </a>
                        </div>

                    </div>
                    <div className="d-flex .mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul className=''>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/About">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/Project">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/Contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">19 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color"> Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                    <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}> 

                        <img src={brazilIcon}  height="29px" /> 

                    </Button>

                    <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}> 

                        <img src={usaIcon} height="29px" /> 

                    </Button>

                    </div>
                </div>
            </div>
        </footer>



    )
}

export default Footer