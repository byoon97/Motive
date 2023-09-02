/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiOutlineApple } from "react-icons/ai";
import { signIn } from "next-auth/react";

function Register() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex items-center justify-center h-screen flex-col bg-white my-8">
      <div className="text-center">
        <div className="flex items-center justify-center">
          <Link href="/">
            {" "}
            <img
              className="w-44 object-contain cursor-pointer"
              src="/Motive.png"
              alt="Motive Logo"
            />
          </Link>
        </div>
        <h2 className="text-4xl tracking-tight text-black">
          Register an account
        </h2>
        <span className="text-sm">
          or{" "}
          <Link href="/login">
            <div className="text-blue-500">Sign into your account</div>
          </Link>
        </span>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Email address
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                ref={emailRef}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Username
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                ref={usernameRef}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                ref={passwordRef}
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Confirm Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                ref={confirmPasswordRef}
                required
              />
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3 ">
              <label htmlFor="remember" className="flex items-center w-1/2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-1 bg-white shadow"
                />
                <span className="text-sm text-gray-700 pt-1">Remember Me</span>
              </label>
              <div className="w-1/2 text-right">
                <a href="#" className="text-blue-500 text-sm tracking-tight">
                  Forget your password?
                </a>
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
                Create Account
              </button>
            </div>
            <div className="mx-auto -mb-6 pb-1">
              <span className="text-center text-xs text-gray-700">
                or sign up with
              </span>
            </div>
            <div className="flex items-center w-full mt-2">
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                <button
                  onClick={() => signIn()}
                  className="appearance-none flex items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
                >
                  <AiFillGithub size={28} />
                </button>
              </div>
              <div className="w-full md:w-1/2 px-3 pt-4 mx-2">
                <button className="appearance-none flex items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                  <FcGoogle size={28} />
                </button>
              </div>
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                <button className="appearance-none flex items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
                  <AiOutlineApple size={28} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
