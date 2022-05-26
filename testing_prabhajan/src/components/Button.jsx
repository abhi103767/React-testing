import React from 'react'
import './Button.css'

function Button({ variant, colorScheme, children, handleClick }) {
    return (
        <div>
            <button onClick={handleClick} data-testid='cbutton' className={`btn ${colorScheme || 'red'} ${variant || 'ghost'}`}>
                {children}
            </button>
        </div>
    )
}

export default Button