// The visual list of images and captions
function ImageList(image) {
  return (
    <ul>
      <li>
        <div className="container">
          <div className="row">
            <Card
              className="mx-auto shadow p-0 mb-5 bg-body-tertiary rounded-0"
              style={{ width: "max-content", height: "max-content" }}
            >
              <Card.Img variant="top" src={image.url} />
              <Card.Body>
                <Card.Text>{image.caption}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        ;
      </li>
    </ul>
  );
}

export default ImageList;
