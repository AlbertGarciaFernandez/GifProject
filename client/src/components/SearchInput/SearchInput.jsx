import React, { useState } from "react";

const SearchInput = ({ setCategory }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const searchGif = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      return;
    }
    setError(false);
    setCategory(value);
    setValue("");
    //console.log("enter form");
  };

  return (
    <>
      <form onSubmit={searchGif} className="form-inline my-2 my-lg-0">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
          className="form-control mr-sm-2"
          value={value}
        />
      </form>
      {error ? <p className="error">this field can not be blank</p> : ""}
    </>
  );
};

export default SearchInput;
