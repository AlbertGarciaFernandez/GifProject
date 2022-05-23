import React, { useState } from "react";
import Axios from "axios";

function Upload() {
  const [imageSelected, setImageSelected] = useState("");
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "dev_setups");

    Axios.post(
      "https://api.cloudinary.com/v1_1/gifone/image/upload",
      formData
    ).then((response) => console.log(response));
  };
  return (
    <div>
      <input
        type="file"
        onChange={(event) => setImageSelected(event.target.files[0])}
      />
      <button onClick={uploadImage}>Upload</button>
    </div>
  );
}

export default Upload;
