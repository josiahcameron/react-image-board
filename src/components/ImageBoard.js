import ImageForm from "./ImageForm";
import ImageList from "./ImageList";
import { useState } from "react";

const INITIAL_DATA = [
	{
		url: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		caption: "an image",
	},
	{
		url: "https://images.pexels.com/photos/5875844/pexels-photo-5875844.jpeg?auto=compress&cs=tinysrgb&w=1600",
		caption: "Another Image",
	},
	{
		url: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1600",
		caption: "Another Image",
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
			<h1>Image Board</h1>
			<ImageForm addImage={addImage} />
			<ImageList images={images} />
		</div>
	);
}

export default ImageBoard;
