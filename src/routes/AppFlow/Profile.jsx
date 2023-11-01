import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Tweet from "./Tweet";

const Profile = () => {
  return (
    <>
      <div className="bg-black text-neutral50">
        <header>
          <section className="inline-flex flex-col items-end justify-center gap-2">
            <img
              src="../../public/images/image-17.png"
              alt="banner"
              className="flex-shrink-0 w-screen h-h02"
            />
            <img
              src="../../public/images/user-avatar.svg"
              alt="profileIcon"
              className="absolute w-12 h-12 border-2 border-solid rounded-full top-32 left-5 border-neutral1000"
            />
            <Link to="/editprofile">
              <Button varient="outlineBlack" buttonsize="sm">
                Edit Profile
              </Button>
            </Link>
          </section>
          <section className="flex-col items-start gap-4 px-5 pt-0 pb-3 flex-end">
            <div>
              <h1 className="text-xl font-bold text-neutral50">
                aarushe reddy
              </h1>
              <p className="text-base font-normal text-neutral500 font-inter">
                @aarushe_reddy
              </p>
            </div>
            <p className="text-base font-normal w-96 text-stone-50 font-inter">
              Digital Goodies Team - Web &amp; Mobile UI/UX development;
              Graphics; Illustrations
            </p>
            <div className="inline-flex items-start justify-start h-5 gap-5 w-80">
              <div className="flex items-center justify-start gap-1">
                <img src="../../public/images/link-icon.svg" alt="link-icon" />
                <a href="#" className="text-base text-sky-500">
                  pixsellz.io
                </a>
              </div>
              <div className="flex items-center justify-start gap-1">
                <img
                  src="../../public/images/calendar-sv.svg"
                  alt="link-icon"
                />
                <p className="text-base font-normal text-neutral-500 font-inter">
                  Joined September 2018
                </p>
              </div>
            </div>
            <div className="inline-flex items-end justify-start w-56 h-5 gap-5">
              <div>
                <span className="text-neutral50">217</span>
                <span> </span>
                <span className="text-base font-normal text-neutral-500 font-inter">
                  Following
                </span>
              </div>
              <div>
                <span className="text-neutral50">118</span>
                <span> </span>
                <span className="text-base font-normal text-neutral-500 font-inter">
                  Followers
                </span>
              </div>
            </div>
          </section>
        </header>
        <main>
          <section className="inline-flex items-start justify-start w-full h-full gap-4 px-4 py-2 border-b border-neutral700">
            <img
              className="relative w-12 h-12 rounded-full"
              src="../../public/images/user-avatar.svg"
            />
            <div className="inline-flex flex-col items-start justify-start gap-1 grow shrink basis-0">
              <div className="inline-flex items-center self-stretch justify-start gap-px">
                <p className="text-base font-medium">
                  Name
                  <span className="inline text-base font-normal text-neutral500">
                    @handle • 10h
                  </span>
                </p>
              </div>
              <div className="self-stretch">
                <p className="self-stretch h-full">
                  Don&apos;t wish for it, work for it.
                </p>
              </div>
              <div className="inline-flex items-center self-stretch justify-between">
                <div className="flex">
                  <img
                    src="../../public/images/comment-sv.svg"
                    alt="comment-icon"
                  />
                  <p className="px-1 text-neutral500">11</p>
                </div>
                <div className="flex">
                  <img
                    src="../../public/images/retweet-sv.svg"
                    alt="comment-icon"
                  />
                  <p className="px-1 text-neutral500">11</p>
                </div>
                <div className="flex">
                  <img
                    src="../../public/images/heart-sv.svg"
                    alt="comment-icon"
                  />
                  <p className="px-1 text-neutral500">11</p>
                </div>
                <div className="flex">
                  <img
                    src="../../public/images/reach-sv.svg"
                    alt="comment-icon"
                  />
                  <p className="px-1 text-neutral500">99.6k</p>
                </div>
                <div className="flex">
                  <img
                    src="../../public/images/share-sv.svg"
                    alt="share-icon"
                    className="text-neutral700"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="inline-flex items-start justify-start w-full h-full gap-4 px-4 py-2 border-b border-neutral700">
            <img
              className="relative w-12 h-12 rounded-full"
              src="../../public/images/user-avatar.svg"
            />
            <div className="inline-flex flex-col items-start justify-start gap-1 grow shrink basis-0">
              <div className="inline-flex items-center self-stretch justify-start gap-px">
                <p className="text-base font-medium">
                  Name
                  <span className="inline text-base font-normal text-neutral500">
                    @handle • 10h
                  </span>
                </p>
              </div>
              <div className="self-stretch">
                <p className="self-stretch h-full">
                  i&apos;ve seen people absolutely despise auto layout in figma
                  but i think it&apos;s a lifesaver- 1. tidies everything nice
                  and compact 2. makes responsive design effortless 3. no manual
                  adjustments post any tweaks4. saves a tonnn of timesorry, but
                  will stay an auto layout maxi all life.
                </p>
              </div>
              <div className="inline-flex items-center self-stretch justify-between">
                <div className="flex">
                  <img
                    src="../../public/images/comment-sv.svg"
                    alt="comment-icon"
                  />
                  <p className="px-1 text-neutral500">11</p>
                </div>
                <div className="flex">
                  <img
                    src="../../public/images/retweet-sv.svg"
                    alt="comment-icon"
                  />
                  <p className="px-1 text-neutral500">11</p>
                </div>
                <div className="flex">
                  <img
                    src="../../public/images/heart-sv.svg"
                    alt="comment-icon"
                  />
                  <p className="px-1 text-neutral500">11</p>
                </div>
                <div className="flex">
                  <img
                    src="../../public/images/reach-sv.svg"
                    alt="comment-icon"
                  />
                  <p className="px-1 text-neutral500">99.6k</p>
                </div>
                <div className="flex">
                  <img
                    src="../../public/images/share-sv.svg"
                    alt="share-icon"
                    className="text-neutral700"
                  />
                </div>
              </div>
            </div>
          </section>
          <Tweet />
        </main>
        <button className="fixed right-5 transform -translate-x bottom-14 w-16 h-16 p-4 bg-twitterBluedefault rounded-full shadow justify-start items-start gap-2.5 inline-flex">
          <Link to="/postTweet">
            <img src="../../public/images/content-add.svg" alt="plus-icon" />
          </Link>
        </button>
      </div>
    </>
  );
};

export default Profile;
