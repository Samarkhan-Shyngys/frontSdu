import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";

const PhotoPicker=()=>{
    const [image, setImage] = useState(require("../image/12.webp"));
  function handleChange(e) {
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setImage(e.target.result);
      };
    }
  }
  return(
    <div>
    <label>
      <img src={image} className="w-32 h-32 rounded-full" alt="profile" />
      <PlusIcon className="absolute z-10 h-6 w-6 ml-24 -mt-8 bg-gray-900 rounded-full text-white" />
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      ></input>
    </label>
  </div>
  );

}

export default PhotoPicker;