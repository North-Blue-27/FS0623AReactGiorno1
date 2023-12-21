import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = ({ book }) => {
  const [selected, setSelected] = useState(false);

  const handleBookClick = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <Card
        className="mb-4"
        style={{
          height: "100%",
          backgroundColor: "#17192b",
          color: "#781c77",
          position: "relative",
          maxWidth: "18rem",
          cursor: "pointer",
          border: selected ? "2px solid #f44336" : "none",
        }}
        onClick={handleBookClick}
      >
        <div className="overflow-hidden" style={{ height: "300px" }}>
          <Card.Img
            variant="top"
            src={book.img}
            className="img-fluid"
            style={{ height: "100%", objectFit: "fill" }}
          />
        </div>
        <Card.Body className="position-relative">
          <Card.Title>{book.title}</Card.Title>
          <Card.Text
            className="text-white"
            style={{ position: "absolute", bottom: "0", right: "0" }}
          >
            Price: €{book.price}
          </Card.Text>
        </Card.Body>
      </Card>
      {selected && <CommentArea bookId={book.asin} />} {/* Corretto passaggio di book.id */}
    </div>
  );
};

export default SingleBook;