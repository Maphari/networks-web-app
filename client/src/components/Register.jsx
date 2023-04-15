import React from "react";
// BOOTSTRAP IMPORTS
import { InputGroup, Form, Col } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [messageERROR, setMessageERROR] = useState("");
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const userLanguage = navigator.language;

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (!username) {
      setUsernameError("Username is required");
    } else if (username.trim().length < 6) {
      setUsernameError("Username must be 6 character long");
    } else {
      setUsernameError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!email) {
      setEmailError("Email is required");
    } else if (!email.includes("@")) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 8) {
      setPasswordError("password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const toastNotificationSuccess = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const toastNotificationError = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleCreateUser = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/api/signup_user", { username, email, password });

      if (res?.data?.exist === true) {
        toast(`${res?.data?.message} log in`, {
          position: "bottom-left",
          autoClose: 3000,
          theme: "dark",
        });
        navigate("/login");
      } else if (res?.data?.session) {
        localStorage.setItem("token", res?.data?.session);
        navigate("/dashboard", { replace: true });
        toastNotificationSuccess(res.data.message);
      } else {
        toastNotificationError(res.data.errorMessage);
        navigate("/signup", { replace: true });
      }
    } catch (error) {
      setMessageERROR("something went wrong");
    }
  };

  async function handleGoogleLogin() {
    window.open("/api/auth/google", "_self");
    const res = await axios.get("/api/auth/passport_success");
    const clientid = res?.data?.user?.clientID;
    localStorage.setItem("google-token", clientid);
  }
  async function handleSpotifyLogin() {
    window.open("/api/auth/spotify", "_self");
    const res = await axios.get("/api/auth/passport_success");
    const clientid = res?.data?.user?.clientID;
    localStorage.setItem("spotify-token", clientid);
  }

  return (
    <>
      <div className="signup-container">
        <Form
          onSubmit={handleCreateUser}
          className="drop-shadow-2xl rounded was-validated"
        >
          <div className="signup-container__top">
            <div className="mb-3">
              <h1 className="signup-container__top-header">Create account</h1>
              <p className="signup-container__top-para">
                Please provide you details
              </p>
            </div>
            {messageERROR && (
              <p className="text-red-500 mb-1">{messageERROR}</p>
            )}
            <InputGroup as={Col} hasValidation className="mb-3">
              <InputGroup.Text id="basic-addon2" className="rounded-none">
                <i className="fa-solid fa-user"></i>
              </InputGroup.Text>
              <Form.Control
                className="rounded-none"
                placeholder="username"
                type="text"
                aria-label="username"
                aria-labelledby="basic-addon2"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                isValid={!!username}
                isInvalid={usernameError && usernameError}
                required
              />
              {usernameError ? (
                <Form.Control.Feedback type="invalid">
                  {usernameError}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </InputGroup>
            <InputGroup as={Col} hasValidation className="mb-3">
              <InputGroup.Text id="basic-addon2" className="rounded-none">
                <i className="fa-solid fa-envelope"></i>
              </InputGroup.Text>
              <Form.Control
                className="rounded-none"
                placeholder="example@gmail.com"
                type="email"
                aria-label="email"
                aria-labelledby="basic-addon2"
                name="email"
                value={email}
                onChange={handleEmailChange}
                isValid={!!emailError}
                isInvalid={emailError && emailError}
                required
              />
              {emailError ? (
                <Form.Control.Feedback type="invalid">
                  {emailError}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </InputGroup>
            <InputGroup as={Col} hasValidation>
              <InputGroup.Text id="basic-addon3" className="rounded-none">
                <i className="fa-solid fa-lock"></i>
              </InputGroup.Text>
              <Form.Control
                className="rounded-none"
                placeholder="at least 8 characters"
                type="password"
                aria-label="password"
                aria-labelledby="basic-addon3"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                isValid={!!passwordError}
                isInvalid={passwordError && passwordError}
                required
              />
              {passwordError ? (
                <Form.Control.Feedback type="invalid">
                  {passwordError}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </InputGroup>
            <p className="opacity-60 text-sm my-2">
              By creating an account you agree to our{" "}
              <span className="color">terms</span> and{" "}
              <span className="color">conditions</span>
            </p>
            <button
              type="submit"
              className="w-[100%] submit-btn flex gap-2 items-center justify-center text-white"
            >
              <span>Sign up</span>
            </button>
            <hr className="my-2 border" />
            <a onClick={handleGoogleLogin} className="google-button mb-2">
              <img
                src="https://th.bing.com/th/id/R.01f28c2dfe2b297ec4a8e480569ba321?rik=1Q1LvXtv0pzIoQ&pid=ImgRaw&r=0"
                alt="Google Logo"
                className="google-logo"
              />
              Sign up with Google
            </a>

            <a onClick={handleSpotifyLogin} className="spotify-button">
              <img
                src="https://th.bing.com/th/id/R.148b28a3992349e8db92184c65d24bbd?rik=AJNg4RcAH8fwOg&riu=http%3a%2f%2forig12.deviantart.net%2f846f%2ff%2f2015%2f245%2f9%2fb%2fnew_spotify_icon_by_mattroxzworld-d98301o.png&ehk=4kqixXCdaWV6y4x6GzGcuj9iskpnJgcYXxemWAfh3cc%3d&risl=&pid=ImgRaw&r=0"
                alt="Spotify Logo"
                className="spotify-logo"
              />
              Sign up with Spotify
            </a>

            <div className="flex items-center justify-center gap-2 mt-2">
              <p>Already have an account?</p>
              <Link to="/login" className="aa font-bold hover:text-yellow-800">
                Sign in
              </Link>
            </div>
          </div>
          <div className="signup-container__bottom">
            <h1>
              Netw<span className="color">ork.</span>
            </h1>
          </div>
        </Form>
        <p className="absolute mb-3 bottom-0 font-[300] text-l flex items-center gap-2">
          <span className="color font-bold">Networks</span> copyright &copy;
          <span>{currentYear}</span> <span>{userLanguage}</span>
        </p>
      </div>
    </>
  );
};
