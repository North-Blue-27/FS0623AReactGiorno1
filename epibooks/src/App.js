import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';

function App() {
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleBookSelect = (bookId) => {
    setSelectedBookId(bookId === selectedBookId ? null : bookId);
  };

  return (
    <div className="App" style={{ backgroundColor: '#0f101c' }}>
      <MyNav />
      <Welcome />
      <div style={{ display: 'flex' }}>
        <BookList onSelectBook={handleBookSelect} />
        {selectedBookId && ( // Mostra CommentArea solo se un libro è selezionato
          <CommentArea bookId={selectedBookId} />
        )}
      </div>
      <MyFooter />
    </div>
  );
}

export default App;