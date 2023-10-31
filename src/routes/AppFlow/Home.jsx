import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-neutral1000 text-neutral50">
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
              <div class="self-stretch">
                <p className="self-stretch h-full">
                  Don't wish for it, work for.
                </p>
              </div>
              <div className="inline-flex items-center self-stretch justify-between">
                <div className="flex">
                  <div className="flex">
                  <img
                    src="../../public/images/comment-sv.svg"
                    alt="comment-icon"
                  />
                  <p className="px-1 text-neutral500">11</p>
                </div>
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
        </main>
        <div className="fixed h-10 px-8 py-3 text-center transform -translate-x-1/2 rounded-full left-1/2 bottom-14 w-52 bg-searchbarFill whitespace-nowrap">
          Copied to clipboard.
        </div>
        <a href="./screen07.html">
          <button className="fixed right-8 transform -translate-x bottom-14 w-16 h-16 p-4 bg-twitterBluedefault rounded-full shadow justify-start items-start gap-2.5 inline-flex">
            <img src="../../public/images/content-add.svg" alt="plus-icon" />
          </button>
        </a>
      </div>
    </>
  );
};

export default Home;
