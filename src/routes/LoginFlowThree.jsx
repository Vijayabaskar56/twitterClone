import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Singup from '../assets/signup-x.svg'
import Image from "../components/Image";


const LoginFlowThree = () => {
  return (
    <>
      <section className="inline-flex flex-col items-center justify-between w-full h-screen md:w-4/12 md:h-3/5 md:rounded-2xl bg-neutral1000 md:flex">
        <div className="self-stretch px-3.5 py-2.5 md:rounded-2xl flex-col justify-start items-start gap-3 inline-flex">
          <div className="flex flex-col items-start justify-center gap-3">
            <div className="inline-flex items-center self-stretch justify-start gap-5 px-4 py-3">
              <button>
                <Image src={Singup} alt="back-btn" />
              </button>
              <div className="text-base font-bold text-neutral50">
                Step 3 of 4
              </div>
            </div>
          </div>
          <section className="flex-col self-stretch justify-start gap-10">
            <p className="pb-10 text-2xl font-bold text-stone-50">
              We sent you a code
              <span className="block text-sm font-normal w-96 text-neutral-500 font-inter">
                Enter it below to verify janedoe@gmail.com
              </span>
            </p>
            <div className="flex-col items-center justify-center">
              <section
                action
                className="inline-flex flex-col justify-between w-full gap-4"
              >
                <div className="relative">
                  <InputField name="" type="password" />
                </div>
                <a
                  href="#"
                  className="text-sm font-normal text-right text-sky-500 font-inter"
                >
                  Didn’t receive a code?
                </a>
              </section>
            </div>
          </section>
        </div>
        <section className="flex-col items-start justify-end pb-5 mx-auto w-w03">
          <div className="mx-4">
            <Button varient="base" buttonsize="md">
              <p className="font-normal">Next</p>
            </Button>
          </div>
        </section>
      </section>
    </>
  );
};

export default LoginFlowThree;
