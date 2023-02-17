// Image form is for user input
import { useState } from "react";
import { nanoid } from "nanoid";

function ImageForm({ addImage }) {
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newImage = {
      url,
      caption,
    };

    // This is called into the ImageBoard
    addImage(newImage);
    setUrl("");
    setCaption("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">URL</label>
      <input
        type="url"
        name="url"
        // This value will go up to the newImage object
        value={url}
        // onChange is an event listener in React that listens for user's input
        // When the element changes, the function setURL runs using the value from this input

        onChange={(e) => setUrl(e.target.value)}
      />
      <label htmlFor="caption">caption</label>
      <input
        type="text"
        name="caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit">saveimage</button>
    </form>
  );
}

// function ImageForm({ addImages }) {
//   const [url, setUrl] = useState("");
//   const [caption, setCaption] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const image = {
//       id: nanoid(),
//       url,
//       caption,
//     };

//     addImage(image);
//     setUrl("");
//     setCaption("");
//   };
//   const handleUrlInput = (event) => {
//     setUrl(event.target.value);
//   };
//   const handleCaptionInput = (event) => {
//     setCaption(event.target.value);
//   };
//   return (
//     <form onSubmit={handleSubmit} className="dropdown-menu p-4">
//       <div className="form-group">
//         <input
//           type="url"
//           className="form-control"
//           value={url}
//           placeholder="Image URL"
//           onChange={handleUrlInput}
//           autoComplete="off"
//         ></input>
//       </div>
//       <div className="form-group">
//         <input
//           type="caption"
//           className="form-control"
//           value={caption}
//           placeholder="Image Caption"
//           onChange={handleCaptionInput}
//           autoComplete="off"
//         ></input>
//       </div>
//       <button type="submit" className="btn btn-primary">
//         ADD IMAGE
//       </button>
//     </form>
//   );
// }

export default ImageForm;
