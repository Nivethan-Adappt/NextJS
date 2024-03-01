import React, { Component } from "react";

type count = string | number;

export default class classComponent extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }
  componetDidMount() {
    console.log("componetDidMount");
  }
  componentDidUpdate(prevProps: any) {
    console.log("componentDidUpdate", prevProps);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    return <div>Life cycle methods {}</div>;
  }
}
