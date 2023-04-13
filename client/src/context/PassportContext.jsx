import React, { Component, createContext } from "react";
import axios from "axios";

export const PassportContext = createContext({});
export default class PassportProvide extends Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }

  async componentDidMount() {
    const response = await axios.get("/api/auth/succsess");
    this.setState({ data: response });
  }

  render() {
    return (
      <PassportContext.Provider value={{ data: this.state.data }}>
        {this.props.children}
      </PassportContext.Provider>
    );
  }
}
