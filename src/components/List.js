import React, { useState, useEffect } from 'react';
import './List.css'
import ListItem from './ListItem';
import axios from 'axios';

const PORT = 'http://localhost:4000'

function List(props) {  
  const [songList, setSongList] = useState([])
  const [artistList, setArtistList] = useState([])
  const [recList, setRecList] = useState([])

  const GetUserInfo = async (searchQuery, offset) => {
    console.log("Making API Call")
    console.log(props.token)

    const response = await axios.get(`${PORT}/ask-spotify`, {
      params: {
        search_query: searchQuery,
        access_token: props.token,
        time_range: props.searchLength,
        offset: offset
      }
    });

    return response.data.message;
  };

  const UnwrapSpotifyData = (items, itemType) => {
    try {
      if (itemType === 'artists') {
        return items.map(artist => (
          { name: artist.name, picture: artist.images[0].url, link: artist.external_urls.spotify }
        ))
      }

      return items.map(track => (
        { name: track.name, artist: track.artists[0].name, picture: track.album.images[0].url, explicit: track.explicit, duration: track.duration_ms, link: track.external_urls.spotify }
      ))
    } catch (error) {
      console.log(error.message)
    }
  }

  const GetRecommendations = async (iters = 0) => {
    const MAX_ITERATIONS = 3
    if (songList.length === 0 || iters >= MAX_ITERATIONS) { return }

    try {
      props.setIsLoading(true);

      const currSongList = songList.map(song => `${song.name}--${song.artist}`).join(',');

      const response = await axios.get(`${PORT}/ask-open-ai`, {
        params: {
          prompt: `You are a music recommendation service used to give recommendations to users after being given their most listened to songs. 
          Your task is to suggest 25 songs similar to the 100 songs that the user has been listening to the most.
          Your suggestions should include music of similar genres and ideally feature songs by similar artists that the user has been listening to.
          
          Here is the list of 100 songs that the user has been listenign to the most: 
          ${currSongList}
          
          Please omit any introductions and format your respond as a simple list of songs separated by hashes.
          Sample response:
          "song1--artist1#song2--artist2#song3--artist3#....."
          Do NOT provide a numbered list.`
        }
      })

      console.log(response.data.message)

      const suggestedSongsRawList = response.data.message.split('#')

      console.log(suggestedSongsRawList)

      for (const song of suggestedSongsRawList) {
        const response = await axios.get(`${PORT}/search-spotify`, {
          params: {
            search_query: song,
            access_token: props.token
          }
        })

        const track = response.data.message
        const songItem = { name: track.name, artist: track.artists[0].name, picture: track.album.images[0].url, duration: track.duration_ms, link: track.external_urls.spotify };
        setRecList(prevList => [...prevList, songItem]);

      }

      props.setIsLoading(false);


    } catch (error) {
      console.log(error.message)
      if (recList.length === 0) {
        GetRecommendations(iters + 1)
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        props.setIsLoading(true);
  
        const first50TracksResponse = await GetUserInfo('tracks', 0);
        const last50TracksResponse = await GetUserInfo('tracks', 49);
        const first50ArtistsResponse = await GetUserInfo('artists', 0);
        const last50ArtistsResponse = await GetUserInfo('artists', 49);

        const first50Tracks = UnwrapSpotifyData(first50TracksResponse, 'tracks');
        const last50Tracks = UnwrapSpotifyData(last50TracksResponse, 'tracks').slice(1);
        const first50Artists = UnwrapSpotifyData(first50ArtistsResponse, 'artists');
        const last50Artists = UnwrapSpotifyData(last50ArtistsResponse, 'artists').slice(1);

        setSongList([...first50Tracks, ...last50Tracks]);
        setArtistList([...first50Artists, ...last50Artists]);

        props.setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state or display an error message
      }
    };
  
    fetchData();
  }, [props.searchLength]);
  

  const GetRecommendationView = () => {

    return (
      <div>
        { recList.length > 0 &&  <ul className='song-list'>
          {recList.map((item, index) => (
            <ListItem key={index} track={item} number={index + 1} />
          ))}
        </ul> }

        <button className='more-suggestions-button' onClick={() => GetRecommendations() }>
          <div className='plus-button'>+</div> Get Recommendations
        </button>  
        <div className='warning-text'>By pressing this button, you are consenting to have your Spotify Data sent to OpenAI for processing. Your data will not be saved or stored anywhere.</div>
      </div>
    )
  }
  
  return (
    <div>
      { (props.searchQuery === 'recommendations' && GetRecommendationView() )}


      {(props.searchQuery === 'artists' && artistList.length !== 0) && (
        <ul className='song-list'>
          {artistList.map((item, index) => (
            <ListItem key={index} track={item} number={index + 1} />
          ))}
        </ul>
      )}


      {(props.searchQuery === 'tracks' && songList.length !== 0) && (
        <ul className='song-list'>
          {songList.map((item, index) => (
            <ListItem key={index} track={item} number={index + 1} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;