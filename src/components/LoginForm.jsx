"use client"

import { doCredentialLogin } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";


const LoginForm = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      const formdata = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formdata);
      if(!!response?.error){
        setError(response.error);
      }else{
        router.push("/dashboard");
      }
    } catch (e) {
     setError("Check your password and email");
    }
  }
  return (
    <>
      <div className="text-xl text-red-700">{error}</div>
      <form className="space-y-6" onSubmit={handleFormSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="current-password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
