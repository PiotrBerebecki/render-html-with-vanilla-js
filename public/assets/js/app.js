console.clear();


// Main function creating DOM elements
function makeElement(type, textOrPropsOrChild, ...otherChildren) {
  const el = document.createElement(type);

  if (textOrPropsOrChild instanceof window.Element) {
    el.appendChild(textOrPropsOrChild);
  } else if (typeof textOrPropsOrChild === 'string') {
    appendText(el, textOrPropsOrChild);
  } else if (typeof textOrPropsOrChild === 'object') {
    Object.keys(textOrPropsOrChild).forEach(propName => {
      const value = textOrPropsOrChild[propName];
      el[propName] = value;
    });
  }

  if (otherChildren) {
    appendArray(el, otherChildren);
  }

  return el;
}


// Helper functions for relevant DOM elements
const a = (...args) => makeElement(`a`, ...args);
const button = (...args) => makeElement(`button`, ...args);
const div = (...args) => makeElement(`div`, ...args);
const h1 = (...args) => makeElement(`h1`, ...args);
const header = (...args) => makeElement(`header`, ...args);
const p = (...args) => makeElement(`p`, ...args);
const span = (...args) => makeElement(`span`, ...args);


// Append elements within elements
function appendArray(el, children) {
  console.log(children);
  children.forEach(child => {
    if (Array.isArray(child)) {
      appendArray(el, child);
    } else if (child instanceof window.Element) {
      el.appendChild(child);
    } else if (typeof child === 'string') {
      appendText(el, child);
    }
  });
}


// Add text node
function appendText(el, text) {
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
  console.log(el);
}


// Test
document.getElementById('root').appendChild(
  div({className: 'wrapper'}, 'Hello from div',
    p({className: 'para'}, 'Hello from para ',
      span({className: 'bold'}, 'with a span')
    )
  )
);






// document.body.appendChild(
//   div({ id: `app` },
//     header({ className: `header` },
//       h1({ className: `header__title` }, `Know It All`),
//       a(
//         {
//           className: `header__help`,
//           target: `_blank`,
//           rel: `noopener noreferrer`,
//           title: `Find out more about know it all`,
//           href: `https://hackernoon.com/what-you-dont-know-about-web-development-d7d631f5d468#.ex2yp6d64`,
//         },
//         `What is this?`
//       )
//     ),
//     div({ className: `skill-table` })
//   )
// );
