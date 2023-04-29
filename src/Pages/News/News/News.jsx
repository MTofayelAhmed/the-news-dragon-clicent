import React from "react";
import { Button, Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();

  const { _id, title, details, image_url } = news;
  return (
    <Card>
    <Card.Img variant="top" src={image_url} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  );
};

export default News;
