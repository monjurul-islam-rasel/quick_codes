var track_list =  // use "const" for react
[
  {
    track: {
      track_id: 167685162,
      track_name: "Old Town Road (Remix)",     
      primary_genres: { music_genre_list: [] }
    }
  },
  {
    track: {
      track_id: 162470278,
      track_name: "Old Town Road",      
      primary_genres: {
        music_genre_list: [
          {
            music_genre: {
              music_genre_id: 6,
              music_genre_parent_id: 34,
              music_genre_name: "Country",
              music_genre_name_extended: "Country",
              music_genre_vanity: "Country"
            }
          }
        ]
      }
    }
  }
];

track_list.map(item => (
<Track
  key={item.track.track_id}
  track={item.track}
  dispatch={dispatch}
  delItem={this.delItem}
/>
//console.log(item.track.track_id);
//console.log(item.track.track_name);
));
