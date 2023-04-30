import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import moment from "moment";
import {
  FaBookmark,
  FaEye,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  console.log(news);
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card>
      <Card.Header className="d-flex ps-2">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format("YYYY-MM-D")}</small>
          </p>
        </div>
        <div>
          <FaBookmark></FaBookmark> <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}....
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
          <Rating
            readonly
            placeholderRating={rating?.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
