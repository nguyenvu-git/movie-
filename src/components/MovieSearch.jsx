import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

export default function MovieSearch({data,title}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");
  const handleTrailer = async (id) => {
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      console.log(data);
      setTrailerKey(data.results[0].key);
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="text-white p-10">
        <h1 className="text-[24px] font-medium">{title}</h1>
           <div className="flex flex-wrap gap-20 mt-10">
                {data && data.map((item)=>(
                    <div
                key={item.id}
                onClick={() => handleTrailer(item.id)}
                className="w-[20%] h-[20%] relative group cursor-pointer"
              >
                <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full">
                  <img
                    src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                  <p className="uppercase absolute bottom-2 pl-2 pb-0.5 font-medium text-[14px]">
                    {item.title}
                  </p>
                </div>
              </div>
                ))}
           </div>
      </div>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <YouTube videoId={trailerKey} opts={opts} />
        </Modal>
    </>
  );
}
