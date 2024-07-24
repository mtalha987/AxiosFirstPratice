"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const [images, setImages] = useState([]);
  const apiCall = async () => {
    try {
      let response = await axios.get("https://picsum.photos/v2/list");

      const data = response.data;
      setImages(data);

      console.log(images);
    } catch (error) {
      console.error("API Error");
    }
  };

  return (
    <>
      <h1 className="text-center text-black font-semibold text-4xl mt-6">
        API Axios
      </h1>

      <button
        className="px-2 py-2 rounded bg-slate-700 text-white mt-5 flex  mx-auto"
        onClick={apiCall}
      >
        Get images from API
      </button>

      <div className="mx-auto mt-10 flex flex-wrap justify-center">
        {images.map((e, i) => {
          return (
            <img
              key={i}
              src={e.download_url}
              alt={e.author}
              className=" inline-block mt-5 ml-4"
              width={300}
              height={300}
            />
          );
        })}
      </div>
    </>
  );
};

export default page;
