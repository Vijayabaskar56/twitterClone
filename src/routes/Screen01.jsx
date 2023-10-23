import React from 'react'

const Screen01 = () => {
  return (
    <>
    <section className="md:flex inline-flex md:justify-center">
  <div className="h-screen self-stretch px-3.5 py-2.5 bg-black md:rounded-2xl flex-col justify-start items-start gap-3 inline-flex">
    <div className=" flex-col justify-center items-start gap-3 flex">
      <div className="self-stretch px-4 py-3 justify-start items-center gap-5 inline-flex">
        <a href="../index.html" rel="noopener noreferrer" className="inline-flex items-center">
          <button>
            <img src="../../public/images/signup-x.svg" alt srcSet />
          </button>
        </a>
        <div className="text-neutral50 text-base font-bold">Step 1 of 4</div>
      </div>
    </div>
    <section className="h-5/6 self-stretch flex-col justify-start">
      <h1 className="text-stone-50 text-2xl font-bold pb-5">
        Create your account
      </h1>
      <div className="flex-col justify-center items-center gap-8">
        <section action className="inline-flex flex-col gap-8 justify-between">
          <div className="relative">
            <input type="text" id="Name" className="block px-3 pb-2.5 pt-4 w-full text-sm outline-none text-gray-900 bg-black rounded-md border-2 border-solid border-neutral500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer/name" placeholder=" " />
            <label htmlFor="Name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black px-2 peer-focus/name:px-2 peer-focus/name:text-blue-600 peer-focus/name:dark:text-blue-500 peer-placeholder-shown/name:scale-100 peer-placeholder-shown/name:-translate-y-1/2 peer-placeholder-shown/name:top-1/2 peer-focus/name:top-2 peer-focus/name:scale-75 peer-focus/name:-translate-y-4 left-1">Name</label>
          </div>
          <div className="relative">
            <input type="email" id="email" className="block px-3 pb-2.5 pt-4 w-full text-sm outline-none text-gray-900 bg-black rounded-md border-2 border-solid border-neutral500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer/email" placeholder=" " />
            <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black px-2 peer-focus/email:px-2 peer-focus/email:text-blue-600 peer-focus/email:dark:text-blue-500 peer-placeholder-shown/email:scale-100 peer-placeholder-shown/email:-translate-y-1/2 peer-placeholder-shown/email:top-1/2 peer-focus/email:top-2 peer-focus/email:scale-75 peer-focus/email:-translate-y-4 left-1">Email</label>
          </div>
          <section className="flex-col items-start gap-2">
            <h2 className="text-sm font-bold">Date of birth</h2>
            <p className="text-Secondary text-sm">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
          </section>
          <section className="flex justify-evenly">
            <div className="flex items-start w-full self-stretch gap-3">
              {/* Month */}
              <fieldset className="group w-6/12 pt-2 pb-4 px-3 border border-neutral500 rounded-[4px] flex items-center focus-within:outline-none focus-within:border-twitterBlue focus-within:ring-twitterBlue">
                <legend className="px-1 text-neutral500 text-xs font-medium leading-normal group-focus-within:text-twitterBlue">
                  Month
                </legend>
                <select name="month-dropdown" className="w-full bg-transparent focus:outline-none">
                  <option value selected disabled />
                  <option value="Januaury">Januaury</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </fieldset>
              <fieldset className="group w-3/12 pt-2 pb-4 px-3 border border-neutral500 rounded-[4px] flex items-center focus-within:outline-none focus-within:border-twitterBlue focus-within:ring-twitterBlue">
                <legend className="px-1 text-neutral500 text-xs font-medium leading-normal group-focus-within:text-twitterBlue">
                  Day
                </legend>
                <select name="day-dropdown" className="w-full bg-transparent focus:outline-none">
                  <option value selected disabled />
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                  <option value={13}>13</option>
                  <option value={14}>14</option>
                  <option value={15}>15</option>
                  <option value={16}>16</option>
                  <option value={17}>17</option>
                  <option value={18}>18</option>
                  <option value={19}>19</option>
                  <option value={20}>20</option>
                  <option value={21}>21</option>
                  <option value={22}>22</option>
                  <option value={23}>23</option>
                  <option value={24}>24</option>
                  <option value={25}>25</option>
                  <option value={26}>26</option>
                  <option value={27}>27</option>
                  <option value={28}>28</option>
                  <option value={29}>29</option>
                  <option value={30}>30</option>
                  <option value={31}>31</option>
                </select>
              </fieldset>
              <fieldset className="group w-3/12 pt-2 pb-4 px-3 border border-neutral500 rounded-[4px] flex items-center focus-within:outline-none focus-within:border-twitterBlue focus-within:ring-twitterBlue">
                <legend className="px-1 text-neutral500 text-xs font-medium leading-normal group-focus-within:text-twitterBlue">
                  Year
                </legend>
                <select name="year-dropdown" className="w-full bg-transparent focus:outline-none">
                  <option value selected disabled />
                  <option value={2023}>2023</option>
                  <option value={2022}>2022</option>
                  <option value={2021}>2021</option>
                  <option value={2020}>2020</option>
                  <option value={2019}>2019</option>
                  <option value={2018}>2018</option>
                  <option value={2017}>2017</option>
                  <option value={2016}>2016</option>
                  <option value={2015}>2015</option>
                  <option value={2014}>2014</option>
                  <option value={2013}>2013</option>
                  <option value={2012}>2012</option>
                  <option value={2011}>2011</option>
                  <option value={2010}>2010</option>
                  <option value={2009}>2009</option>
                  <option value={2008}>2008</option>
                  <option value={2007}>2007</option>
                  <option value={2006}>2006</option>
                  <option value={2005}>2005</option>
                  <option value={2004}>2004</option>
                  <option value={2003}>2003</option>
                  <option value={2002}>2002</option>
                  <option value={2001}>2001</option>
                  <option value={2000}>2000</option>
                  <option value={1999}>1999</option>
                  <option value={1998}>1998</option>
                  <option value={1997}>1997</option>
                  <option value={1996}>1996</option>
                  <option value={1995}>1995</option>
                  <option value={1994}>1994</option>
                  <option value={1993}>1993</option>
                  <option value={1992}>1992</option>
                  <option value={1991}>1991</option>
                  <option value={1990}>1990</option>
                </select>
              </fieldset>
            </div>
          </section>
          <div className="m-auto h-2/6 pt-28">
            <a href="./screen03.html">
              <button className="bg-neutral50 font-bold text-neutral1000 w-w24 rounded-3xl text-center shadow-btnShadow backdrop-blur-2xl gap-2.5 px-6 py-2 hover:bg-neutral200 disabled:opacity-50 m-auto">
                Create account
              </button>
            </a>
          </div>
        </section>
      </div>
    </section>
  </div>
</section>

    </>
  )
}

export default Screen01