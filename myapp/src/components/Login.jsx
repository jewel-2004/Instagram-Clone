import React from "react";
import "./Login.css";
import { FaFacebook } from "react-icons/fa";

function Login() {
  return (
    <div className="page">
      <div className="login-container">
        <div className="login-box">
          <h1 className="logo">Instagram</h1>
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />
          <a href="/home" className="login-btn">Log in</a>
          <div className="divider">
            <hr /> <span>OR</span> <hr />
          </div>


          <a href="#" className="fb-link"><FaFacebook size={16} style={{marginTop: "2px"}} color="#508edf" /> Log in with Facebook</a>
          <a href="#" className="forgot">Forgot password?</a>
        </div>
        <div className="signup-box">
          <p>Don’t have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
      <footer className="footer">
        <div className="links">
          <a href="#">Meta</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Help</a>
          <a href="#">API</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Instagram Lite</a>
          <a href="#">Meta AI</a>
          <a href="#">Meta AI Articles</a>
          <a href="#">Threads</a>
          <a href="#">Contact Uploading & Non-Users</a>
          <a href="#">Meta Verified</a>
        </div>
        <div className="bottom">
          <div className="dropDown">
            <select className="language-dropdown" defaultValue="en">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
              <option value="ar">Arabic</option>
              <option value="pt">Portuguese</option>
              <option value="ru">Russian</option>
              <option value="ja">Japanese</option>
              <option value="it">Italian</option>
              <option value="ko">Korean</option>
            </select>
          </div>
          <div className="copySpan">
            <span>© 2025 Instagram from Meta</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;