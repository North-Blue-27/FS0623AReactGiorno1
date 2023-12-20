import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
/* import AllTheBooks from  './components/AllTheBooks'; */

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#0f101c' }}>
      <MyNav />
      <Welcome />
      <BookList />
      {/* <AllTheBooks /> */}
      <MyFooter />
    </div>
  );
}

export default App;

