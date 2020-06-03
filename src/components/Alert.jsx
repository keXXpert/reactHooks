import React from 'react'

const Alert = ({ text, type }) => {
    return (
        <div className={`alert alert-${type || 'secondary'} alert-dismissible`} role="alert">
            {text}
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Alert