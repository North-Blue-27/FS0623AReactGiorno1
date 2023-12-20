import React, { useState } from 'react';
import SingleBook from '../components/SingleBook';
import { Row, Col, Container } from 'react-bootstrap';
import CategoryFilter from '../components/CategoryFilter'; // Importa il componente CategoryFilter
import horrorData from '../data/horror.json';
import fantasyData from '../data/fantasy.json';
import thrillerData from '../data/history.json';
import romanceData from '../data/romance.json';
import scifiData from '../data/scifi.json';

const BookList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCategory, setCurrentCategory] = useState('all');

  const getSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const getCategoryBooks = () => {
    switch (currentCategory) {
      case 'horror':
        return horrorData;
      case 'fantasy':
        return fantasyData;
      case 'thriller':
        return thrillerData;
      case 'romance':
        return romanceData;
      case 'scifi':
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

  const filteredBooks = Array.from(new Set(
    allBooks.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    ).map((book) => book.title)
  )).map((title) => allBooks.find((book) => book.title === title));

  return (
    <Container style={{ padding: '20px 20px' }}>
      <Row style={{  marginBottom: '30px' }}>
        <Col>
          <input
            
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => getSearchQuery(e.target.value)}
            className="mx-auto"
          />
        </Col>
        <Col xs="auto" style={{ position: 'relative' }}>
          <CategoryFilter onCategoryChange={handleCategoryChange} />
        </Col>
      </Row>
      <div>
        <Row xs={1} md={3} lg={4} xl={5} className="g-4">
          {filteredBooks.map((book, index) => (
            <Col key={index}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default BookList;
