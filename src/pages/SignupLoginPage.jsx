import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUserData } from "../reducers/userSlice";
import ReactCountryFlag from "react-country-flag";
import { countries } from "../utils/mobileCode";

const SignupLoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [countryCodeState, setCountryCodeState] = useState("AF");
  const email = useRef("");
  const mobileCode = useRef("AF");
  const mobileNumber = useRef("");
  const createPassword = useRef("");
  const confirmPassword = useRef("");
  const dispatch = useDispatch();
  const [isTypeCreatePassword, setIsTypeCreatePassword] = useState(true);
  const [isTypeConfirmPassword, setIsTypeConfirmPassword] = useState(true);

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
    try {
      const userInputs = {
        emailId: email.current.value,
        mobileCountryCode: mobileCode.current.value,
        mobileNumber: mobileNumber.current.value,
        createPassword: createPassword.current.value,
        confirmPassword: confirmPassword.current.value,
      };
      // console.log(userInputs);
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
    } catch (err) {
      console.log(err);
    }
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
                <select
                  ref={mobileCode}
                  className="dial-codes"
                  defaultValue={mobileCode}
                >
                  {countries.map((data) => (
                    <option
                      className="dial-code"
                      key={data.name}
                      value={data.dialCode}
                    >
                      {data.code + " " + data.dialCode}
                    </option>
                  ))}
                </select>
                <input
                  id="number"
                  type="String"
                  className="mobile-number"
                  placeholder="Type your Mobile Number"
                  ref={mobileNumber}
                />
              </div>
              <div id="create-password" className="create-password">
                <input
                  ref={createPassword}
                  type={isTypeCreatePassword ? "password" : "text"}
                  placeholder="Create Password"
                />{" "}
                {isTypeCreatePassword ? (
                  <EyeSlashIcon
                    onClick={() =>
                      setIsTypeCreatePassword(!isTypeCreatePassword)
                    }
                    className="eye-icon"
                  />
                ) : (
                  <EyeIcon
                    onClick={() =>
                      setIsTypeCreatePassword(!isTypeCreatePassword)
                    }
                    className="eye-icon"
                  />
                )}
              </div>
            </>
          )}

          <div id="confirm-password" className="confirm-password">
            <input
              ref={confirmPassword}
              type={isTypeConfirmPassword ? "password" : "text"}
              placeholder={false ? "Confirm Password" : "Password"}
            />
            {isTypeConfirmPassword ? (
              <EyeSlashIcon
                onClick={() => setIsTypeConfirmPassword(!isTypeConfirmPassword)}
                className="eye-icon"
              />
            ) : (
              <EyeIcon
                onClick={() => setIsTypeConfirmPassword(!isTypeConfirmPassword)}
                className="eye-icon"
              />
            )}
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
