// Image form is for user input
import { useState } from "react";
import { nanoid } from "nanoid";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";



function ImageForm({ addImage }) {
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const image = {
      id: nanoid(),
      url,
      caption,
    };

    addImage(image);
    setUrl("");
    setCaption("");
  };
  const handleUrlInput = (event) => {
    setUrl(event.target.value);
  };
  const handleCaptionInput = (event) => {
    setCaption(event.target.value);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="url"
          placeholder="Enter image url"
          className="form-control"
          // This value will go up to the newImage object
          value={url}
          // onChange is an event listener in React that listens for user's input
          // When the element changes, the function setURL runs using the value from this input
          onChange={handleUrlInput}
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Caption</Form.Label>
        <Form.Control
        type="text"
        placeholder="Enter caption for your image here" 
        className="form-control"
        value={caption}
        onChange={handleCaptionInput}
        autoComplete="off"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
    </>
  );
}

export default ImageForm;
