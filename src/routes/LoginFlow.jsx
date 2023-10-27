import React from "react";
import { Formik } from "formik";
import { object, string, number } from "yup";
import InputField from "../components/InputField";
import Button from "../components/Button";

const LoginFlow = () => (
  // const validation = object({})
  <div className="inline-flex flex-col items-center justify-between w-full h-screen md:w-4/12 md:h-3/5 md:rounded-2xl bg-neutral1000 md:flex">
    <div className="self-stretch px-3.5 py-2.5 md:rounded-2xl flex-col justify-start items-start gap-3 inline-flex">
      <div className="flex flex-col items-start justify-center gap-3">
        <div className="inline-flex items-center self-stretch justify-start gap-5 px-4 py-3">
          <a
            href="./screen03.html"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <button>
              <img src="../../public/images/signup-x.svg" alt srcSet />
            </button>
          </a>
          <div className="text-base font-bold text-neutral50">Step 3 of 4</div>
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
          <Formik
            initialValues={{ VerificationCode: "" }}
            // validate=
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
                className="inline-flex flex-col justify-between w-full gap-4"
              >
                <InputField
                  name="verificationCode"
                  type="number"
                  placeholder="Verification Code"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  disabled={isSubmitting}
                />
                <a
                  href="#"
                  className="text-sm font-normal text-right text-sky-500 font-inter"
                >
                  Didn’t receive a code?
                </a>

                {errors.email && touched.email && (
                  <div className="text-red-600">{errors.email}</div>
                )}
                <section className="flex-col items-start justify-end pb-5 mx-auto w-w03">
                  <div className="mx-4">
                    <Button
                      varient="base"
                      btnsize="md"
                      text="Next"
                      btntype="submmit"
                      disabled={isSubmitting}
                    ></Button>
                  </div>
                </section>
              </form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  </div>
);

export default LoginFlow;