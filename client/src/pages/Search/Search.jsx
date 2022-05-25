import React, { useState } from "react";
import FetchGifsList from "../../components/FetchGifsList/FetchGifsList";
import SearchInput from "../../components/SearchInput/SearchInput";

function Search() {
  const [category, setCategory] = useState("");

  return (
    <div>
      <SearchInput setCategory={setCategory} />
      <FetchGifsList category={category} />
    </div>
  );
}

export default Search;
