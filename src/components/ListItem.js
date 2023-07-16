import React, { useState, useEffect } from 'react';
import './List.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

function ListItem(props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const getFormattedSongDuration = (duration) => {
    if (props.track.duration == null) {
      return '';
    }
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration / 1000) % 60);
    let secondsString = seconds.toString();
    if (seconds < 10) {
      secondsString = '0' + secondsString;
    }

    return minutes.toString() + ':' + secondsString;
  };

  const handlePopupClick = () => {
    window.open(props.track.link, '_blank');
    setIsPopupVisible(false);
  };

  useEffect(() => {
    let timer;
    if (isPopupVisible) {
      timer = setTimeout(() => {
        setIsPopupVisible(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isPopupVisible]);

  return (
    <div className="ListItem">
      <div className="number">{props.number}.</div>
      <img className="box" src={props.track.picture} alt="" />
      <div className="info">
        <div className="songName">{props.track.name}</div>
        <div className="artist">
          {props.track.explicit && <span className="explicit">E</span>}
          {props.track.artist}
        </div>
      </div>
      <div className="duration">{getFormattedSongDuration(props.track.duration)}</div>
      <div className="ellipsis" onClick={() => setIsPopupVisible(!isPopupVisible)}>
        <FontAwesomeIcon icon={faEllipsisH} />
        {isPopupVisible && (
          <div className="popup" onClick={handlePopupClick}>
            <span className="popupText">Open With Spotify</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListItem;
