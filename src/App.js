import "./App.css";
import { useState } from "react";
import Card from "react-bootstrap/Card";

const IMAGES = [
  {
    orderNumber: 1,
    url: "https://cdn.mos.cms.futurecdn.net/a4Bxq6zWEH33k8sS6oUEES.jpg",
    caption: "test text",
  },
];

function App(props) {
  const [images, setImages] = useState(IMAGES);

  return (
  
  );
}

export default App;
