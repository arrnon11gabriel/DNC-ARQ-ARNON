import { useContext } from 'react'
import Header from '../components/reader/Header'
import Banner from "../components/Banner/Banner"
import Footer from "../components/Footer/Footer"
import ContactForm from "../components/ContactForm/ContactForme"

// CONTEXT 
import { AppContext } from '../Contexts/AppContext'

function contact () {
    const appContext = useContext(AppContext)
    return ( 
    <>
    < Header />
    <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.jpg" />
    <ContactForm />
    <Footer />
    </> 
    )
}

export default contact