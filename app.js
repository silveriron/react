const createDom = (node) => {
  if (typeof node === "string") {
    const element = document.createTextNode(node);

    return element;
  }

  const element = document.createElement(node.tag);

  node.children.map(createDom).forEach(element.appendChild.bind(element));

  return element;
};

const vdom = {
  tag: "div",
  props: {},
  children: [
    {
      tag: "h1",
      props: {},
      children: ["첫 컴포넌트"],
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: {},
          children: ["1번 아이템"],
        },
        {
          tag: "li",
          props: {},
          children: ["2번 아이템"],
        },
        {
          tag: "li",
          props: {},
          children: ["3번 아이템"],
        },
      ],
    },
  ],
};

document.querySelector("#root").appendChild(createDom(vdom));
