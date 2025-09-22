import React from "react";

const WatchMovies = () => {
  return (
    <a
      href=""
      className="w-72 h-72 m-3 overflow-hidden rounded-xl text-white relative"
    >
      <img
        className="w-full h-full"
        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/svXVRoRSu6zzFtCzkRsjZS7Lqpd.jpg"
        alt="moviedetails"
      />
      <div className="absolute top-0 w-full h-full p-2.5 flex justify-end flex-col">
        <h3 className="text-lg text-white">Nobody 2</h3>
        <div className="justify-between text-sm font-bold mx-2 my-0 text-white flex items-center">
          <p>13/08/2025</p>
          <p>
            73%{""} <img className="w-8 h-8 ml-1.5" src="/rating.jpg" />
          </p>
        </div>
        <p className="">Action Movie</p>
      </div>
    </a>
  );
};

export default WatchMovies;
