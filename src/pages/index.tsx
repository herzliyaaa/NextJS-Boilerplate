import type { NextPage } from 'next';
import LoginImage from '../styles/images/pattern.svg';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-100">
      <div className="flex h-[50rem] w-[95rem] bg-white-400 rounded-xl">
        {/* LOGIN IMAGE OVERLAY */}
        <div className="flex flex-col h-[50rem] w-[45rem] bg-gradient-to-tr from-indigo-700 to-purple-300 rounded-l-xl">

        {/* <div className="flex flex-col h-[50rem] w-[45rem] bg-[url(https://localhost:3000/src/styles/images/pattern.svg)] object-cover  bg-cover bg-center text-center rounded-l-xl"> */}
        </div>
          {/* insert image here */}
          {/* <Image
            src={LoginImage}
            alt="login"
            className="h-fit w-full mix-blend-multiply object-cover bg-center bg-cover"
          /> */}
        {/* </div> */}

        {/* LOGIN FORM */}
        <div className="flex flex-col h-[50rem] w-[50rem]  bg-white justify-center items-center rounded-r-xl shadow-xl shadow-t-xl shadow-slate">
          <div className="flex flex-col h-[35rem]">
            {/* Login Title */}
            <div className="flex items-center justify-start p-2 m-5 w-[30rem]">
              <h1 className="font-[Inter] font-extrabold text-3xl">LOGIN</h1>
            </div>

            <div className="flex items-center flex-col bg-slate-100 justify-center h-[20rem] w-[30rem]">
              <div className="flex flex-col justify-center w-[28rem] p-3">
                <label
                  htmlFor="email address"
                  className="font-bold py-2 font-[Inter]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  className="appearance-none rounded-none font-[Inter] relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>

              <div className="flex flex-col justify-center w-[28rem] p-3 ">
                <label
                  htmlFor="password"
                  className="font-bold py-2 font-[Inter]"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none font-[Inter] relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>

              <div className="flex justify-center w-[28rem] m-4 p-3 ">
                <button
                  type="submit"
                  className="w-full font-[Inter] font-bold bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign In
                </button>
              </div>
            </div>

            <div className="flex justify-end items-center w-[28rem] m-3 py-2 px-1 gap-1">
              <h1 className="font-[Inter] font-normal text-sm">
                Don't have an account?{' '}
              </h1>{' '}
              <a href="" className="font-bold font-[Inter] text-sm">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
