import ImageBoard from "./components/ImageBoard";

function App() {
  return <ImageBoard />;
}

export default App;

// import "./App.css";
// import { useState } from "react";

// import ImageList from "./components/ImageList";
// import ImageForm from "./components/ImageForm";

// // creates an array of objects
// const IMAGES = [{ id: 1, url: "", caption: "" }];

// // App() renders the other components and connects their data with props
// function App(props) {
//   const [images, setImages] = useState(IMAGES);

//   // Puts our images into pre-defined HTML template by ImageList function
//   const imagesHTML = images.map((image) => (
//     <ImageList key={image.id} image={image} />
//   ));

//   // Updates array with new objects
//   const addImage = (image) => {
//     setImages([...images, image]);
//   };

//   return (
//     <div className="container">
//       <div className="row"></div>
//     </div>
//   );
// }

// export default App;
