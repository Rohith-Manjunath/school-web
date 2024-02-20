import { useState } from "react";
import News from "./News";
import Events from "./Events";

const NewsAndEvents = () => {
  const [news, setNews] = useState(true);

  return (
    <div className="m-10 mt-[120px] mb-[120px] border-white-800 border-4 shadow-lg shadow-secondary ring ring-offset-15 rounded-md">
      <div className=" w-[100%] p-15">
        <div className="grid grid-cols-2 ">
          <button
            onClick={() => setNews(true)}
            className={`${
              news ? "bg-primary" : "bg-white"
            } font-semibold tracking-wider text-2xl text-textSecondary  p-3 transition-all duration-800 border-t-white border-4${
              news &&
              "  border-t-white border-r-white border-l-primary border-b-primary border-4"
            } ${!news && "border-b-white-800 border-r-primary border-4"}`}
          >
            News
          </button>
          <button
            onClick={() => setNews(false)}
            className={`${
              !news ? "bg-primary" : "bg-white"
            } font-semibold tracking-wider text-2xl text-textSecondary p-3 transition-all border-t-white border-4 ${
              !news &&
              "border-l-white  border-t-white border-b-primary border-r-primary border-4"
            } ${news && "border-b-white-800 border-l-primary border-4"}`}
          >
            Events
          </button>
        </div>

        {news ? <News /> : <Events />}
      </div>
    </div>
  );
};

export default NewsAndEvents;
