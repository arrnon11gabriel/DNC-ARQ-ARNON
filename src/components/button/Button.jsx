import whiteArrow from '../../assets/whiteArrow.svg'
import './button.css'


function Button ({arrow, buttonStyle, loanding, children, ...props }) { 
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={whiteArrow}  />}
        </button>
        )
    }


export default Button