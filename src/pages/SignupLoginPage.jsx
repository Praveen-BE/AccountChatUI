import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUserData } from "../reducers/userSlice";

const SignupLoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const email = useRef(null);
  const mobileCode = useRef(null);
  const mobileNumber = useRef(null);
  const createPassword = useRef(null);
  const confirmPassword = useRef(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const callLoginApi = async () => {
    try {
      const userInputs = {
        emailId: email.current.value,
        confirmPassword: confirmPassword.current.value,
      };
      console.log(userInputs);
      const res = await fetch(BASE_URL + "auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInputs),
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      dispatch(addUserData(data.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const callSignUpApi = async () => {
    const userInputs = {
      emailId: email.current.value,
      mobileCountryCode: mobileCode.current.value,
      mobileNumber: mobileNumber.current.value,
      createPassword: createPassword.current.value,
      confirmPassword: confirmPassword.current.value,
    };
    const res = await fetch(BASE_URL + "auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInputs),
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    dispatch(addUserData(data.data));
    navigate("/");
  };

  return (
    <div className="signup">
      <picture></picture>
      <div className="auth">
        <h2>{isLogin ? "Login" : "SignUp"}</h2>
        <div className="auth-inputs">
          <input
            id="email"
            className="email"
            ref={email}
            type="email"
            placeholder="Type your email here"
          />
          {isLogin ? (
            " "
          ) : (
            <>
              <div className="number">
                <input
                  placeholder="+91"
                  className="mobile-code"
                  type="select"
                  ref={mobileCode}
                />
                <input
                  id="number"
                  type="number"
                  className="mobile-number"
                  placeholder="Type your Mobile Number"
                  ref={mobileNumber}
                />
              </div>
              <div id="create-password" className="create-password">
                <input
                  ref={createPassword}
                  type="password"
                  placeholder="Create Password"
                />{" "}
                <EyeSlashIcon className="eye-icon" />
              </div>
            </>
          )}

          <div id="confirm-password" className="confirm-password">
            <input
              ref={confirmPassword}
              type="password"
              placeholder={false ? "Confirm Password" : "Password"}
            />{" "}
            <EyeIcon className="eye-icon" />
          </div>
        </div>
        {isLogin ? (
          <button onClick={() => callLoginApi()}>Login</button>
        ) : (
          <button onClick={() => callSignUpApi()}>Sign Up</button>
        )}
        <p>
          Already Have an account?{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "SignUp" : "Login"}
          </span>
        </p>
        <div className="auth-or">
          <span>or</span>
          <hr />
        </div>
        <div className="auth-google">Login with Google</div>
      </div>
    </div>
  );
};

export default SignupLoginPage;
