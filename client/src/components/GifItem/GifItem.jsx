import React from "react";

const GifItem = ({ title, url }) => {
  return (
    <div>
      <img src={url} alt={title} />
    </div>
  );
};

export default GifItem;
