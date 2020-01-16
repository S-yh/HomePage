import React from 'react'
import './index.scss'

const Nav: React.FC = (props) => {
    return (
        <div>
            <div className="container gray highlightTextIn">
                <a data-alt="Home">Home</a>
                <a data-alt="Resume">Resume</a>
                <a data-alt="Note">Note</a>
                <a data-alt="About">About</a>
            </div>
        </div>
    )
}

export default Nav;