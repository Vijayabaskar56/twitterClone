import CommentIcon from "../../assets/comment-sv.svg";
import RetweetIcon from "../../assets/retweet-sv.svg";
import heartICon from "../../assets/heart-sv.svg";
import reachIcon from "../../assets/reach-sv.svg";
import shareIcon from "../../assets/share-sv.svg";
import heartActiveIcon from "../../assets/heart-sv-active.svg";
import retweetActiveIcon from "../../assets/retweet-sv-active.svg";
import shareActiveIcon from "../../assets/share-sv-active.svg";
import userAvatar from "../../assets/user-avatar.svg";
import ReactIcons from "./componenets/ReactIcons";
import { useState } from "react";
import TweetHeader from "./componenets/TweetHeader";
const Tweet = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <main>
        <section className="inline-flex items-start justify-start w-full h-full gap-4 px-4 py-2 border-b border-neutral700">
          <img className="relative w-12 h-12 rounded-full" src={userAvatar} />
          <div className="inline-flex flex-col items-start justify-start gap-1 grow shrink basis-0">
            <TweetHeader
              name="aarushe reddy"
              userId="aarushe_reddy"
              time="24h"
              tweet="Don't wish for it work for it."
            />
            <div className="inline-flex items-center self-stretch justify-between">
              <ReactIcons src={CommentIcon} alt="comment-icon" value="11" />
              <ReactIcons
                src={!active ? RetweetIcon : retweetActiveIcon}
                alt="retweet-icon"
                value="11"
                onClick={handleClick}
              />
              <ReactIcons
                src={!active ? heartICon : heartActiveIcon}
                alt="heart-icon"
                value="11"
                onClick={handleClick}
              />
              <ReactIcons src={reachIcon} alt="reach-icon" value="11" />
              <ReactIcons
                src={!active ? shareIcon : shareActiveIcon}
                alt="share-icon"
                value="11"
                onClick={handleClick}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Tweet;
