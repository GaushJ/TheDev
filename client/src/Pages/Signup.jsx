import React from "react";

function Signup() {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  return (
    <>
      <div className="flex flex-row  items-center justify-center mb-10 h-screen signup_page_background">
        <div className="  h-auto grid place-content-center my-18 w-full">
          <div className="container max-w-4xl flex-1 flex  flex-row items-center w-full justify-center ">
            <div className="bg-white px-6 py-8 rounded  text-black w-full mr-6">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
              />

              <button
                type="submit"
                className="w-full text-center py-3 font-medium transition duration-300 rounded bg-green-500 text-white hover:bg-green-400 focus:outline-none my-1"
              >
                Create Account
              </button>
            </div>
            <span className="text-xl font-normal text-gray-500 flex justify-center my-2">
              OR
            </span>
            <div className="ml-10 w-full">
              <button
                type="button"
                onClick={google}
                className="w-full text-center py-3 font-medium transition duration-300 rounded bg-red-500 text-white hover:bg-red-400 focus:outline-none my-1"
              >
                Sign in with google
              </button>
              <button
                type="button"
                className="w-full text-center py-3 font-medium transition duration-300 rounded bg-blue-500 text-white hover:bg-blue-400 focus:outline-none my-1"
              >
                Sign in with facebook
              </button>
              <button
                type="button"
                onClick={github}
                className="w-full text-center py-3 font-medium transition duration-300 rounded bg-black text-white  focus:outline-none my-1"
              >
                Sign in with Github
              </button>
            </div>
          </div>
          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="/signup"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="/signup"
            >
              Privacy Policy
            </a>
          </div>
          <div className="text-center text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
