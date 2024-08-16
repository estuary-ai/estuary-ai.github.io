import '../css/TableOfContents.css';
import React from 'react';


// finds and makes headings and makes scroll into view
const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            // const el = document.querySelector(`#${heading.id}`);
            // const yOffset = -10;
            // const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
            // window.scrollTo({top: y, behavior: 'smooth'});
            document.querySelector(`#${heading.id}`).scrollIntoView({
                // block: "start",
                behavior: "smooth"
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
                id={child.id}
                className={child.id === activeId ? "active" : ""}
              >
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    // const el = document.querySelector(`#${child.id}`);
                    // const yOffset = -10;
                    // const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                    // window.scrollTo({top: y, behavior: 'smooth'});
                    document.querySelector(`#${child.id}`).scrollIntoView({
                        // block: "start",
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
);

/**
 * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
 */
const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = React.useState([]);

  React.useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("main h2, main h3")
    );

    // Created a list of headings, with H3s nested
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title
      });
    }
  });

  return nestedHeadings;
};

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = React.useRef({});
  React.useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      // Get all headings that are currently visible on the page
      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id);

      // remove all headings with empty ids
      for (let i = 0; i < visibleHeadings.length; i++) {
        if (!visibleHeadings[i].target.id) {
          visibleHeadings.splice(i, 1);
        }
      }

      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        // console.log("=========== Set to only visible:")
        // console.log(visibleHeadings[0].target.id);
        setActiveId(visibleHeadings[0].target.id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        // console.log("========== " + visibleHeadings.length + " visible:")
        // for (let i = 0; i < visibleHeadings.length; i++) {
        //   if (visibleHeadings[i].target.id) {
        //     console.log(visibleHeadings[i].target.id);
        //   }
        // }
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, { root: document.querySelector("iframe"), rootMargin: "100px" });

    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

/**
 * Renders the table of contents.
 */
// const TableOfContents = () => {
//   const [activeId, setActiveId] = React.useState();
//   const { nestedHeadings } = useHeadingsData();
//   useIntersectionObserver(setActiveId);

//   return (
//     <nav aria-label="Table of contents">
//       <Headings headings={nestedHeadings} activeId={activeId} />
//     </nav>
//   );
// };
function TableOfContents() {
    const [activeId, setActiveId] = React.useState();
    const { nestedHeadings } = useHeadingsData();
    useIntersectionObserver(setActiveId);

    return (
          <nav aria-label="Table of contents" className='toc'>
              <h2>Table of Contents</h2>
              <Headings headings={nestedHeadings} activeId={activeId} />
          </nav>
      
    )
}

export default TableOfContents;