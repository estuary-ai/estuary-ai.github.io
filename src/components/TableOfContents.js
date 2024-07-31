import '../css/TableOfContents.css';

function TableOfContents() {


    return (
        <nav aria-label="Table of contents" className='toc'>
            <h2>Table of Contents</h2>
            
            <style js>{`
                {/* when screen width small */}
                @media (max-width: 767px){
                    .toc{
                        display: none;
                    }
                }
            `}</style>
        </nav>
        
    )
}

export default TableOfContents;