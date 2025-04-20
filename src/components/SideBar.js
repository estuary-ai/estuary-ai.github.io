import '../css/SideBar.css';

import DocsLinks from './DocsLinks';

function SideBar({ currentPageName }) {

    return (
        <div className="sidebarContainer">
            <DocsLinks/>

            <style jsx="true">{`

                /* highlight the current page in sidebar */
                #${currentPageName}{
                    background-color: var(--orange);
                    color: var(--black);
                }
                                
            `}</style>
        </div>
    );
}
export default SideBar;