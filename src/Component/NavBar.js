import React from 'react'
import LeftNavBar from './LeftNavBar'
import MiddleNavBar from './MiddleNavBar'
import RightNavBar from './RightNavBar'

function NavBar(props) {
    return (
        <div>
            <header className={props.expandNav?'navbar-fixed-top hidenav':'navbar-fixed-top'}>
                <nav className="navbar navbar-findcond pt_header_nav">
                    <LeftNavBar expandNavClick={props.expandNavClick}/>
                    <MiddleNavBar/>
                    <RightNavBar handleClick={props.handleClick} />
                </nav>
            </header>
        </div>
    )
}

export default NavBar