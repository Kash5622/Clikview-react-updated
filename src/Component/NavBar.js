import React from 'react'
import LeftNavBar from './LeftNavBar'
import MiddleNavBar from './MiddleNavBar'
import RightNavBar from './RightNavBar'

function NavBar(props) {
    return (
            <header className={props.expandNav?'navbar-fixed-top hidenav':'navbar-fixed-top'}>
                <nav className="navbar navbar-findcond pt_header_nav">
                {props.whatsnew?<div id="HW_frame_cont" class="HW_frame_cont HW_bottom HW_visible" data-account="7wdvzJ" Style="height: 241px;right: 153.3px;top: 60px;position: absolute;z-index: 50;background-color: white;"><iframe title='iframe' id="HW_frame" class="HW_frame" src="https://headway-widget.net/widgets/7wdvzJ" referrerpolicy="strict-origin" sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups allow-forms allow-popups-to-escape-sandbox" tabindex="0" aria-hidden="false" Style="height: 241px;"></iframe></div>:<span></span>}
                    <LeftNavBar expandNavClick={props.expandNavClick}/>
                    <MiddleNavBar/>
                    <RightNavBar handleClick={props.handleClick} enableDarkMode={props.enableDarkMode} whatsnewtougle={props.whatsnewtougle}/>
                </nav>
            </header>
    )
}

export default NavBar