import React from "react";
import "./signup.css";
import { FaFacebook } from "react-icons/fa";

function App() {
  return (
    <div className="page">
      
      <div className="login-container">
        <div className="login-box">
          <h1 className="logo">Instagram</h1>
          <p className="signup-text">
            Sign up to see photos and videos from your friends.
          </p>
          <button className="fb-btn">
            <span className="fb-icon"><FaFacebook size={16} style={{marginTop: "2px"}} color="white" /></span> Log in with Facebook
          </button>
          <div className="divider">
            <hr /> <span>OR</span> <hr />
          </div>
          <input type="text" placeholder="Mobile Number or Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Username" />
          <p className="info-text">
            People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a>
          </p>
          <p className="terms-text">
            By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>.
          </p>
          <a href="/home" className="signup-btn">Sign up</a>
        </div>
        
        <div className="signup-box">
          <p>
            Have an account? <br/><a href="/">Log in</a>
          </p>
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
          <span>© 2025 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
}

export default App;