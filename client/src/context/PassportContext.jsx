import React, { Component, createContext } from "react";
import axios from "axios";

export const PassportContext = createContext({});
export default class PassportProvide extends Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }

  async componentDidMount() {
    const responsePassport = await axios.get("/api/auth/passport_success");
    const responseEmailAndPassword = await axios.get(
      "/api/auth/account_success"
    );
    // tokens
    const googleToken = localStorage.getItem("google-token");
    const spotifyToken = localStorage.getItem("spotify-token");
    const emailAndPasswordSessionToken = localStorage.getItem("token");
    // backend jwt
    const emailAndPasswordSession = responseEmailAndPassword.data?.user?.user?.clientID;
    const passportSuccessSession = responsePassport.data?.session;
    // condition with data to give the user
    const isEmailAndPasswordData = emailAndPasswordSession === emailAndPasswordSessionToken
    const isPassportSuccess = passportSuccessSession === googleToken || passportSuccessSession === spotifyToken;

   
    
    if (isEmailAndPasswordData)
      this.setState({ data: responseEmailAndPassword.data.user.user });
    else if (isPassportSuccess)
      this.setState({ data: responsePassport.data.user });
  }

  render() {
    return (
      <PassportContext.Provider value={{ data: this.state.data }}>
        {this.props.children}
      </PassportContext.Provider>
    );
  }
}
