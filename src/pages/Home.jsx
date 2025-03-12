import { useContext } from 'react'
import Banner from "../components/Banner/Banner"
import Header from "../components/header/header"
import Footer from "../components/Footer/Footer"
import Button from "../components/button/Button"
import Hero from "../components/Hero/Hero" 
import ProjecList from "../components/ProjectsList/Projectslist"

// CONTEXT 
import { AppContext } from '../Contexts/AppContext'


function home () {
    const appContext = useContext(AppContext)
    return ( 
    <>
            < Header />
            
        <div className="container">
            <Hero />
        </div>
        <div className="container">
            <ProjecList/>
        </div>
            < Footer />
        
    </>
    )
    

     
}

export default home 