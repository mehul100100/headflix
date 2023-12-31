"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import axios from "axios";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
const AuthContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [toogle, setToogle] = useState(false);
  const router = useRouter();
  const loginHandler = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,

        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const registerHandler = useCallback(async () => {
    try {
      await axios.post("/api/auth/register", {
        email,
        name,
        password,
      });
      loginHandler();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, loginHandler]);

  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-[url('/images/hero.jpg')]">
        <div className="w-[100%] h-[100%] md:w-[50%] lg:w-[400px] md:h-auto bg-black bg-opacity-80 p-12 md:rounded-lg">
          <div className="flex flex-col space-y-4 pt-10 md:p-0">
            {!toogle ? (
              <div className="text-white text-3xl mb-2 font-bold">Sign In</div>
            ) : (
              <div className="text-white text-3xl mb-2 font-bold">Register</div>
            )}

            {toogle && (
              <div>
                <input
                  type="text"
                  onChange={(e: any) => setName(e.target.value)}
                  value={name}
                  placeholder="Username"
                  className="bg-[#404040] text-white text-sm rounded-lg block w-full p-2.5"
                />
              </div>
            )}

            <div>
              <input
                type="email"
                placeholder="Email"
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
                className="bg-[#404040] text-white text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
                className="bg-[#404040] text-white text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            {!toogle ? (
              <button
                onClick={loginHandler}
                type="button"
                className="w-full text-white bg-[#dc2727] hover:bg-opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 transition"
              >
                Login
              </button>
            ) : (
              <button
                onClick={registerHandler}
                type="button"
                className="w-full text-white bg-[#dc2727] hover:bg-opacity-90 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 transition"
              >
                Sign Up
              </button>
            )}
            <div className="flex flex-row justify-center space-x-4">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="flex items-center justify-center cursor-pointer bg-white w-10 h-10 rounded-full hover:opacity-80 transition"
              >
                <FcGoogle size={25} />
              </div>
              <div
                className="flex items-center justify-center cursor-pointer bg-white w-10 h-10 rounded-full hover:opacity-80 transition"
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
              >
                <FaGithub size={25} />
              </div>
            </div>
            {!toogle ? (
              <div className="text-gray-400">
                First time using Netflix? &nbsp;
                <span
                  className="text-white cursor-pointer hover:underline"
                  onClick={() => setToogle(!toogle)}
                >
                  Create an account
                </span>
              </div>
            ) : (
              <div className="text-gray-400">
                Already have an account? &nbsp;
                <span
                  className="text-white cursor-pointer hover:underline"
                  onClick={() => setToogle(!toogle)}
                >
                  Log In
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContent;
