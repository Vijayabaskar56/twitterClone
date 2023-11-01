import Tweet from "./Tweet";

const Home = () => {
  return (
    <>
      <div className="bg-neutral1000 text-neutral50">
        <Tweet />
        <div className="flex flex-col self-stretch bg-orange600">
          NOting yet to see
        </div>
        <div className="fixed px-8 py-3 text-center transform -translate-x-1/2 rounded-full left-1/2 bottom-14 w-52 bg-searchbarFill whitespace-nowrap">
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
