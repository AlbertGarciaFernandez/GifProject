import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";

function Home() {
  const [imageIds, setImageIds] = useState();
  const loadImages = async () => {
    try {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImageIds(data);
      console.log(data);
    } catch {}
  };
  useEffect(() => {
    loadImages();
  }, []);
  return (
    <div>
      <h1 className="title">GifOne</h1>
      <div className="gallery">
        {imageIds &&
          imageIds.map((imageId, index) => (
            <Image
              key={index}
              cloudName="gifone"
              publicId={imageId}
              width="300"
              crop="scale"
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
