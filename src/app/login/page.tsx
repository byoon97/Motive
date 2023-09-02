/* eslint-disable @next/next/no-img-element */
// LOG IN PAGE
"use client";
import Link from "next/link";
import * as React from "react";
import { useSession, signIn, SignInResponse } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiOutlineApple } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface Credentials {
  email: string;
  password: string;
}

interface Res {
  error: string;
  ok: boolean;
  status: number;
  url: string;
}

export default function LogIn() {
  const [user, setUser] = React.useState<Credentials>({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleLogIn = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const credentials = {
      email: user.email,
      password: user.password,
    };
    try {
      signIn("credentials", { ...credentials, redirect: false })
        .then((response: SignInResponse | undefined) => {
          if (response?.ok) {
            console.log(response);
            router.push("/");
          } else if (response?.error === "CredentialsSignin") {
            window.alert("Bad Credentials");
          }
        })
        .catch((err: Error) => {
          console.log("look here", err);
        });
    } catch (err) {
      console.log("failed to sign in", err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col bg-white">
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
          Sign in into your account
        </h2>
        <span className="text-sm">
          or{" "}
          <Link href="/register">
            <div className="text-blue-500">register a new account</div>
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
                value={user.email}
                onChange={(e) =>
                  setUser({ email: e.target.value, password: user.password })
                }
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
                value={user.password}
                onChange={(e) =>
                  setUser({ email: user.email, password: e.target.value })
                }
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
              <button
                onClick={(e) => handleLogIn(e)}
                className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
              >
                Sign in
              </button>
            </div>

            <div className="mx-auto -mb-6 pb-1">
              <span className="text-center text-xs text-gray-700">
                or sign up with
              </span>
            </div>
            <div className="flex items-center w-full mt-2">
              <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                <button className="appearance-none flex items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none">
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
