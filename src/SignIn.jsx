import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const signInHandler = () => {
    if (email.trim() != "") {
      setTimeout(() => {
        setError("Incorrect email.");
      }, 100);
    } else {
      setError("Please fill out the form.");
    }
  };
  return (
    <div className="signup">
      <div className="wrapper">
        <h1>Welcome back !</h1>
        {!error ? <></> : <p className="alert error">{error}</p>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn green" onClick={signInHandler}>
          Continue
        </button>
        <p>
          New to GreenLeaef? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
