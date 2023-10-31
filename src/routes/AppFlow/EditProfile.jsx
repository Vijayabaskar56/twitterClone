import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import InputField from "../../components/InputField";
import DropDOwn from "../../components/DropDOwn";
import Button from "../../components/Button";
import { number, object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import HeaderImg from "../../assets/image-17.png";
import Arrow from "../../assets/back.svg";
import AddBanner from "../../assets//material-symbols-add-a-photo-outline.svg";
import RemoveBanner from "../../assets/cancel.svg";
import Image from "../../components/Image";

const EditProfile = () => {
  const [selectimage, setSelectImage] = useState();
  // const [iimageURLs, setImageURls] = useState([]);
  const navigate = useNavigate();

  const loadImageAsBlob = (imagePath) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "arraybuffer";

      xhr.onload = () => {
        if (xhr.status === 200) {
          const blob = new Blob([xhr.response], { type: "image/png" }); // Adjust the type according to your image format.
          resolve(URL.createObjectURL(blob));
        } else {
          reject(new Error("Failed to load image."));
        }
      };

      xhr.open("GET", imagePath);
      xhr.send();
    });
  };

  // Usage
  loadImageAsBlob(HeaderImg)
    .then((blobUrl) => {
      console.log(blobUrl);
      setSelectImage(blobUrl);
    })
    .catch((error) => {
      console.error(error);
    });

  // useEffect(() => {
  //   if(selectimage.length < 1) return;
  //   const newImageURLs = [];
  //   selectimage.forEach(image)
  // })

  const validation = object({
    name: string("Invalid Entry")
      .required("Name Required!")
      .max(20, "Name should be 20 letter's"),
    location: string("Invalid Entry").required("Email Requried"),
    website: string("invalid Entry").url("Not a valid url"),
  });

  function onImageChange(e) {
    setSelectImage([...e.target.files]);
  }

  return (
    <>
      <div className="h-screen bg-neutral1000 text-neutral50">
        <section className="inline-flex flex-col items-end justify-center gap-2 pb-3">
          <div className="relative self-stretch">
            <div className="absolute flex items-center justify-center gap-4 -translate-x-1/2 -translate-y-1/2 bg-transparent top-1/2 left-1/2 opacity-60">
              <img
                src="../../public/images/material-symbols-add-a-photo-outline.svg"
                alt="photo-icon"
                className="p-2 rounded-full cursor-pointer bg-neutral900shade"
              />
              <img
                src="../../public/images/cancel.svg"
                alt="cancel-icon"
                className="p-2 rounded-full cursor-pointer bg-neutral900shade"
              />
            </div>
            <img src={HeaderImg} alt="banner" className="w-screen h-52" />
          </div>
          {/* <div className="absolute translate-y-1/2 top-36 left-4">
            <img
              src="../../public/images/user-avatar.svg"
              alt="user-dp"
              className="w-24 h-24 border-4 border-black rounded-full"
            />
            <img
              src="../../public/images/material-symbols-add-a-photo-outline.svg"
              alt="photo-icon"
              className="absolute p-2 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer bg-neutral900shade text-neutral50 top-1/2 left-1/2 opacity-60"
            />
          </div> */}
        </section>
        <main className="flex flex-col gap-5 px-4 py-3">
          <Formik
            initialValues={{
              name: "vj-bass",
              location: "madurai",
              website: "https://www.google.com",
            }}
            validationSchema={validation}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                console.log(values);
                resetForm();
                setSubmitting(false);
              }, 3000);
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
                className="inline-flex flex-col justify-between gap-8"
              >
                <header className="flex items-center justify-between px-4 py-3">
                  <div className="flex gap-5">
                    {/* Back arrow */}
                    {/*  <Link to={navigate(-1)}>
              <img src={Arrow} alt="back-arrow-icon" />
            </Link> */}
                    <Link to={""}>
                      <img src={Arrow} alt="back-arrow-icon" />
                    </Link>
                    <p>Edit Profile</p>
                  </div>
                  <a href="./screen08.html">
                    <Button varient="base">Save</Button>
                  </a>
                </header>
                <div className="relative self-stretch">
                  <div className="absolute flex items-center justify-center gap-4 -translate-x-1/2 -translate-y-1/2 bg-transparent top-1/2 left-1/2 opacity-60">
                    <input
                      type="image"
                      src={AddBanner}
                      alt="add-icon"
                      className="p-2 rounded-full cursor-pointer bg-neutral900shade"
                    />
                    <input
                      type="image"
                      src={RemoveBanner}
                      alt="cancel-icon"
                      className="p-2 rounded-full cursor-pointer bg-neutral900shade"
                    />
                  </div>
                  <img
                    src={selectimage}
                    alt="banner"
                    className="w-screen h-52"
                    // onChange={}
                  />
                </div>
                {/* {selectimage && (
                  <div>
                    <img
                      alt="not found"
                      width={"250px"}
                      src={URL.createObjectURL(selectimage)}
                    />
                    <br />
                    <button onClick={() => setSelectImage(null)}>Remove</button>
                  </div>
                )} */}
                {/* <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={onImageChange}
                /> */}

                <input
                  type="file"
                  name="myImage"
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectImage(event.target.files[0]);
                  }}
                />
                <InputField
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  disabled={isSubmitting}
                  errors={errors.name}
                  touched={touched.name}
                />
                <InputField
                  name="location"
                  type="location"
                  placeholder="location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.location}
                  disabled={isSubmitting}
                  errors={errors.location}
                  touched={touched.location}
                />
                <InputField
                  name="website"
                  type="website"
                  placeholder="Website"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.website}
                  disabled={isSubmitting}
                  errors={errors.website}
                  touched={touched.website}
                />
                <div className="m-auto h-2/6 pt-28">
                  <Button
                    varient="base"
                    buttonsize="md"
                    type="submmit"
                    disabled={isSubmitting}
                    onClick={() => navigate("/logintwo")}
                  >
                    Create account
                  </Button>
                </div>
              </form>
            )}
          </Formik>
          <section className="relative">
            <input
              type="text"
              id="Name"
              className="block px-3 pb-2.5 pt-4 w-full text-sm outline-none text-gray-900 bg-black rounded-md border-2 border-solid border-neutral500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer/name"
              placeholder=" "
              defaultValue="aarushe reddy"
            />
            <label
              htmlFor="Name"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black px-2 peer-focus/name:px-2 peer-focus/name:text-blue-600 peer-focus/name:dark:text-blue-500 peer-placeholder-shown/name:scale-100 peer-placeholder-shown/name:-translate-y-1/2 peer-placeholder-shown/name:top-1/2 peer-focus/name:top-2 peer-focus/name:scale-75 peer-focus/name:-translate-y-4 left-1"
            >
              Name
            </label>
          </section>
          <section className="relative">
            <textarea
              name="bio"
              id="bio"
              cols={40}
              rows={4}
              className="block px-3 pb-2.5 pt-4 w-full text-sm outline-none text-gray-900 bg-black rounded-md border-2 border-solid border-neutral500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer/name"
              placeholder=" "
              defaultValue={
                "Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations\n    "
              }
            />
            {/* <input
    type="text"
    id="bio"
    class="block px-3 pb-2.5 pt-4 w-full text-sm outline-none text-gray-900 bg-black rounded-md border-2 border-solid border-neutral500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer/name"
    placeholder=" "
    value="Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations"
  /> */}
            <label
              htmlFor="bio"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black px-2 peer-focus/name:px-2 peer-focus/name:text-blue-600 peer-focus/name:dark:text-blue-500 peer-placeholder-shown/name:scale-100 peer-placeholder-shown/name:-translate-y-1/2 peer-placeholder-shown/name:top-1/2 peer-focus/name:top-2 peer-focus/name:scale-75 peer-focus/name:-translate-y-4 left-1"
            >
              Bio
            </label>
          </section>
          <section className="relative">
            <input
              type="text"
              id="location"
              className="block px-3 pb-2.5 pt-4 w-full text-sm outline-none text-gray-900 bg-black rounded-md border-2 border-solid border-neutral500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer/name"
              placeholder=" "
            />
            <label
              htmlFor="location"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black px-2 peer-focus/name:px-2 peer-focus/name:text-blue-600 peer-focus/name:dark:text-blue-500 peer-placeholder-shown/name:scale-100 peer-placeholder-shown/name:-translate-y-1/2 peer-placeholder-shown/name:top-1/2 peer-focus/name:top-2 peer-focus/name:scale-75 peer-focus/name:-translate-y-4 left-1"
            >
              Location
            </label>
          </section>
          <section className="relative">
            <input
              type="text"
              id="website"
              className="block px-3 pb-2.5 pt-4 w-full text-sm outline-none text-gray-900 bg-black rounded-md border-2 border-solid border-neutral500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer/name"
              placeholder=" "
            />
            <label
              htmlFor="website"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black px-2 peer-focus/name:px-2 peer-focus/name:text-blue-600 peer-focus/name:dark:text-blue-500 peer-placeholder-shown/name:scale-100 peer-placeholder-shown/name:-translate-y-1/2 peer-placeholder-shown/name:top-1/2 peer-focus/name:top-2 peer-focus/name:scale-75 peer-focus/name:-translate-y-4 left-1"
            >
              Website
            </label>
          </section>
        </main>
      </div>
    </>
  );
};

export default EditProfile;
