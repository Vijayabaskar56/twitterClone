import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Image from "./components/Image";
import x100Logo from "./assets/100x-frame.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="flex-col md:flex-row flex h-screen w-screen md:gap-28 items-center justify-center bg-black font-['Inter']">
        <div className="flex-col">
          <section className="justify-center top-0 items-center md:items-end gap-0.5 py-3 flex">
            <Image
              src={x100Logo}
              alt="100x-logo"
              size={"md:w-w02 md:h-48 w-14 h-4"}
            />
          </section>
        </div>
        <section className="inline-flex flex-col items-start justify-start gap-10 my-auto w-w03 h px-7">
          <div className="flex flex-col items-start justify-start object-contain gap-3">
            <h1 className="font-bold text-stone-50 text-fs02 md:text-fs01 whitespace-nowrap">
              Happening now
            </h1>
            <h2 className="text-base font-bold text-stone-50 md:text-2xl">
              Join today.
            </h2>
          </div>
          <a href="./pages/screen02.html">
            <button className="bg-neutral50 text-neutral1000 w-w24 rounded-3xl text-center font-bold shadow-btnShadow backdrop-blur-2xl gap-2.5 px-6 py-2 hover:bg-neutral200 disabled:opacity-50">
              Create account
            </button>
            <Button text="Create account" varient="base" size="lg" />
          </a>
          <section className="inline-flex items-center justify-center h-5 gap-1 w-80">
            <span className="h-px border grow shrink basis-0 border-neutral-700" />
            <span className="text-center text-stone-50 text-base font-['Chirp']">
              or
            </span>
            <span className="h-px border grow shrink basis-0 border-neutral-700" />
          </section>
          <section className="flex flex-col items-start self-stretch justify-start h-20 gap-5">
            <p className="text-stone-50 md:text-xl font-medium font-['Inter']">
              Already have an account?
            </p>
            <button className="w-80 h-9 px-6 py-2 rounded-3xl shadow border border-twitterBlue border-opacity-25 backdrop-blur-2xl justify-center items-center gap-2.5 inline-flex text-twitterBlue">
              Sign up
            </button>
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
