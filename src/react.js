export const createDom = (node) => {
  if (typeof node === "string") {
    const element = document.createTextNode(node);

    return element;
  }

  const element = document.createElement(node.tag);

  Object.entries(node.props).forEach(([name, value]) =>
    element.setAttribute(name, value)
  );

  node.children.map(createDom).forEach(element.appendChild.bind(element));

  return element;
};

export const createElement = (tag, props, ...children) => {
  props = props || {};

  if (typeof tag === "function") {
    if (children.length > 0) {
      return tag({
        ...props,
        children: children.length === 1 ? children[0] : children,
      });
    } else {
      return tag(props);
    }
  } else {
    return { tag, props, children };
  }
};

export const render = (vdom, container) => {
  container.appendChild(createDom(vdom));
};
