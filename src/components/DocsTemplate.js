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

// ********* NOTE WHEN TURNING MARKDOWN TO HTML ***********
// 1. https://www.w3docs.com/nx/marked --> is helpful
// 2. escaping characters and special accents is difficult..
    // just ask ChatGPT :P
// 3. for the code blocks, make sure to wrap it in {`code`}
    // gives multiline
    // can also indent as you'd like
    // e.g.,
        // <pre><code class="language-bash">{`
        //     [wsl2]
        //         networkingMode=mirrored
        //         [experimental]
        //         dnsTunneling=true
        //         autoProxy=true
        //         hostAddressLoopback=true
        // `}</code></pre>
// 4. sometimes it fucks up the <ol> </ol> tags. Just make sure they're closed
function DocsTemplate({PageName, Content}) {

    return (
        <div className='pageContainer'>
            {/* collapsible side navbar for docs for mobile */}
            <DocsNavBar />

            {/* non collapsible side navbar for docs */}
            <SideBar currentPageName={PageName}/>

            <div className='paddedContainer'>

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
                        margin-top: 50px;
                    }
                }
            `}</style>
        </div>

    )
}

export default DocsTemplate;