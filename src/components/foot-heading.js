import React from 'react'

function FooterText({ title }) {
    return (
        <div className='footer-line-box'>
            <div className='footer-line' />
            <div>
                <p className="body-text footer-line-text"> {title}</p>
            </div>
            <div className='footer-line' />
        </div>
    )
}

export default FooterText