import { Formik } from "formik";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import HeaderImg from "../../assets/image-17.png";
import Arrow from "../../assets/back.svg";
import AddBanner from "../../assets//material-symbols-add-a-photo-outline.svg";
import RemoveBanner from "../../assets/cancel.svg";
import { useEffect, useState } from "react";

const EditProfile = () => {
  const [selectimage, setSelectImage] = useState(null);
  // const [iimageURLs, setImageURls] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadImageAsBlob = (imagePath) => {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "arraybuffer";

        xhr.onload = () => {
          if (xhr.status === 200) {
            const blob = new Blob([xhr.response], { type: "image/png" });
            resolve(blob);
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
      .then((blob) => {
        // console.log(blobUrl)
        setSelectImage(URL.createObjectURL(blob));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const validation = object({
    name: string("Invalid Entry")
      .required("Name Required!")
      .max(20, "Name should be 20 letter's"),
    location: string("Invalid Entry").required("Email Requried"),
    website: string("invalid Entry").url("Not a valid url"),
  });

  function onImageChange(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectImage(imageUrl);
    }
  }

  return (
    <>
      <div className="h-screen bg-neutral1000 text-neutral50">
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
                    <Link to="">
                      <img src={Arrow} alt="back-arrow-icon" />
                    </Link>
                    <p>Edit Profile</p>
                  </div>
                  <Button
                    varient="base"
                    buttonsize="sm"
                    type="submmit"
                    disabled={isSubmitting}
                    onClick={() => navigate(-1)}
                  >
                    Save
                  </Button>
                </header>
                <div className="relative self-stretch">
                  <div className="absolute flex items-center justify-center gap-4 -translate-x-1/2 -translate-y-1/2 bg-transparent top-1/2 left-1/2 opacity-60">
                    <image
                      src={AddBanner}
                      alt="add-icon"
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                      className="p-2 rounded-full cursor-pointer bg-neutral900shade"
                    />
                    <image
                      src={RemoveBanner}
                      alt="cancel-icon"
                      className="p-2 rounded-full cursor-pointer bg-neutral900shade"
                      onClick={() =>
                        document.getElemetnById("fileInput").click()
                      }
                    />
                  </div>
                  <img
                    src={selectimage}
                    alt="banner"
                    className="w-screen h-52"
                  />
                </div>

                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  className="hidden"
                  name="myImage"
                  multiple={false}
                  onChange={(e) => {
                    onImageChange(e);
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
              </form>
            )}
          </Formik>
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
            <label
              htmlFor="bio"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black px-2 peer-focus/name:px-2 peer-focus/name:text-blue-600 peer-focus/name:dark:text-blue-500 peer-placeholder-shown/name:scale-100 peer-placeholder-shown/name:-translate-y-1/2 peer-placeholder-shown/name:top-1/2 peer-focus/name:top-2 peer-focus/name:scale-75 peer-focus/name:-translate-y-4 left-1"
            >
              Bio
            </label>
          </section>
        </main>
      </div>
    </>
  );
};

export default EditProfile;

// import React, { useState, useEffect } from 'react';

// const EditProfile = () => {
//   const [selectimage, setSelectImage] = useState(null);
//   // const [imageURLs, setImageURLs] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadImageAsBlob = async (imagePath) => {
//       try {
//         const response = await fetch(imagePath);
//         if (response.ok) {
//           const blob = await response.blob();
//           setSelectImage(URL.createObjectURL(blob));
//         } else {
//           throw new Error("Failed to load image.");
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     // Run the effect when selectimage changes
//     if (selectimage) {
//       loadImageAsBlob(selectimage);
//     }
//   }, [selectimage]); // Dependency array with selectimage

//   // ...

//   function onImageChange(e) {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setSelectImage(URL.createObjectURL(selectedFile));
//     }
//   }

//   // ...

//   return (
//     // Your component JSX
//   );
// };

// export default EditProfile;
