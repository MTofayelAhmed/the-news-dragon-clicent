import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const detailNews = useLoaderData();
  const { _id, title, details, image_url, category_id} = detailNews;

  console.log("this is detail news", detailNews);
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
       {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>

        <Button variant="danger">All news in this category</Button>
        </Link>
       
      </Card.Body>
    </Card>
  );
};

export default News;
