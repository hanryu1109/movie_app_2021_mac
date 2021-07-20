import React from 'react';
import axios from 'axios';
import Music from './Music';

class App extends React.Component {

  state = {
    isLoading: true,
    musics: [],
  };
  
  getMusics = async() => {
      const musics = await axios.get('https://ws.audioscrobbler.com/2.0/?method=album.search&album=bts&api_key=cc0c40005535fde9039f0a38b2631bf0&format=json');
      console.log(musics);
      console.log(musics.data);
      console.log(musics.data.results);
      console.log(musics.data.results.albummatches);
  }

  componentDidMount() {
    this.getMusics();
  }

  render() {  
    const { isLoading } = this.state;
    return (
        <div>{isLoading ? "Loading" : "We are ready"}</div>
    //   <section class="container">
    //     { isLoading ? (
    //       <div class = "loader">
    //         <span class = "loader__text"> 'Loading...' </span>
    //       </div>
    //       ) : (
    //       <div class="music"> 
    //         {music.map(music => ( 
    //           <Music
    //             key = {music.album}
    //             album = {music.album}
    //             artist = {music.artist}
    //           /> 
    //         ))} 
    //         </div>
    //     )}
    //   </section>
    );
  }
}

export default App;