import React from "react";
import useApi from "../../hooks/useApi";
import GifItem from "../GifItem/GifItem";

import "./FetchGifsList.scss";

const FetchGifsList = ({ category }) => {
  const url = ` https://api.giphy.com/v1/gifs/search?api_key=DzHLAscoCk7TDUB84JYm7UUWxXM1q4Ci&q=${category}&limit=25`;
  const { loading, data } = useApi(url);

  return (
    <div className="container-gifs">
      {loading
        ? data.map((img) => (
            <GifItem
              key={img.id}
              title={img.title}
              url={img.images.downsized_medium.url}
            />
          ))
        : ""}
    </div>
  );
};

export default FetchGifsList;
