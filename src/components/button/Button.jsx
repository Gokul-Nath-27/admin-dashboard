import './button.scss'
import { useState } from 'react'
const Button = () => {
    const [isActive, setIsActive] = useState(false);
    const toggle = () => {
        setIsActive(!isActive)
    }
    return (
        <div className={isActive? "active btn": "btn"} onClick={toggle}>
            <span className="del"></span>
            <text>Delete</text>
        </div>
    )
}

export default Button
