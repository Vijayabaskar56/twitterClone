import React from 'react'

const PostTweet = () => {
  return (
    <>
    <div className="h-screen">
  <header className="flex justify-between px-4 py-3 border-b-2 border-solid border-b-neutral700">
    <a href="./screen06.html" rel="noopener noreferrer" className="inline-flex items-center">
      <img src="../../public/images/cancel.svg" alt="user-icon" />
    </a>
    <button className="bg-twitterBlue text-center sm:w-24 md:w-56 lg:w-96 px-6 py-3 rounded-3xl gap-2.5 shadow-btnShadow backdrop-blur-2xl hover:bg-blue-600 disabled:opacity-50">
      post
    </button>
  </header>
  <section className="inline-flex flex-row items-center justify-center gap-3 px-4 py-2">
    <img src="../../public/images/user-avatar.svg" alt="user-avatar" className="inline" />
    <div>
      {/* TODO: add interaction  */}
      <textarea type="text" name="tweerInput" id="tweerInput" cols={30} rows={1} className="bg-black resize-y focus:outline-none caret-twitterBlue text-neutral50 placeholder:text-neutral600" placeholder="What's happening?!" defaultValue={""} />
    </div>
  </section>
  <section className="absolute bottom-0 w-full px-4 py-2 border-t-2 border-t-neutral800">
    <p className="text-neutral-600" id="characteCheck">0/280</p>
  </section>
</div>

    </>
  )
}

export default PostTweet