import { useRef } from "react";
import "./App.css";
import axios from "axios";

const API_SERVER = `http://localhost:5000`;

function App() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_SERVER}/register`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      alert("Signup successfull");
    } catch (error) {
      alert("Signup failed");
    }
  };

  return (
    <>
      <form onSubmit={signup}>
        <div>
          <label>Email: </label>
          <input type="text" ref={emailRef} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" ref={passwordRef} />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
}

export default App;
