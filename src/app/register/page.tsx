/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiOutlineApple } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { gql, useMutation, useQuery } from "@apollo/client";
import toast, { Toaster } from "react-hot-toast";
import { type SubmitHandler, useForm } from "react-hook-form";
import { genSaltSync, hashSync } from "bcrypt-ts";
import { HiOutlineMailOpen } from "react-icons/hi";
import formData from "form-data";
import Mailgun from "mailgun.js";

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

const CreateUserMutation = gql`
  mutation createUser(
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
    $host: Boolean!
    $verified: Boolean!
  ) {
    createUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
      host: $host
      verified: $verified
    ) {
      id
      email
      firstName
      lastName
      password
      host
      verified
    }
  }
`;

const CreateVerificationTokenMutation = gql`
  mutation createVToken($token: String!, $user: Int!) {
    createVToken(token: $token, user: $user) {
      token
      user {
        id
        email
        firstName
        lastName
      }
    }
  }
`;

const API_KEY = process.env.NEXT_PUBLIC_MAILGUN_API_KEY || "";
const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "";

export default function Register() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const router = useRouter();

  const [createUser, { loading, error }] = useMutation(CreateUserMutation, {
    onCompleted: () => reset(),
  });

  const [createVToken, { loading: tokenLoad, error: tokenError }] = useMutation(
    CreateVerificationTokenMutation
  );

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { email, firstName, lastName, password, confirmPassword } = data;
    const host = false;
    const verified = false;
    const salt = genSaltSync(12);
    const hashedPassword = hashSync(password, salt);
    const variables = {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      host,
      verified,
    };

    // veryify passwords
    if (password === confirmPassword) {
      // attempt to create user
      try {
        const newUser = await toast.promise(createUser({ variables }), {
          loading: "Creating your Account...",
          success: (result) => {
            return "Account successfully created! 🎉";
          },
          error: (error) => {
            return `Something went wrong 😥 Please try again - ${error.message}`;
          },
        });

        let id = Number(newUser?.data?.createUser?.id);
        setEmail(newUser?.data?.createUser?.email);

        // attempt to send verification email
        const randomToken = `${(
          crypto.randomUUID() + crypto.randomUUID()
        ).replace(/-/g, "")}`;

        const vToken = await createVToken({
          variables: {
            token: randomToken,
            user: id,
          },
        });
        setShowModal(true);
        console.log(showModal, email);
        console.log(API_KEY, DOMAIN);
        const mailgun = new Mailgun(formData);
        const client = mailgun.client({ username: "api", key: API_KEY });
        const messageData = {
          from: `Verification Email <Brandon@${DOMAIN}>`,
          to: email,
          subject: "Please Activate Your Account with Motive",
          text: `Hello ${firstName}, please activate your account with us at Motive by clicking this link http://localhost:3000/activate/${randomToken}`,
          attachment: [{ filename: "/Motive.png" }],
        };

        let msg = await client.messages.create(DOMAIN, messageData);

        // after registration is complete, toggle modal
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("Passwords do not match!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col bg-white my-8">
      {/* Modal */}
      {showModal ? (
        <div className="fixed inset-0 z-10 bg-white bg-opacity-90 backdrop-filter backdrop-blur-md backdrop-grayscale">
          <div className="min-h-screen px-6 flex flex-col items-center justify-center animate-zoomIn">
            <div className="flex flex-col items-center justify-center text-center max-w-sm">
              <HiOutlineMailOpen className="shrink-0 w-12 h-12 text-blue-500" />
              <h3 className="mt-2 text-2xl font-semibold text-black">
                Confirm your email
              </h3>
              <p className="mt-4 text-lg text-black">
                We emailed a magic link to <strong>{email}</strong>. Check your
                inbox and click the link in the email to login.
              </p>
            </div>
          </div>
        </div>
      ) : null}
      <Toaster />
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
        {/* FORM BEGINGS HERE */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email address
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="text"
                {...register("firstName", { required: true })}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="text"
                {...register("lastName", { required: true })}
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
                {...register("password", { required: true })}
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
                {...register("confirmPassword", { required: true })}
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
                disabled={loading}
                type="submit"
                className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-6 h-6 animate-spin mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                    Creating...
                  </span>
                ) : (
                  <span>Create Account</span>
                )}
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
