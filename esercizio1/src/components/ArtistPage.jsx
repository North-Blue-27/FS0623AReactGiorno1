import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArtistPage = () => {
  const albumCard = (songInfo) => {
    return (
      <div className="col-sm-auto col-md-auto text-center mb-5">
        <Link to={`/album_page.html?id=${songInfo.album.id}`}>
          <img
            className="img-fluid"
            src={songInfo.album.cover_medium}
            alt="1"
          />
        </Link>
        <p>
          <Link to="#">
            Track: "
            {songInfo.title.length < 16
              ? `${songInfo.title}`
              : `${songInfo.title.substring(0, 16)}...`}
            "
          </Link>
          <br />
          <Link to={`/album_page.html?id=${songInfo.album.id}`}>
            Album: "
            {songInfo.album.title.length < 16
              ? `${songInfo.album.title}`
              : `${songInfo.album.title.substring(0, 16)}...`}
            "
          </Link>
        </p>
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const artistId = new URLSearchParams(document.location.search).get('id');
      const headers = new Headers({
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20',
      });

      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`,
          {
            method: 'GET',
            headers,
          }
        );

        if (response.ok) {
          const artist = await response.json();

          const playButton = document.querySelector('#playButton');
          playButton.classList.remove('d-none');
          playButton.classList.add('d-inline');

          const followButton = document.querySelector('#followButton');
          followButton.classList.remove('d-none');
          followButton.classList.add('d-inline');

          const titleMain = document.querySelector('.titleMain');
          titleMain.innerHTML = artist.name;

          const followers = document.querySelector('#followers');
          followers.innerText = `${artist.nb_fan} followers`;

          const tracksResponse = await fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist.name}`,
            {
              method: 'GET',
              headers,
            }
          );

          if (tracksResponse.ok) {
            const tracklist = await tracksResponse.json();
            for (let i = 0; i < tracklist.data.length; i++) {
              const apiLoaded = document.querySelector('#apiLoaded');
              apiLoaded.innerHTML += albumCard(tracklist.data[i]);
            }
          }
        } else {
          document.querySelector('#apiLoaded').innerHTML = 'NOT OK' + (await response.text());
        }
      } catch (exception) {
        document.querySelector('#apiLoaded').innerHTML = exception;
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* SIDEBAR VERTICAL */}
        <div className="col-2">
          {/* ... (Resto del codice della sidebar) */}
        </div>
        {/* END SIDEBAR VERTICAL */}

        {/* MAIN */}
        <div className="col-12 col-md-9 offset-md-3 mainPage">
          {/* ... (Resto del codice MAIN) */}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;