import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";

const PhotoPicker = ({ preview, handleImage }) => {
  const [image, setImage] = useState(require("../image/12.webp"));
  const handleChange=(e)=>{
  
    setImage(e.target.result);
  }
  return (
    <form>
    <label>
      <img src={preview} className="w-32 h-32 rounded-full" alt="profile" />
      <PlusIcon className="absolute z-10 h-6 w-6 ml-24 -mt-8 bg-gray-900 rounded-full text-white" />
      <input
        name="photo"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImage}
      />
    </label>
  </form>
  );
};

export default PhotoPicker;
