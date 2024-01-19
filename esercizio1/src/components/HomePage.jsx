import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
          },
        }
      );
  
      if (response.ok) {
        let result = await response.json();
        let songs = result.data;
  
        // Puoi fare qualcosa con i risultati qui, ad esempio, mostrare i risultati nella UI
        console.log('Risultati della ricerca:', songs);
      } else {
        console.log('Errore nella ricerca');
      }
    } catch (error) {
      console.error('Errore nella gestione della ricerca:', error);
    }
  };
  const albumCard = (songInfo) => {
    return (
      <Col key={songInfo.id} className="text-center">
        <Link to={`/album_page.html?id=${songInfo.album.id}`}>
          <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" />
        </Link>
        <p>
          <Link to={`/album_page.html?id=${songInfo.album.id}`}>
            Album: "{songInfo.album.title.length < 16
              ? `${songInfo.album.title}`
              : `${songInfo.album.title.substring(0, 16)}...`
            }"<br />
          </Link>
          <Link to={`/artist_page.html?id=${songInfo.artist.id}`}>
            Artist: {songInfo.artist.name}
          </Link>
        </p>
      </Col>
    );
  };

  const handleArtist = async (artistName, domQuerySelector) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
      );
      if (response.ok) {
        let result = await response.json();
        let songInfo = result.data;
        let div = document.querySelector(domQuerySelector);
        div.innerHTML += albumCard(songInfo[0]);
      } else {
        console.log('Errore nella ricerca dell\'artista');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loadRandomArtists = async () => {
    let rockRandomArtists = ['queen', 'u2', 'thepolice', 'eagles', 'thedoors', 'oasis', 'thewho', 'bonjovi'];
    let popRandomArtists = ['maroon5', 'coldplay', 'onerepublic', 'jamesblunt', 'katyperry', 'arianagrande'];
    let hipHopRandomArtists = ['eminem', 'snoopdogg', 'lilwayne', 'drake', 'kanyewest'];

    for (let j = 0; j < rockRandomArtists.length; j++)
      await handleArtist(rockRandomArtists[j], '#rockSection');

    for (let k = 0; k < popRandomArtists.length; k++)
      await handleArtist(popRandomArtists[k], '#popSection');

    for (let l = 0; l < hipHopRandomArtists.length; l++)
      await handleArtist(hipHopRandomArtists[l], '#hipHopSection');
  };

  return (
    <Container fluid>
      <Row>
        {/* Sidebar Vertical */}
        <Col xs={2}>
          <Navbar expand="md" variant="light" bg="light" fixed="left" className="justify-content-between">
            {/* Navbar Brand */}
            <Navbar.Brand href="/index">
              <img
                src="logo/Spotify_Logo.png"
                alt="Spotify_Logo"
                width="131"
                height="40"
              />
            </Navbar.Brand>

            {/* Navbar Toggle Button */}
            <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
            <Navbar.Collapse id="navbarNavAltMarkup">
              {/* Navbar Links */}
              <Nav>
                <ul>
                  <li>
                    <Link to="/index" className="nav-link">
                      <FontAwesomeIcon icon={faHome} />&nbsp; Home
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="nav-link">
                      <FontAwesomeIcon icon={faBookOpen} />&nbsp; Your Library
                    </Link>
                  </li>
                  <li>
                    <InputGroup className="mt-3">
                      <FormControl
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <InputGroup.Append>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={handleSearch}
                        >
                          GO
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>

            {/* Sign Up, Login, Cookie Policy, Privacy */}
            <div className="nav-btn">
              <Button variant="primary" type="button">Sign Up</Button>
              <Button variant="secondary" type="button">Login</Button>
              <Link to="#">Cookie Policy</Link> |
              <Link to="#">Privacy</Link>
            </div>
          </Navbar>
        </Col>

        {/* Main Content */}
        <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
          <Row>
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
              <Link to="#">TRENDING</Link>
              <Link to="#">PODCAST</Link>
              <Link to="#">MOODS AND GENRES</Link>
              <Link to="#">NEW RELEASES</Link>
              <Link to="#">DISCOVER</Link>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="searchResults" style={{ display: 'none' }}>
                <h2>Search Results</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="rock">
                <h2>Rock Classics</h2>
                <Row id="rockSection" className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="pop">
                <h2>Pop Culture</h2>
                <Row id="popSection" className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="hiphop">
                <h2>#HipHop</h2>
                <Row id="hipHopSection" className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Navbar Bottom */}
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Row>
          <Col lg={10} offset-lg={2}>
            <Row>
              <Col className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                <Row>
                  <Link to="#">
                    <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                  </Link>
                  <Link to="#">
                    <img src="playerbuttons/Previous.png" alt="shuffle" />
                  </Link>
                  <Link to="#">
                    <img src="playerbuttons/Play.png" alt="shuffle" />
                  </Link>
                  <Link to="#">
                    <img src="playerbuttons/Next.png" alt="shuffle" />
                  </Link>
                  <Link to="#">
                    <img src="playerbuttons/Repeat.png" alt="shuffle" />
                  </Link>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center playBar py-3">
              <Col xs={8} md={6}>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomePage;