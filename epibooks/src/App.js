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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <BookList onSelectBook={handleBookSelect} />
          </div>
          <div className="col-md-3" style={{ maxHeight: '100vh', overflowY: 'auto', wordWrap: 'break-word' }}>
            {selectedBookId && (
              <CommentArea bookId={selectedBookId} />
            )}
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  );
}

export default App;