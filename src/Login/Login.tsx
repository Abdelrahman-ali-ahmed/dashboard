import { useState } from "react";

const Login = () => {
  const [NewUser, setNewUser] = useState(true);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState(false);

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-md sm:max-w-sm mx-auto bg-gradient-to-br from-[#810551] to-[#00464e] rounded-xl px-8 py-10 shadow-lg">
        <div className="absolute inset-0 m-[1.5px] rounded-[10px] bg-black z-[-1]" />

        <header className="absolute top-3 left-5 text-sm sm:text-xs text-white/60">
          from{" "}
          <i className="bg-gradient-to-r from-[#ff009d] to-[#09b4c7] text-transparent bg-clip-text">
            Infinity Studios
          </i>
        </header>

        <img className="w-20 sm:w-16 mx-auto relative mb-6" src="/public/logo.png" alt="Logo" />

        <h2 className="relative text-2xl sm:text-xl text-center font-bold bg-gradient-to-br from-[#810551] to-[#00464e] text-transparent bg-clip-text mb-8">
          Sub-Min <br /> Dashboard
        </h2>

        <form className="flex flex-col gap-8 sm:gap-6">
          {NewUser && (
            <div className="relative">
              <input
                onChange={(e) => setusername(e.target.value)}
                type="text"
                id="username"
                required
                className="w-full bg-transparent border-b border-[#810551] text-white p-3 pt-7 text-base focus:outline-none peer"
              />
              <label
                htmlFor="username"
                className="absolute top-6 left-1 text-base sm:text-sm text-white/60 transition-all peer-focus:top-0 peer-focus:text-[#bb0c78] peer-valid:top-0 peer-valid:text-[#bb0c78]"
              >
                Username
              </label>
            </div>
          )}

          <div className="relative">
            <input
              onChange={(e) => setemail(e.target.value)}
              type="email"
              id="email"
              required
              className="w-full bg-transparent border-b border-[#810551] text-white p-3 pt-7 text-base focus:outline-none peer"
            />
            <label
              htmlFor="email"
              className="absolute top-6 left-1 text-base sm:text-sm text-white/60 transition-all peer-focus:top-0 peer-focus:text-[#bb0c78] peer-valid:top-0 peer-valid:text-[#bb0c78]"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="password"
              required
              className="w-full bg-transparent border-b border-[#810551] text-white p-3 pt-7 text-base focus:outline-none peer"
            />
            <label
              htmlFor="password"
              className="absolute top-6 left-1 text-base sm:text-sm text-white/60 transition-all peer-focus:top-0 peer-focus:text-[#bb0c78] peer-valid:top-0 peer-valid:text-[#bb0c78]"
            >
              Password
            </label>
          </div>

          {error && (
            <>
              <img alt="status" className="w-[60px] sm:w-[50px] mx-auto animate-scale-in" />
              <span className="text-red-500 text-base sm:text-sm text-center">Process Failed</span>
              <span className="text-red-500 text-base sm:text-sm text-center">{ErrorMsg}</span>
            </>
          )}

          <button
            type="submit"
            className="bg-[#810551] text-white py-4 sm:py-3 mt-4 sm:mt-2 rounded hover:opacity-90 active:scale-95 transition text-lg sm:text-base"
          >
            {NewUser ? "Sign Up" : "Log In"}
          </button>

          <span className="text-white text-sm sm:text-xs text-center mt-4 sm:mt-2 leading-relaxed">
            {NewUser ? (
              <>
                Already have an account?{" "}
                <b
                  className="text-[#aa0c6e] cursor-pointer"
                  onClick={() => {
                    setNewUser(false);
                    seterror(false);
                  }}
                >
                  Log In
                </b>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <b
                  className="text-[#aa0c6e] cursor-pointer"
                  onClick={() => {
                    setNewUser(true);
                    seterror(false);
                  }}
                >
                  Sign Up
                </b>
              </>
            )}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
