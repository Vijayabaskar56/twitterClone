import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../components/Image";
import UserProfile from "../../assets/user-avatar.svg";
import { useState, useRef, useLayoutEffect } from "react";
import Closebtn from "../../assets/cancel.svg";

const PostTweet = () => {
  const [charCount, setcharCount] = useState(0);
  const ref = useRef();
  const [value, setValue] = useState(" ");
  const navigate = useNavigate();

  // This only tracks the auto-sized height so we can tell if the user has manually resized
  const autoHeight = useRef();

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    if (
      autoHeight.current !== undefined &&
      ref.current.style.height !== autoHeight.current
    ) {
      // don't auto size if the user has manually changed the height
      return;
    }

    ref.current.style.height = "auto";
    ref.current.style.overflow = "hidden";
    const next = `${ref.current.scrollHeight}px`;
    ref.current.style.height = next;
    autoHeight.current = next;
    ref.current.style.overflow = "auto";
  }, [value, ref, autoHeight]);

  const handleChange = (e) => {
    let count = e.target.value;
    setValue(count);
    setcharCount(count.length);
  };

  return (
    <>
      <div className="h-screen bg-black">
        <header className="flex justify-between px-4 py-3 border-b-2 border-solid border-b-neutral700">
          <Link to="./" className="inline-flex items-center">
            <img src={Closebtn} alt="cancel-icon" />
          </Link>
          <Button varient="bluebtn" onClick={() => navigate(-1)}>
            Post
          </Button>
        </header>
        <section className="inline-flex flex-row items-center justify-center gap-3 px-4 py-2">
          <Image src={UserProfile} alt="user-avatar" className="inline" />
          <div>
            {/* TODO: add interaction  */}
            <textarea
              name="tweerInput"
              id="tweerInput"
              ref={ref}
              cols="40"
              style={{
                resize: "vertical",
                minHeight: "1em",
              }}
              value={value}
              onChange={handleChange}
              className={`bg-black resize-y focus:outline-none caret-twitterBlue placeholder:text-neutral600 ${
                charCount < 280 ? "text-neutral-50" : "text-red-700"
              }`}
              placeholder="What's happening?!"
              defaultValue={""}
            />
          </div>
        </section>
        <section className="absolute bottom-0 w-full px-4 py-2 border-t-2 border-t-neutral800">
          <p className="text-neutral-600" id="characteCheck">
            {`${charCount}/280`}
          </p>
        </section>
      </div>
    </>
  );
};

export default PostTweet;
