import { useEffect, useState } from "react";

export default function PopupImage(props: { image: string }) {
  const [showPopup, setShowPopup] = useState(false);

  const [aspectRatio, setAspectRatio] = useState(1); // Default aspect ratio
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = props.image;

    image.onload = () => {
      const { width, height } = image;
      const ratio = width / height;
      setAspectRatio(ratio);
      setImageLoaded(true);
    };

    return () => {
      // Cleanup
      image.onload = null;
    };
  }, [props.image]);

  return (
    <>
      <div>
        <img src={props.image} onClick={() => setShowPopup(true)} />
      </div>

      {showPopup && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center"
          onClick={() => setShowPopup(false)}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
          <div
            className="relative w-full h-full p-8 "
          >
            <img
              src={props.image}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
