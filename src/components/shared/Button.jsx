import React from 'react'
import '../../styles/style.css'
import '../../styles/bootstrap.min.css'
function Button({text}) {
    return (
        <div>
            <button type="button" className="button raleway" title='illustrative'>{text}</button>
        </div>
    )
}

export default Button
