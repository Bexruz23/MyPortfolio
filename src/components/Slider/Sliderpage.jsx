export default function Sliderpage() {
  return (
    <div className="container flex">
      <div
        className="relative"
        style={{
          height: "400px",
          width: "1920px",
          backgroundImage:
            'url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/e3h0knvtz4qPg9dwYdWynALrW9s.jpg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pt-16 pl-12">
          {" "}
          <h1 className="text-white text-5xl font-bold ">Welcome.</h1>
          <h3 className="text-white text-3xl font-bold">
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>

        <div className="mt-16 p-10">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative h-[46px] m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-3xl border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search for a movie, tv show, person......"
              aria-label="Search"
              aria-describedby="button-addon3"
            />

            <button
              className="relative z-[44] -ml-[100px]  rounded-3xl border-2 border-transparent px-6 py-2 text-xs font-medium uppercase  transition duration-150 ease-in-out bg-gradient-to-r from-green-500 to-green-600 hover:from-pink-500 hover:to-yellow-500 text-white focus:outline-none "
              type="button"
              id="button-addon3"
              data-te-ripple-init
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
