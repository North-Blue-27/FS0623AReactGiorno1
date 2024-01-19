import React, { useEffect } from 'react';

const AlbumPage = () => {
  const albumCard = (songInfo) => {
    return (
      <div className="col-sm-auto col-md-auto text-center mb-5">
        <a href="#">
          <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" />
        </a>
        <p>
          <a href="#">
            Track: "
            {songInfo.title.length < 16
              ? `${songInfo.title}`
              : `${songInfo.title.substring(0, 16)}...`}
            "
          </a>
          <br />
          <a href="#">
            Album: "
            {songInfo.album.title.length < 16
              ? `${songInfo.album.title}`
              : `${songInfo.album.title.substring(0, 16)}...`}
            "
          </a>
        </p>
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const albumId = new URLSearchParams(document.location.search).get('id');
      const headers = new Headers({
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20',
      });

      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`,
          {
            method: 'GET',
            headers,
          }
        );

        if (response.ok) {
          const album = await response.json();

          const titleMain = document.querySelector('.titleMain');
          titleMain.innerHTML = album.title;

          const followers = document.querySelector('#followers');
          followers.innerText = `${album.fans} followers`;

          const tracksResponse = await fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}/tracks`,
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

export default AlbumPage;