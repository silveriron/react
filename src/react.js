const hooks = [];
let currentComponent = 0;

export class Component {
  constructor(props) {
    this.props = props;
  }
  render() {}
}

function makeProps(props, children) {
  return children.length > 0
    ? {
        ...props,
        children: children.length === 1 ? children[0] : children,
      }
    : props;
}

export function useState(initValue) {
  const position = currentComponent - 1;
  if (!hooks[position]) {
    hooks[position] = initValue;
  }

  const modifier = (newValue) => {
    hooks[position] = newValue;
  };

  return [hooks[position], modifier];
}

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

  hooks[currentComponent] = null;
  currentComponent++;

  if (typeof tag === "function") {
    if (tag.prototype instanceof Component) {
      const instance = new tag(makeProps(props, children));
      return instance.render();
    } else {
      return tag(makeProps(props, children));
    }
  } else {
    return { tag, props, children };
  }
};

export const render = (function () {
  let prevDom = null;
  return function (vdom, container) {
    if (prevDom === null) {
      prevDom = vdom;
    }

    //diff
    container.appendChild(createDom(vdom));
  };
})();
