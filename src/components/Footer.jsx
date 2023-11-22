export default function Footer() {
  return (
    <div className="bg-main-bg">
      <div className="w-[90%] m-auto pt-[50px] pb-[50px] flex">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt=""
          className="-mr-[50px] w-[40%] h-[120px] mt-6 mb-10"
        />
        {/* <div className="border-solid border-2  bg-white text-[1.3rem] rounded w-48 inline-block text-center ">
          <a className="text-join-color" href="#">
            Join the community
          </a>
        </div> */}
        <div className="w-[56%]  pt-[50px] pb-[50px] text-white flex">
          <div className="mr-[40px]">
            <h3 className="text-lg font-bold pb-2">THE BASICS</h3>
            <ul>
              <li>About TMDB</li>
              <li>Contact Us</li>
              <li>Support Forums</li>
              <li>API</li>
              <li>System Status</li>
            </ul>
          </div>
          <div className="mr-[40px]">
            <h3 className="text-lg font-bold pb-2">GET INVOLVED</h3>
            <ul>
              <li>Contribution Bible</li>
              <li>Add New Movie</li>
              <li>Add New TV Show</li>
            </ul>
          </div>
          <div className="mr-[40px]">
            <h3 className="text-lg font-bold pb-2">COMMUNITY</h3>
            <ul>
              <li>Guidelines</li>
              <li>Discussions</li>
              <li>Leaderboard</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="mr-[40px]">
            <h3 className="text-lg font-bold pb-2">LEGAL</h3>
            <ul>
              <li>Terms of Use</li>
              <li>API Terms of Use</li>
              <li>Privacy Policy</li>
              <li>DMCA Takedown Request</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
