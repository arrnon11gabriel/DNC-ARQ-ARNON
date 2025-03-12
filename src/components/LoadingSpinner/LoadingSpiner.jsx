import './LoadingSpiner.css'
import loadingSpinnerImg from '../../assets/load.gif'

function LoadingSpinner() {
    return (
        <div className= " d-flex al-center jc-center loading-overlay-container">
            <img src={loadingSpinnerImg} alt="Loading" height="80px" />
        </div>
    )
}

export default LoadingSpinner