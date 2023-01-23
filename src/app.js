/* @jsx createElement */

import { render, createElement } from "./react";

const Title = (props) => <h1>{props.children}</h1>;

const Item = (props) => (
  <li style={`color:${props.color}`}>{props.children}</li>
);

const vdom = (
  <div>
    <Title>React 배우기</Title>
    <ul>
      <Item color="red">1st item</Item>
      <Item color="blue">2nd item</Item>
      <Item color="green">3th item</Item>
    </ul>
  </div>
);

render(vdom, document.querySelector("#root"));
