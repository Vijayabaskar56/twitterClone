import { useContext, createContext } from "react";

export const TweetContext = createContext({
  tweet: [
    {
      id: 0,
      userId: "",
      tweetText: "",
      time: "",
    },
  ],
  postTweet: (tweet) => {},
  updateTweet: (id, tweet) => {},
  deleteTweet: (id, tweet) => {},
});

export const TweetProvider = TweetContext.Provider;

export function useTweet() {
  return useContext(TweetContext);
}
