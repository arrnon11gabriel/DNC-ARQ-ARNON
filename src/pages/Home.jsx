import { useContext } from 'react'
import Header from "../components/reader/Header"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero" 
import ProjecList from "../components/ProjectsList/Projectslist"

// CONTEXT 
import { AppContext } from '../Contexts/AppContext'


function Home () {
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

export default Home 