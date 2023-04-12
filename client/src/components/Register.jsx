import React from "react";
// BOOTSTRAP IMPORTS
import { InputGroup, Form, Col } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [messageERROR, setMessageERROR] = useState("");
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

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
      position: "bottom-left",
      autoClose: 1000,
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
      position: "bottom-left",
      autoClose: 1000,
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
      const res = await axios.post("/api/signup_user", { email, password });

      if (res?.data?.exist === true) {
        toast(`${res?.data?.message} log in`, {
          position: "bottom-left",
          autoClose: 1000,
          theme: "dark",
        });
        navigate("/login");
      } else if (res?.data?.session?.clientID) {
        localStorage.setItem("token", res?.data?.session?.clientID);
        navigate("/", { replace: true });
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
    const res = await axios.get("/api/auth/google_succsess");
    const clientid = res?.data?.user?.clientID;
    localStorage.setItem("google-token", clientid);
  }

  return (
    <>
      <div className="signup-container">
        <Form onSubmit={handleCreateUser} className="drop-shadow-2xl rounded">
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
            <InputGroup as={Col} hasValidation className="mb-2">
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
              {emailError && (
                <Form.Control.Feedback type="invalid">
                  {emailError}
                </Form.Control.Feedback>
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
              {passwordError && (
                <Form.Control.Feedback type="invalid">
                  {passwordError}
                </Form.Control.Feedback>
              )}
            </InputGroup>
            <p className="opacity-60 text-sm my-2">
              By creating an account you agree to our{" "}
              <span className="color">terms</span> and{" "}
              <span className="color">conditions</span>
            </p>
            <button
              type="submit"
              className="w-[100%] p-[0.5rem] bg-[#8ABB3A] flex gap-2 items-center justify-center text-white"
            >
              <span>Create account</span>
            </button>
            <a
              // href="/api/auth/google"
              className="google-login-button drop-shadow-xl my-2 border hover:bg-slate-900"
              onClick={handleGoogleLogin}
            >
              <img
                src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0"
                alt="Google logo"
              />
              <span>Sign up with Google</span>
            </a>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p>Already have an account?</p>
              <Link to="/login" className="font-bold hover:text-yellow-800">
                Log in
              </Link>
            </div>
          </div>
          <div className="signup-container__bottom">
            <h1>
              Netw<span className="color">ork.</span>
            </h1>
          </div>
        </Form>
        <p>Networks copyright &copy; {currentYear} {}</p>
      </div>
    </>
  );
};
