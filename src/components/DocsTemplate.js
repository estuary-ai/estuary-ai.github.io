// Documentation: Template component

import '../css/DocsTemplate.css';

import TableOfContents from './TableOfContents';
import SideBar from './SideBar';

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
                <main className='mainContent'>
                    {/* actual content using h2 and h3 */}
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