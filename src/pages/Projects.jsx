import { useContext } from 'react'
import Header from "../components/header/header"
import Banner from "../components/Banner/Banner"
import Projectslist from "../components/ProjectsList/Projectslist"
import Footer from "../components/Footer/Footer"

// CONTEXT 
import { AppContext } from '../Contexts/AppContext'

function Projects() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects} image="projects.jpg" />
            <div className="container">
                <Projectslist />
            </div>
            <Footer />
        </>
    )
}

export default Projects