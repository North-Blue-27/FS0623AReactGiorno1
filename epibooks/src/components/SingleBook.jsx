import React from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book, onSelectBook, selectedBookId }) => {
  const handleBookClick = () => {
    if (selectedBookId === book.asin) {
      onSelectBook(null); // Deseleziona il libro se viene cliccato nuovamente
    } else {
      onSelectBook(book.asin);
    }
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
          border: selectedBookId === book.asin ? "2px solid #f44336" : "none", // Applica il bordo solo se è selezionato
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
    </div>
  );
};

export default SingleBook;