import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const SignupLoginPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="signup">
      <picture></picture>
      <div className="auth">
        <h2>{isLogin ? "Login" : "SignUp"}</h2>
        <div className="auth-inputs">
          <input
            id="email"
            className="email"
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
                />
                <input
                  id="number"
                  type="number"
                  className="mobile-number"
                  placeholder="Type your Mobile Number"
                />
              </div>
              <div id="create-password" className="create-password">
                <input type="password" placeholder="Create Password" />{" "}
                <EyeSlashIcon className="eye-icon" />
              </div>
            </>
          )}

          <div id="confirm-password" className="confirm-password">
            <input
              type="password"
              placeholder={false ? "Confirm Password" : "Password"}
            />{" "}
            <EyeIcon className="eye-icon" />
          </div>
        </div>
        <button>{isLogin ? "Login" : "Sign Up"}</button>
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
