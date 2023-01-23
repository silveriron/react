/* @jsx createElement */

import { render, createElement, Component } from "./react";

class Title extends Component {
  render() {
    return <h1>{this.props.children}</h1>;
  }
}

const Item = (props) => (
  <li style={`color:${props.color}`}>{props.children}</li>
);

const vdom = (
  <div>
    <Title>클래스형 컴포넌트</Title>
    <ul>
      <Item color="red">1st item</Item>
      <Item color="blue">2nd item</Item>
      <Item color="green">3th item</Item>
    </ul>
  </div>
);

render(vdom, document.querySelector("#root"));
