import { useState } from "react";
import {
login,
register, 
} from "../AuthService/AuthService.js";
import { useDispatch, useSelector } from "react-redux";
import { login as loginAction } from "../redux/loginSlice.js";

const Login = () => {
  const [NewUser, setNewUser] = useState(true);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  console.log(isLoggedIn);
  
  const submit = async (e) => {
  e.preventDefault();
  seterror(false);
  try {
    if (NewUser) {
      await register(email, password);
      setNewUser(false); 
    } else {
      await login(email, password);
      dispatch(loginAction());
      console.log("User logged in successfully");
    }
  } catch (error) {
    seterror(true);
    setErrorMsg(error.message);
    console.error("Authentication error:", error);
  }
};


  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-8 bg-black">
      <div className="relative w-full max-w-md mx-auto bg-black border border-purple-500/30 rounded-xl px-8 py-10 shadow-lg">
        

        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12l.93.94 1.48-1.48c.69-.69 1.6-1.07 2.57-1.07s1.88.38 2.57 1.07c1.42 1.42 1.42 3.72 0 5.14-.69.69-1.6 1.07-2.57 1.07s-1.88-.38-2.57-1.07L9.41 14.12c1.44 0 2.8-.56 3.77-1.53L12 11.34 10.48 10l-.93-.94-1.48 1.48c-.69.69-1.6 1.07-2.57 1.07s-1.88-.38-2.57-1.07c-1.42-1.42-1.42-3.72 0-5.14.69-.69 1.6-1.07 2.57-1.07s1.88.38 2.57 1.07L14.59 9.88c-1.44 0-2.8.56-3.77 1.53z"/>
            </svg>
          </div>

        </div>

        <h2 className="relative text-2xl text-center font-bold mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Sub-Min
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Dashboard
          </span>
        </h2>

        <form className="flex flex-col gap-6" onSubmit={submit}>
          {NewUser && (
            <div className="relative">
              <input
                onChange={(e) => setusername(e.target.value)}
                type="text"
                id="username"
                required
                className="w-full bg-transparent border-b border-purple-500/50 text-white p-3 text-base focus:outline-none focus:border-purple-400 peer"
                placeholder=" "
              />
              <label
                htmlFor="username"
                className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-purple-400"
              >
                username
              </label>
            </div>
          )}

          <div className="relative">
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              type="email"
              id="email"
              required
              className="w-full bg-transparent border-b border-purple-500/50 text-white p-3 text-base focus:outline-none focus:border-purple-400 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className={`absolute left-0 text-sm transition-all ${
                email ? '-top-2 text-xs text-purple-400' : 'top-3 text-gray-400 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400'
              }`}
            >
              email
            </label>
          </div>

          <div className="relative">
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="password"
              required
              className="w-full bg-transparent border-b border-purple-500/50 text-white p-3 text-base focus:outline-none focus:border-purple-400 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-purple-400"
            >
              password
            </label>
          </div>

          {error && (
            <>
              <span className="text-red-400 text-sm text-center">Process Failed</span>
              <span className="text-red-400 text-sm text-center">{ErrorMsg}</span>
            </>
          )}

          <button
            type="submit"
            className="bg-white text-black py-3 mt-4 rounded font-medium hover:bg-gray-100 active:scale-95 transition text-base"
          >
            {NewUser ? "Sign Up" : "Log In"}
          </button>

          <span className="text-gray-400 text-sm text-center mt-4 leading-relaxed">
            {NewUser ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-purple-400 hover:text-purple-300 underline"
                  onClick={() => {
                    setNewUser(false);
                    seterror(false);
                  }}
                >
                  Log In
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-purple-400 hover:text-purple-300 underline"
                  onClick={() => {
                    setNewUser(true);
                    seterror(false);
                  }}
                >
                  Sign Up
                </button>
              </>
            )}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
