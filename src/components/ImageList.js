import { Card } from "react-bootstrap";
import { nanoid } from "nanoid";

function ImageList({ images }) {
	const imagesHTML = images.map((image, index) => (
		<li className="image-card" key={nanoid}>
			<Card>
				<Card.Img variant="top" src={image.url} />
				<Card.Body>
					<Card.Text>{image.caption}</Card.Text>
				</Card.Body>
			</Card>
		</li>
	));
	return (
		<div className="image-list-container flexbox">
			<ul className="image-list">{imagesHTML}</ul>
		</div>
	);
}
export default ImageList;
