function customRender(reactElement, container) {
  //   const docele = document.createElement(reactElement.type);
  //   docele.innerHTML = reactElement.children;
  //   docele.setAttribute("href", reactElement.props.href);
  //   docele.setAttribute("target", reactElement.props.target);
  //   container.appendChild(docele);

  const docele = document.createElement(reactElement.type);
  docele.innerHTML = reactElement.children;
  for (let props in reactElement.props) {
    if (props === "children") continue;
    docele.setAttribute(props, reactElement.props[props]);
  }
  container.appendChild(docele);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const root = document.getElementById("root");
customRender(reactElement, root);
