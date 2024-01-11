import React, { useState } from "react";
import SingleBook from "../components/SingleBook";
import { Row, Col, Container } from "react-bootstrap";
import CategoryFilter from "../components/CategoryFilter";
import horrorData from "../data/horror.json";
import fantasyData from "../data/fantasy.json";
import thrillerData from "../data/history.json";
import romanceData from "../data/romance.json";
import scifiData from "../data/scifi.json";

const BookList = ({ onSelectBook }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCategory, setCurrentCategory] = useState("all");

  const getSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const getCategoryBooks = () => {
    switch (currentCategory) {
      case "horror":
        return horrorData;
      case "fantasy":
        return fantasyData;
      case "thriller":
        return thrillerData;
      case "romance":
        return romanceData;
      case "scifi":
        return scifiData;
      default:
        return [
          ...horrorData,
          ...fantasyData,
          ...thrillerData,
          ...romanceData,
          ...scifiData,
        ].flat();
    }
  };

  const allBooks = getCategoryBooks();

  const filteredBooks = Array.from(
    new Set(
      allBooks
        .filter((book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((book) => book.title)
    )
  ).map((title) => allBooks.find((book) => book.title === title));

  return (
    <Container style={{ padding: "20px 20px" }}>
      <Row style={{ marginBottom: "30px" }} className="align-items-center">
        <Col xs={12} sm={6} xl={5}>
          <input
            type="text"
            placeholder="Search in our catalog ..."
            value={searchQuery}
            onChange={(e) => getSearchQuery(e.target.value)}
            className="form-control"
          />
        </Col>
        <Col xs={1} sm={6} xl={7} className="mt-3 mt-sm-0 text-end">
          <CategoryFilter onCategoryChange={handleCategoryChange} />
        </Col>
      </Row>
      <Row xs={1} md={3} lg={4} xl={5} className="g-4">
        {filteredBooks.map((book, index) => (
          <Col key={index}>
            <SingleBook book={book} onSelectBook={onSelectBook} /> {/* Passa onSelectBook a SingleBook */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;



