// Image form is for user input
import { useState } from "react";
import { nanoid } from "nanoid";

function ImageForm({ addImages }) {
  const [url, addUrl] = useState("");
  const [caption, addCaption] = useState("");

  const handleAddImage = (event) => {
    event.preventDefault();

    const image = {
      id: nanoid(),
      url,
      caption,
    };
  };
  return (
    <form onSubmit={handleAddImage}>
      <div classname="mb-3">
        <input type="text" name="url" value={url}></input>

        <input type="text" name="caption" value={caption}></input>
      </div>
      <button type="cancel">Cancel</button>
      <button type="submit">Add Image</button>
    </form>
  );
}

export default ImageForm;
