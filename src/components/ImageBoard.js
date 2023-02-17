import ImageForm from "./ImageForm";
import ImageList from "./ImageList";
import { useState } from "react";

const INITIAL_DATA = [
  {
    url: "www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.cntraveler.com%2Fphotos%2F571945e380cf3e034f974b7a%2Fmaster%2Fw_2048%2Ch_1536%2Cc_limit%2Fwaterfalls-Skogafoss-GettyImages-94985528.jpg&imgrefurl=https%3A%2F%2Fwww.cntraveler.com%2Fgalleries%2F2013-04-29%2Fphotos-amazing-waterfalls-around-the-world&tbnid=tcuxmxwwFuQPhM&vet=12ahUKEwjM1o_9wvT8AhWQr3IEHeiEANIQMygCegUIARDiAQ..i&docid=29jvEOKocHanFM&w=2048&h=1536&q=waterfalls&ved=2ahUKEwjM1o_9wvT8AhWQr3IEHeiEANIQMygCegUIARDiAQ",
    caption: "an image",
  },
];

function ImageBoard() {
  const [images, setImages] = useState(INITIAL_DATA);

  //   defines a method that takes an image and use it to update the images currently onstate with the image board component; updates using set image, when called it takes the images for it; spreads out image array and adds on the new image
  const addImage = (image) => {
    setImages([...images, image]);
  };

  return (
    <div>
      <ImageForm addImage={addImage} />
      <ImageList images={images} />
    </div>
  );
}

export default ImageBoard;
