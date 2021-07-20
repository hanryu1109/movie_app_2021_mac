import React from 'react';
import PropTypes from 'prop-types';

function Music( { album, artist }) {
    return (
        <div class = "music__data">
            <h3 class="music_album">{album}</h3>
            <h5 class="music__artist">{artist}</h5>
        </div>
    );
}

Music.propTypes = {
    album : PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
 };

export default Music;