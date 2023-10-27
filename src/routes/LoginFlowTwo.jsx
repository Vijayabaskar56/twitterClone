import React from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";

const LoginFlow = () => {
  return (
    <>
      <section className="inline-flex flex-col items-center justify-between w-full h-screen md:w-4/12 md:h-3/5 md:rounded-2xl bg-neutral1000 md:flex">
        <div className="self-stretch px-3.5 py-2.5 md:rounded-2xl flex-col justify-start items-start gap-3 inline-flex">
          <div className="flex flex-col items-start justify-center gap-3">
            <div className="inline-flex items-center self-stretch justify-start gap-5 px-4 py-3">
              <button>
                <img src="../../public/images/signup-x.svg" alt srcSet />
              </button>
              <div className="text-base font-bold text-neutral50">
                Step 2 of 4
              </div>
            </div>
          </div>
          <section className="flex-col self-stretch justify-start">
            <p className="pb-5 text-2xl font-bold text-stone-50">
              Create your account
            </p>
            <div className="flex-col items-center justify-center gap-8">
              <section
                action
                className="inline-flex flex-col justify-between w-full gap-8"
              >
                <InputField name="name" type="text" label="name" value="Vijayabaskar" />
                <InputField
                  name="email"
                  type="email"
                  label="email"
                  value="vj2k02@gmail.com"
                />
                <InputField
                  name="DOB"
                  type="num"
                  label="DOB"
                  value="18/04/2002"
                />
              </section>
            </div>
          </section>
        </div>
        <section className="flex-col items-start justify-end pb-5">
          <div className="m-auto">
            <Link to="loginFLowThree">
              <Button varient="bluebtn" buttonsize="lg" >Post</Button>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default LoginFlow;
