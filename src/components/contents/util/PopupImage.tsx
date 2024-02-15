import { useEffect, useState } from "react";
import "./PopupImage.css"

export default function PopupImage(props: { image: string }) {
  const [showPopup, setShowPopup] = useState(false);

  const videoExtensions = ["mp4"];

  const isVideo = videoExtensions.reduce((result, current) => {
    if (result || props.image.includes(current)) {
      return true;
    }
    return false;
  }, false);

  return (
    <>
      <div className=" flex items-center justify-center hover:cursor-pointer">
        {isVideo && (
          <>
            <video src={props.image} onClick={() => setShowPopup(true)}></video>
          </>
        )}
        {!isVideo && (
          <>
            <img src={props.image} onClick={() => setShowPopup(true)} />
          </>
        )}
      </div>

      {showPopup && (
        <div
          className="z-50 fixed top-0 left-0 w-screen h-screen flex items-center justify-center"
          onClick={() => setShowPopup(false)}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
          <div className="absolute w-full h-full pt-40 p-8 z-50 flex items-center justify-center ">
            {isVideo && (
              <>
                <video id="realvideo" width="60%" controls style={{ objectFit: "fill" }}>
                  <source src={props.image} type="video/mp4"></source>
                </video>
              </>
            )}
            {!isVideo && (
              <>
                <img
                  src={props.image}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
