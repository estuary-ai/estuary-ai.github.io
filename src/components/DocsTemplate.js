// Documentation: Template component

import '../css/DocsTemplate.css';

import TableOfContents from './TableOfContents';
import SideBar from './SideBar';
import DocsNavBar from './DocsNavBar';

// ********* TEMPLATE *********
/**
@param PageName = must correspond with id of Link component in `SideBar.js` (e.g., "link-introduction")
@param Title = the title of the page
@param Content = must use `h2` and `h3` tags for table of contents generation
*/
function DocsTemplate({PageName, Content}) {

    return (
        <div className='pageContainer'>
            <SideBar currentPageName={PageName}/>

            <div className='paddedContainer'>
                {/* top navbar for docs for mobile */}
                {/* <DocsNavBar /> */}

                <main className='mainContent'>
                    {/* actual content with titles using h2 and h3 */}
                    <Content/>

                </main>

                {/* table of contents */}
                <TableOfContents />
            </div>

            <style js="true">{`
                {/* when screen width small */}
                @media (max-width: 767px){
                    .mainContent{
                        width: 100%;
                    }
                }
            `}</style>
        </div>

    )
}

export default DocsTemplate;