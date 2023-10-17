import React, { useState } from "react";
import { useSignup } from "../../hook/useSignup";
import { Link } from 'react-router-dom';
import LoginFooter from '../Footer/LoginFooter';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  }

  return (
    <div className="flex flex-col min-h-screen  " style={{ backgroundColor: '#2A2746' }}>
      <div className="flex justify-center items-center h-full mt-28">
        <div className="bg-transparent shadow-2xl p-18 rounded-lg w-full max-w-md border border-black p-9">
          <form className="signup p-5 m-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex justify-center items-center h-full">
            <h2 className="text-4xl font-bold text-white" m-6 >Create Account</h2>
            </div>
            <div className="mb-4 flex justify-center items-center h-full">
            <h3 className="text-2xl font-bold text-white">Sign Up</h3>
          </div>


            <div className="mb-4">
              <label className=" text-white text-2xl mb-8 mt-7">Email address:</label>
              <input
                type="email"
                placeholder="Email or Username"
                className="mt-1 p-2 rounded border w-full text-black"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="mb-4">
              <label className=" text-white text-2xl mb-8 mt-7">Password:</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-1 p-2 rounded border w-full text-black"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <button
              disabled={isLoading}
              className="w-full bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-700"
            >
              Sign up
            </button>

            {error && <div className="text-red-500 mt-4">{error}</div>}
          </form>
          <hr/>
          <div className="mt-4 ">
            <p className="text-white m-5">Already have an account?</p>
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
          <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold p-2 rounded-full shadow-md focus:outline-none focus:ring focus:ring-blue-300">
                Back to Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-28 overflow-scroll">
        <LoginFooter />
      </div>
    </div>
  );
}

export default Signup;