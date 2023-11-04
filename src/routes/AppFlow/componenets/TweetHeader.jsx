const TweetHeader = ({
  name = "VJ",
  userId = "@Vj",
  time = "3hrs",
  tweet = "Life is what you make it",
}) => {
  return (
    <>
      <div className="inline-flex items-center self-stretch justify-start gap-px">
        <p className="text-base font-medium">
          {name}
          <span className="inline text-base font-normal text-neutral500">
            {`@${userId} • ${time}`}
          </span>
        </p>
      </div>
      <div className="self-stretch">
        <p className="self-stretch h-full">{tweet}</p>
      </div>
    </>
  );
};

export default TweetHeader;
