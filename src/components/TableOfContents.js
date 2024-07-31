import '../css/TableOfContents.css';

import { useEffect, useState, useRef } from 'react';

// finds and makes headings and makes scroll into view
const Headings = ({ headings, activeId }) => {
    <ul>
        {headings.map(heading => (
            <li key={heading.id} className={heading.id === activeId ? 'active' : ''}>
                <a 
                    href={`#${heading.id}`} 
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${heading.id}`).scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                >
                    {heading.title}
                </a>
                {heading.items.length > 0 && (
                    <ul>
                        {heading.items.map((child) => (
                            <li
                                key={child.id}
                                className={child.id === activeId ? "active" : ""}
                            >
                                <a
                                    href={`#${child.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector(`#${child.id}`).scrollIntoView({
                                            behavior: "smooth"
                                        });
                                    }}
                                >
                                    {child.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ))}
    </ul>
}

const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = useState([]);

    useEffect(() => {
        // get all headings
        const headingElements = Array.from(document.querySelectorAll("main h2, main h3"));

        // make and set heading hierarchy
        const newNestedHeadings = getNestedHeadings(headingElements);
        setNestedHeadings(newNestedHeadings);
    }, []);

    return { nestedHeadings };
}

// go through all found headings and categorize into a hierarchy
const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];

    headingElements.forEach((heading, index) => {
        const { innerText: title, id} = heading;

        if (heading.nodeName === "H2") {
            // if it's a section heading, it has subsections (items)
            nestedHeadings.push({ title, id, items: [] });
        } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
            // if it's a subsection heading, it's a leaf node in the hierarchy
            nestedHeadings[nestedHeadings.length - 1].items.push({ title, id });
        }
    });

    return nestedHeadings;
}

const useIntersectionObserver = (setActiveId) => {
    const headingElementsRef = useRef([]);
    useEffect(() => {
        const callback = (headings) => {
            headingElementsRef.current = headings.reduce((map, headingElement) => {
                map[headingElement.target.id] = headingElement;
                return map;
            }, headingElementsRef.current);

            const visibleHeadings = [];
            Object.keys(headingElementsRef.current).forEach(key => {
                const headingElement = headingElementsRef.current[key];
                if (headingElement.isIntersecting) {
                    visibleHeadings.push(headingElement);
                }
            });

            const getIndexFromId = (id) => {
                return headingElementsRef.findIndex((heading) => heading.id === id);
            }

            if (visibleHeadings.length === 1) {
                setActiveId(visibleHeadings[0].target.id);
            } else if (visibleHeadings.length > 1) {
                const sortedVisibleHeadings = visibleHeadings.sort((a, b) => {
                    return getIndexFromId(a.target.id) > getIndexFromId(b.target.id);
                });

                setActiveId(sortedVisibleHeadings[0].target.id);
            }
        };

        const observer = new IntersectionObserver(callback, {
            root: document.querySelector("iframe"), 
            rootMargin: "500px"
        });


        const headingElements = Array.from(document.querySelectorAll("h2, h3"));

        headingElements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        }
    }, [setActiveId]);
}
function TableOfContents() {
    const [activeId, setActiveId] = useState(null);
    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setActiveId);

    return (
        <nav aria-label="Table of contents" className='toc'>
            <Headings headings={nestedHeadings} activeId={activeId} />
            
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