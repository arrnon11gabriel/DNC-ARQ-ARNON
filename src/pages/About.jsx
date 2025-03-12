import { useContext } from 'react'
import Header from "../components/reader/Header"
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import AboutText from "..//components/AboutText/AboutText"

// CONTEXT 
import { AppContext } from '../Contexts/AppContext'

function about () {
    const appContext = useContext(AppContext)
    return ( 
    <>
    < Header />
    <Banner title={appContext.languages[appContext.language].menu.about} image="about.jpg" />
    <AboutText />
    < Footer />
    </> 
    )
}

export default about