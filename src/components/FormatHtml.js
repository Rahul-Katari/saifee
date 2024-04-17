import React, { useEffect, useState } from "react";

function decodeHTML(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

const FormatHtml = ({ htmlString }) => {
  console.log(htmlString);
  const [decodedHTML, setDecodedHTML] = useState("");

  useEffect(() => {
    // Assuming you have fetched the HTML content from the API and stored it in bloghtml state
    let html = htmlString?.replace(/['"]/g, "").replace(/\\\"/g, '"');
    const decoded = decodeHTML(html);
    setDecodedHTML(decoded);
  }, []);
  function createReactElements(html) {
    const div = document.createElement("div");
    div.innerHTML = html;

    const reactElements = [];
    for (let i = 0; i < div.childNodes.length; i++) {
      const childNode = div.childNodes[i];
      if (childNode.nodeType === Node.TEXT_NODE) {
        // If it's a text node, convert it to a React text node
        reactElements.push(childNode.textContent);
      } else {
        // If it's an element node, convert it to a React element
        reactElements.push(
          React.createElement(childNode.nodeName.toLowerCase(), {
            dangerouslySetInnerHTML: { __html: childNode.innerHTML },
          })
        );
      }
    }

    return reactElements;
  }
  return <>{createReactElements(decodedHTML)}</>;
};

export default FormatHtml;
